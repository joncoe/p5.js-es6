import p5 from 'p5';
import '../css/style.scss';

const sketch = (p) => {
  let canvas;
  let logo;
  let logoWidth = 250;
  let logoHeight = 114;
  let canvasWidth = 1500;
  let canvasHeight = 1500;

  p.preload = () => {
    logo = p.loadImage('assets/p5js.svg');
  };

  p.setup = () => {
    canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.background(111);
    p.image(
      logo,
      canvasWidth / 2 - logoWidth / 2,
      canvasHeight / 2 - logoHeight / 2
    );
  };

  p.draw = () => {
    
    

  };


  // p.windowResized = () => {
  //   p.resizeCanvas(canvasWidth, canvasHeight);
  //   p.image(
  //     logo,
  //     canvasWidth / 2 - logoWidth / 2,
  //     canvasHeight / 2 - logoHeight / 2
  //   );
  // };

  p.keyPressed = () => {};
};

new p5(sketch);
