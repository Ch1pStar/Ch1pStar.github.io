let r, map,
    screenWidth,
    screenHeight;

function init(){
  r = new Fae.render.Renderer(initCanvas());
  map = new TileMap(r, 'data/megalul.json');
  r.addSystem(new TileMapRenderSystem(r));

  let renderFrame = t =>{
    requestAnimationFrame(renderFrame);
    r.render();
  }
  renderFrame();
}

function initCanvas(){
  let canvas = document.createElement('canvas');
  canvas.width = screenWidth = window.innerWidth;
  canvas.height = screenHeight = window.innerHeight;
  document.body.appendChild(canvas);
  return canvas;
}

document.addEventListener("DOMContentLoaded", e=> {
  init();
});