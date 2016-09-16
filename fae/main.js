let r, map,
    screenWidth,
    screenHeight;

function init(mapUrl){
  r = new Fae.render.Renderer(initCanvas());
  map = new TileMap(r, mapUrl);
  r.addSystem(new TileMapRenderSystem(r));

  const renderFrame = t =>{
    requestAnimationFrame(renderFrame);
    r.render();
  }
  renderFrame();
}

function initCanvas(){
  const canvas = document.createElement('canvas');
  canvas.width = screenWidth = window.innerWidth;
  canvas.height = screenHeight = window.innerHeight;
  document.body.appendChild(canvas);
  return canvas;
}

document.addEventListener("DOMContentLoaded", e=>{
  const container = document.createElement('div');
  container.className = "map-link-container";
  document.body.appendChild(container);
  generateMapLink('desert.json', container);
  generateMapLink('megalul.json', container);
  // generateMapLink('multiplets.json', container);


  const mapFile = window.location.search.slice(1) || 'desert.json';
  init(`data/${mapFile}`);
});


function generateMapLink(file, container){
  let a = document.createElement("A");
  a.href = window.location.pathname;
  a.search = file;
  a.text = file.slice(0, -5);
  a.className = "map-link";
  container.appendChild(a);
}