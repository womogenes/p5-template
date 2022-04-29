import { draw } from './draw.js';

// Globals
window.Vector = p5.Vector;

window.setup = () => {
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.querySelector('#sketch-container'));
  pixelDensity(2);
};

window.windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};

window.draw = draw;
