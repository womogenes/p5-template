import { keys } from './keys.js';

const draw = () => {
  background(16);
  cam.update();
  keys();

  push();
  translate(cam.x, cam.y);
  scale(cam.zoom);

  fill('#80abf8');
  noStroke();
  ellipse(0, 0, 800, 800);

  pop();
};

export { draw };
