import { draw } from './draw.js';
import { Cam } from './Cam.js';
import './mouse.js';

// Globals
window.Vector = p5.Vector;

window.setup = () => {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.querySelector('#sketch-container'));
  pixelDensity(1);
  ellipseMode('center');

  window.cam = new Cam(width / 2, height / 2, 1, 0.5, 0.5); // Probably want to move this into config file later
};

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = draw;
