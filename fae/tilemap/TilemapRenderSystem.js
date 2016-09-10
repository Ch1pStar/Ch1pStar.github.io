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

        let panSpeed = .1;

        if(!tilemap.mouseDown){
          // tilemap.transform.y -= panSpeed*30;
          // tilemap.transform.x -= panSpeed*30;
        }

        tilemap.vertexData = [];

        this.renderer.setActiveObjectRenderer(this.tilemapRenderer);

        const clean = !tilemap._anchorDirty && tilemap._cachedTransformUpdateId === tilemap.transform._worldUpdateId;

        const l = tilemap.layers[0];

        const drawRect = tilemap.screenRect;
        drawRect.x = -tilemap.transform.x;
        drawRect.y = -tilemap.transform.y;

        drawRect.width /= tilemap.transform.scaleX; 
        drawRect.height /= tilemap.transform.scaleY; 

        let offset = panSpeed<1?1:panSpeed;

        let x0 = Math.floor(drawRect.left/map.tilewidth)-offset;
        let x1 = Math.floor(drawRect.right/map.tilewidth)+offset;
        let y0 = Math.floor(drawRect.top/map.tileheight)-offset;
        let y1 = Math.floor(drawRect.bottom/map.tileheight)+offset;

        const width = l.width;


        for(let i = y0; i<y1; i++){
          for(let j = x0; j<x1;j++){
            let row = Math.abs(j)%(tilemap.height*map.tilewidth);
            let col = Math.abs(width*i);
            let index = l.data[row+col]||13;
            calculateVertices(tilemap, j*map.tilewidth, i*map.tileheight, index-1);
            this.tilemapRenderer.render(tilemap);
          }
        }

        // debugger;



        // console.log(l.data.length);
        // if (tilemap._texture.ready && !clean){
        //     calculateVertices(sprite);
        //     sprite._cachedTransformUpdateId = sprite.transform._worldUpdateId;
        //     sprite._anchorDirty = false;
        // }

        // this.tilemapRenderer.render(tilemap);
    }
}

function calculateVertices(map, x, y, index){
    // set the vertex data
    const wt = map.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;
    let vertexData = map.vertexData;
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
    outVert[8] = index;
    
    vertexData.push(outVert);
}


TileMapRenderSystem.defaultPriority = Fae.ecs.System.PRIORITY.RENDER+1;
