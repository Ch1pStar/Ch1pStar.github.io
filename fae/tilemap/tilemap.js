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
    this.layers = [];
    this.mouseDown = false;
    this.dragStartPosition = [0,0];
    this.dragSpeed = 3;
    this.dragDirection = -1;

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

      for(let i in data.tilesets){
        this._loadTileset(data.tilesets[i]);
      }

      this.screenRect = new Fae.shapes.Rectangle(-this.transform.x, -this.transform.y, screenWidth, screenHeight);


      this.vertexData = [];

      this.tint = Fae.util.Color.WHITE.clone();

      this.renderer.addEntity(this);

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

  _loadTileset(tileset){
    const img = new Image();
    img.src = tileset.image;
    this.texture = new Fae.textures.Texture(img);

    this.tilesetSpacing = tileset.spacing;
    this.tilesetMargin = tileset.margin;

    this.tilesetCols = (tileset.imagewidth - (tileset.imagewidth%tileset.tilewidth))/tileset.tilewidth;
    this.tilesetRows = (tileset.imageheight- (tileset.imageheight%tileset.tileheight))/tileset.tileheight;

    console.log(this.tilesetCols);
    console.log(this.tilesetRows);
  }

  loadMapFile(url){
    let p = new Promise((resolve,reject)=>{
      let req = new XMLHttpRequest();
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