'use strict'

let renderer;

const w = window.innerWidth;
const h = window.innerHeight;

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(w, h);
  // renderer = new PIXI.CanvasRenderer(w, h);
  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();
  window.stage = stage;

  const txt = PIXI.Texture.fromImage('p4.png');

  const particleContainer = new PIXI.Container();
  stage.addChild(particleContainer);

  const particleCountText = new PIXI.Text('Particle Count', {fill: 0xffffff});
  particleCountText.y = h - particleCountText.height;
  stage.addChild(particleCountText);


  const emitter = new Quark.Emitter();
  window.emitter = emitter;
  emitter.p.x = w / 2;
  emitter.p.y = h / 2;


  emitter.addInitialize(new Quark.Velocity(2, Quark.getSpan(0, 360), 'polar'));
  emitter.emit();

  emitter.particleCreated.add((particle) => {
      const sp = new PIXI.Sprite(txt);

      particle.sprite = sp;
      particleContainer.addChild(sp);
  });

  emitter.particleUpdate.add((particle) => {
      const sp = particle.sprite;
      sp.position.x = particle.p.x;
      sp.position.y = particle.p.y;
      // sp.scale.x = particle.scale/2;
      // sp.scale.y = particle.scale/2;
      // sp.anchor.x = 0.5;
      // sp.anchor.y = 0.5;
      // sp.alpha = particle.alpha;
      // sp.rotation = particle.rotation*Math.PI/180;
  });

  emitter.particleDead.add((particle) => {
    particleContainer.removeChild(particle.sprite);
  });


  const draw = t=>{
    requestAnimationFrame(draw);
    renderer.render(stage);
    emitter.update(0.0167);

    particleCountText.text = particleContainer.children.length;
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});