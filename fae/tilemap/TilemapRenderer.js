class TilemapRenderer extends Fae.render.ObjectRenderer{
  constructor(renderer){
    super(renderer);

    this.vertSize = 6;
    this.vertByteSize = this.vertSize * 4;
    this.size = BitTwiddle.nextPow2(TilemapRenderer.DEFAULT_SPRITE_BATCH_SIZE);
    this.buffers = [];
    this.indices = Fae.glutil.GLQuad.createIndices(this.size);
    
    this.shader = null;
    
    // create buffer views
    for (let i = 1; i <= this.size; i *= 2){
        const viewSize = i * 4 * this.vertByteSize;

        this.buffers.push(new Fae.util.Buffer(viewSize));
    }

    this.currentIndex = 0;
    this.tick = 0;
    this.groups = [];
  
    for (let k = 0; k < this.size; ++k){
        this.groups[k] = {
            textures: [],
            size: 0,
            start: 0,
            blend: null,
            shader: null,
        };
    }

    this.tileMap = null;

    this.startNumVaos = 2;
    this.vertexBuffers = [];
    this.vaos = [];

    this.vertexCount = -1;

    this.indexBuffer = null;

    this.vao = null;
    this.currentBlendMode = null;

    this._maxTextures = 0;

    this._onBeforeRenderBinding = renderer.onBeforeRender.add(this.onBeforeRender, this);
    this._onContextChangeBinding = renderer.onContextChange.add(this.onContextChange, this);

    this.onContextChange();

    console.log(this);
  }    
  onContextChange(){
    const gl = this.renderer.gl;

    this._destroyGlObjects();

    // check max textures the GPU can handle.
    this._maxTextures = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), TilemapRenderer.MAX_TEXTURE_COUNT);

    // check the maximum number of if statements shaders are allowed *up to* the max textures.
    this._maxTextures = Fae.util.getMaxIfStatmentsInShader(gl, this._maxTextures);

    this.shader = createTileMapShader(this.renderer);

    // create new index buffer
    this.indexBuffer = Fae.glutil.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

    // we use the second shader as the first one depending on your browser may omit aTextureId
    // as it is not used by the shader so is optimized out.
    const attribs = this.shader.attributes;
    const maxVaos = this.vertexBuffers.length || this.startNumVaos;

    // create initial vertex buffers and VAOs
    for (let i = 0; i < maxVaos; ++i){
        this._createVao(gl, attribs);
    }

    this.vao = this.vaos[0];
    this.currentBlendMode = null;
  }
  destroy(){
    // detach events
    this._onBeforeRenderBinding.detach();
    this._onBeforeRenderBinding = null;

    this._onContextChangeBinding.detach();
    this._onContextChangeBinding = null;

    this._destroyGlObjects();

    // destroy buffers.
    for (let i = 0; i < this.buffers.length; ++i)
    {
        this.buffers[i].destroy();
    }

    // null references
    this.buffers = null;
    this._buffersMem = null;
    this.indices = null;
    this.shader = null;
    this.groups = null;
    this.tileMap = null;
    this.vertexBuffers = null;
    this.vaos = null;
    this.indexBuffer = null;

    super.destroy();
  }

  onBeforeRender(){
      this.vertexCount = -1;
  }

  start(){
      this.tick %= 1000;
  }

  
  stop(){
      this.flush();
      this.vao.unbind();
  }

  _createVao(gl, attribs){
    const vbuffer = Fae.glutil.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);

    this.vertexBuffers.push(vbuffer);

    // build the vao object that will render..
    this.vaos.push(
        new Fae.glutil.GLVertexArrayObject(this.renderer.gl)
            .setIndexBuffer(this.indexBuffer)
            .addAttribute(vbuffer, attribs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0)
            .addAttribute(vbuffer, attribs.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4)
            .addAttribute(vbuffer, attribs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4)
            .addAttribute(vbuffer, attribs.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4)
            .addAttribute(vbuffer, attribs.aFrame, gl.FLOAT, false, this.vertByteSize, 5 * 4)
    );
  }

  _destroyGlObjects(){
    if(this.shader){
      this.shader.destroy();
    }

    // destroy vaos
    for (let i = 0; i < this.vaos.length; ++i){
        this.vaos[i].destroy();
    }
    this.vaos.length = 0;

    // destroy vertex buffers
    for (let i = 0; i < this.vertexBuffers.length; ++i){
        this.vertexBuffers[i].destroy();
    }
    this.vertexBuffers.length = 0;

    // destroy index buffer
    if (this.indexBuffer){
        this.indexBuffer.destroy();
    }
    this.indexBuffer = null;
  }

  flush(){

    if (this.currentIndex === 0) return;

    const gl = this.renderer.gl;

    const np2 = BitTwiddle.nextPow2(this.currentIndex);
    const log2 = BitTwiddle.log2(np2);
    const buffer = this.buffers[log2];

    let index = 0;
    let nextTexture = null;
    let currentTexture = null;
    let groupCount = 1;
    let textureCount = 0;
    let currentGroup = this.groups[0];
    let blendMode = Fae.util.BlendMode.NORMAL;

    currentGroup.textures.length = 0;
    currentGroup.start = 0;
    currentGroup.blend = blendMode;
    currentGroup.shader = null;

    this.tick++;
    
    const map = this.tileMap;

    for (let i = 0; i < this.currentIndex; ++i){
            // upload the sprite elemetns...
            // they have all ready been calculated so we just need to push them into the buffer.


            nextTexture = map._texture.source;

            if (currentTexture !== nextTexture){
                currentTexture = nextTexture;

                if (nextTexture._enabled !== this.tick)
                {
                    if (textureCount === this._maxTextures)
                    {
                        this.tick++;

                        textureCount = 0;

                        currentGroup.size = i - currentGroup.start;

                        currentGroup = this.groups[groupCount++];
                        currentGroup.textures.length = 0;
                        currentGroup.blend = blendMode;
                        currentGroup.start = i;
                        currentGroup.shader = this.shader;
                    }

                    // TODO: I don't like this, change this to not add properties to texture
                    nextTexture._enabled = this.tick;
                    nextTexture._id = textureCount;

                    const glTexture = nextTexture.getGlTexture(this.renderer);

                    if (glTexture)
                    {
                        currentGroup.textures.push(glTexture);
                        textureCount++;
                    }
                }
            }

            // TODO: this sum does not need to be set each frame, dirty flag?
            const tint = map.tint.bgr + (map.worldAlpha * 255 << 24);
            const uvs = map._texture._uvs.uvsUint32;
            const textureId = nextTexture._id;
            const vertexData = map.vertexData[i];
            // const vertexData = map.vertexData.pop();


            // debugger;

            // xy
            buffer.float32View[index++] = vertexData[0];
            buffer.float32View[index++] = vertexData[1];
            buffer.uint32View[index++] = uvs[0];
            buffer.uint32View[index++] = tint;
            buffer.float32View[index++] = textureId;
            buffer.float32View[index++] = vertexData[8];

            // xy
            buffer.float32View[index++] = vertexData[2];
            buffer.float32View[index++] = vertexData[3];
            buffer.uint32View[index++] = uvs[1];
            buffer.uint32View[index++] = tint;
            buffer.float32View[index++] = textureId;
            buffer.float32View[index++] = vertexData[8];

            // xy
            buffer.float32View[index++] = vertexData[4];
            buffer.float32View[index++] = vertexData[5];
            buffer.uint32View[index++] = uvs[2];
            buffer.uint32View[index++] = tint;
            buffer.float32View[index++] = textureId;
            buffer.float32View[index++] = vertexData[8];

            // xy
            buffer.float32View[index++] = vertexData[6];
            buffer.float32View[index++] = vertexData[7];
            buffer.uint32View[index++] = uvs[3];
            buffer.uint32View[index++] = tint;
            buffer.float32View[index++] = textureId;
            buffer.float32View[index++] = vertexData[8];
        }

        currentGroup.size = this.currentIndex - currentGroup.start;

        this.vertexCount++;

        if (this.vertexBuffers.length <= this.vertexCount){
            this._createVao(gl, this.shader.attributes);
        }


        this.vertexBuffers[this.vertexCount].upload(buffer.buffer, 0);
        this.vao = this.vaos[this.vertexCount].bind();


        // render the groups..
        for (let i = 0; i < groupCount; ++i){
            const group = this.groups[i];
            const groupTextureCount = group.textures.length;
            if (!groupTextureCount) continue;

            let shader = null;

            if (group.shader){
                shader = group.shader;
            }else{
                shader = this.shader;
            }

            if (!shader){
                shader = this.shader = createTileMapShader(gl);
            }
            this.renderer.state.setShader(shader);
            
            if(this.tileMap){
                shader.uniforms.textureTileWidth = this.tileMap.tilesetCols;
                shader.uniforms.textureTileHeight = this.tileMap.tilesetRows;
            }


            for (let j = 0; j < groupTextureCount; ++j){
                group.textures[j].bind(j);
            }

            // set the blend mode..
            this.renderer.state.setBlendMode(group.blend);

            gl.drawElements(gl.TRIANGLES, group.size * 6, gl.UNSIGNED_SHORT, group.start * 6 * 2);
        }

        // reset elements for the next flush
        this.currentIndex = 0;
  }


  render(tilemap){
    for(let i  = 0; i < tilemap.vertexData.length;i++){

        if (this.currentIndex >= this.size){
            this.flush();
        }

        // // if the uvs have not updated then no point rendering just yet!
        if (!tilemap.texture._uvs){
            return;
        }

        // increment the batchsize
        // this.tiles[this.currentIndex++] = sprite;
        this.currentIndex++;
        this.tileMap = tilemap;
    }
  }
}

TilemapRenderer.DEFAULT_SPRITE_BATCH_SIZE = 4096;
TilemapRenderer.MAX_TEXTURE_COUNT = 32;

function createTileMapShader(renderer){
    console.trace();

    let vertSource = document.getElementById('tilemap-vs').textContent;
    let fragSource = document.getElementById('tilemap-fs').textContent;

    const shader = new Fae.render.Shader(renderer, vertSource, fragSource);

    shader.bind();
    shader.uniforms.uSampler = 0;
    return shader;
}