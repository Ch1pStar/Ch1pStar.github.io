class TileMapRenderSystem extends Fae.ecs.System{

  constructor(renderer, priority = TileMapRenderSystem.defaultPriority, frequency = 1){
    super(renderer, priority, frequency);

    this.tilemapRenderer = new TilemapRenderer(renderer);
  }

    test(entity){
        return entity.hasComponents(
            Fae.ecs.VisibilityComponent,    // whether or not to render
            Fae.transform.TransformComponent,         // where to render
            Fae.textures.TextureComponent,       // what to render
            TileMapComponent
        );
    }

    update(tilemap){
        if (!tilemap.visible) return;

        this.renderer.setActiveObjectRenderer(this.tilemapRenderer);
        const clean = !tilemap._anchorDirty && tilemap._cachedTransformUpdateId === tilemap.transform._worldUpdateId;

        if (!clean){
            tilemap.vertexData = [];               
        

            const drawRect = tilemap.screenRect;
            drawRect.x = -tilemap.transform.x;
            drawRect.y = -tilemap.transform.y;

            drawRect.width /= tilemap.transform.scaleX; 
            drawRect.height /= tilemap.transform.scaleY; 

            const panSpeed = tilemap.panSpeed;
            const offset = panSpeed<1?1:panSpeed;

            const x0 = Math.floor(drawRect.left/map.tilewidth)-offset;
            const x1 = Math.floor(drawRect.right/map.tilewidth)+offset;
            const y0 = Math.floor(drawRect.top/map.tileheight)-offset;
            const y1 = Math.floor(drawRect.bottom/map.tileheight)+offset;

            const width = tilemap.width;

            for(let i = y0; i<y1; i++){
              for(let j = x0; j<x1;j++){
                
                const row = j%(tilemap.height*map.tilewidth);
                const col = width*i;

                let layerOffset = 0;
                let frame = 0;
                for(let k = 0; k < tilemap.layers.length; k++){
                    if(tilemap.layers[k].visible){
                        layerOffset += tilemap.layerLen*k;
                        const nFrame = tilemap.layerData[row+col+layerOffset];
                        if(nFrame != 0){
                            frame = nFrame;
                        }
                    }
                }

                if(!frame){
                    frame = tilemap.defaultTile;
                }

                calculateVertices(tilemap, j*map.tilewidth, i*map.tileheight, frame);
              }
            }

            tilemap._cachedTransformUpdateId = tilemap.transform._worldUpdateId;
            tilemap._anchorDirty = false;
        }

        this.tilemapRenderer.render(tilemap);
    }
}

function calculateVertices(map, x, y, frame){
    // set the vertex data
    const wt = map.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;
    const vertexData = map.vertexData;
    const outVert = new Float32Array(9);
    const rect = map.screenRect;

    let w0;
    let w1;
    let h0;
    let h1;

    w0 = x;
    w1 = x+map.tilewidth;

    h0 =  y;
    h1 =  y+map.tileheight;

    // xy
    outVert[0] = (a * w1) + (c * h1) + tx;
    outVert[1] = (d * h1) + (b * w1) + ty;

    // xy
    outVert[2] = (a * w0) + (c * h1) + tx;
    outVert[3] = (d * h1) + (b * w0) + ty;

    // xy
    outVert[4] = (a * w0) + (c * h0) + tx;
    outVert[5] = (d * h0) + (b * w0) + ty;

    // xy
    outVert[6] = (a * w1) + (c * h0) + tx;
    outVert[7] = (d * h0) + (b * w1) + ty;

    //TODO Use uniform instead of attribute in shader
    outVert[8] = frame;

    vertexData.push(outVert);
}


TileMapRenderSystem.defaultPriority = Fae.ecs.System.PRIORITY.RENDER+1;
