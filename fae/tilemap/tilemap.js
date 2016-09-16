const TileMapComponent = (base) => class extends base {
    constructor() {
        super(...arguments);
    }
};

class TileMap extends Fae.ecs.Entity.with(
    Fae.ecs.VisibilityComponent,    // whether or not to render
    Fae.transform.TransformComponent,         // where to render
    Fae.textures.TextureComponent,
    Fae.interaction.InteractionComponent,
    TileMapComponent
  ){
  constructor(renderer, map){
    super();

    this.renderer = renderer;

    this.layers = null;

    this.tilesets = [];

    this.mouseDown = false;

    this.dragStartPosition = [0,0];

    this.dragSpeed = 3;

    this.dragDirection = -1;

    this.panSpeed = .1;

    this.vertexData = [];

    this.tilesetData = [];

    this.layerData = null;

    this.tilesetsReady = false;

    this.defaultTile = 13;

    this.currGid = 1;

    this.loadMapFile(map)
    .then(this._initMap.bind(this),
    e=>console.error(`Error loading "${map}" ${e}`));
  }

  _initMap(data){
      this.layers = data.layers;

      this.tilesets = data.tilesets;

      this.tilewidth = data.tilewidth;

      this.tileheight = data.tileheight;

      this.version = data.version;

      this.width = data.width;

      this.height = data.height;

      this.pixelWidth = data.width*data.tilewidth;

      this.pixelHeight = data.height*data.tileheight;

      this._loadTilesets(data);

      this._parseLayers(data);

      this.screenRect = new Fae.shapes.Rectangle(-this.transform.x, -this.transform.y, screenWidth, screenHeight);

      this.tint = Fae.util.Color.WHITE.clone();

      this._initInteraction();
  }

  _initInteraction(){
    this.onMove.add(p=>{
      if(this.mouseDown){
        this.panMap(p.clientX, p.clientY);
      }
    });

    this.onDown.add(p=>{
      this.mouseDown = true;
      this.dragStartPosition =[p.clientX,p.clientY];
    });

    this.onUp.add(p=>{
      this.mouseDown = false;
    });

    console.log("Hold a mouse button down to drag the map");

    // this.onScroll.add(p=>{
    //   console.log(p);
    // });
  }

  panMap(x,y){
    const dragSpeed = this.dragSpeed;

    const dragDirection = this.dragDirection;

    const xDiff = (this.dragStartPosition[0]+(-x))*dragSpeed;
    const yDiff = (this.dragStartPosition[1]+(-y))*dragSpeed;

    const updatedX = this.transform.x+(xDiff*dragDirection);
    const updatedY = this.transform.y+(yDiff*dragDirection);

    if(-updatedX >= 0 && (-updatedX)+screenWidth <= this.pixelWidth){
      this.transform.x = updatedX;
    }

    if(-updatedY >= 0 && (-updatedY)+screenHeight <= this.pixelHeight){
      this.transform.y = updatedY;
    }

    this.dragStartPosition = [x, y];
  }

  _loadTilesets(data){
    for(let i = 0; i < data.tilesets.length;i++){
      const tileset = data.tilesets[i];

      const img = new Image();
      img.src = `data/${tileset.image}`;

      tileset.texture = new Fae.textures.Texture(img);

      tileset.texture.source.onReady.add(()=>{
        tileset.cols = (tileset.imagewidth - (tileset.imagewidth%tileset.tilewidth))/tileset.tilewidth;
        tileset.rows = (tileset.imageheight - (tileset.imageheight%tileset.tileheight))/tileset.tileheight;

        const lastGid = tileset.lastGid = tileset.cols*tileset.rows+this.currGid;
        const txt = tileset.texture;
        let offSetX = 0;
        let offSetY = 0;
        let localId = 0;
        
        while(this.currGid < lastGid){
          const colIndex = localId%tileset.cols;
          const rowIndex = Math.floor(localId/tileset.cols);

          offSetX = tileset.margin + colIndex*tileset.spacing;
          offSetY = tileset.margin + rowIndex*tileset.spacing;

          const x = (colIndex*tileset.tilewidth)+offSetX;
          const y = (rowIndex*tileset.tileheight)+offSetY;

          const tileFrame = new Fae.shapes.Rectangle(
            x, 
            y, 
            tileset.tilewidth,
            tileset.tileheight
          );

          const uvs = new Fae.textures.TextureUVs();
          uvs.set(tileFrame, txt.frame, Math.PI);

          const tilesetData = new Uint32Array(uvs.uvsUint32.length+1);
          tilesetData.set(uvs.uvsUint32);
          tilesetData[uvs.uvsUint32.length] = i;

          this.tilesetData[this.currGid++] = tilesetData;
          localId++;
        }

        if(i==data.tilesets.length-1){
          //TODO emit a ready signal here
          this.tilesetsReady = true;
          this.renderer.addEntity(this);
        } 

      });
    }

    map.tilesets = data.tilesets;
  }

  _parseLayers(data){
    const layers = data.layers;
    const layerLen = this.layerLen = data.width*data.height;

    this.layerData = new Uint32Array(layerLen*layers.length);
    for(let i = 0; i < layers.length;i++){
      const layer = data.layers[i];
      this.layerData.set(data.layers[i].data, i*layerLen);
    }
  }

  loadMapFile(url){
    let p = new Promise((resolve,reject)=>{
      const req = new XMLHttpRequest();
      req.responseType = 'json';
      req.open('get', url);
      req.send();
      
      req.onload = ()=>{
        if (req.status >= 200 && req.status < 300)
          resolve(req.response);
        else 
          reject(req.statusText);
      }

      req.onerror = ()=>{
        reject(req.statusText);
      }
    });
    return p;
  }

  _updateBounds(){
    this._bounds.clear();

    const wt = this.transform.worldTransform;
    const a = wt.a;
    const b = wt.b;
    const c = wt.c;
    const d = wt.d;
    const tx = wt.tx;
    const ty = wt.ty;

    const w0 = this.screenRect.left;
    const w1 = this.screenRect.right;

    const h0 = this.screenRect.top;
    const h1 = this.screenRect.bottom;

    this._bounds.addQuad([
      (a * w1) + (c * h1) + tx,
      (d * h1) + (b * w1) + ty,

      (a * w0) + (c * h1) + tx,
      (d * h1) + (b * w0) + ty,

      (a * w0) + (c * h0) + tx,
      (d * h0) + (b * w0) + ty,

      (a * w1) + (c * h0) + tx,
      (d * h0) + (b * w1) + ty,
    ]);

  }
}