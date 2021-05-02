import p5 from 'p5';
import '../css/style.scss';

var baseFront = {
  p1: {
    x: 374,
    y: 440
  },
  p2: {
    x: 409,
    y: 406
  },
  p3: {
    x : 358,
    y: 700
  },
  p4: {
    x : 524,
    y: 1139
  },
  p5: {
    x : 1109,
    y: 953
  },
  p6: {
    x : 1073,
    y: 988
  },
  p7: {
    x : 488,
    y: 1174
  },
  p8: {
    x : 323,
    y: 733
  },
  p9: {
    x : 323,
    y: 733
  }
};
var bf = baseFront; // convenient alias





const sketch = (p) => {
  let canvas;
  let baseImage;
  let canvasWidth = 1500;
  let canvasHeight = 1500;

  p.preload = () => {
    baseImage = p.loadImage('assets/basediagram.png');
  };

  p.setup = () => {
    canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.background(111);
    // p.image(
    //   baseImage,
    //   0,
    //   0
    // );
  };

  p.draw = () => {
    
    // p.fill('#ffcc00')
    // p.line(bf.p1.x, bf.p1.y, bf.p2.x, bf.p2.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p2.x, bf.p2.y, bf.p3.x, bf.p3.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p3.x, bf.p3.y, bf.p4.x, bf.p4.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p4.x, bf.p4.y, bf.p5.x, bf.p5.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p5.x, bf.p5.y, bf.p6.x, bf.p6.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p6.x, bf.p6.y, bf.p7.x, bf.p7.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p7.x, bf.p7.y, bf.p8.x, bf.p8.y);
    // p.stroke('#00FFA2');
    // p.line(bf.p8.x, bf.p8.y, bf.p1.x, bf.p1.y);
    // p.stroke('#00FFA2');

    // Base Shape
    p.beginShape()
    p.stroke(255)
    p.vertex(bf.p1.x, bf.p1.y)
    p.vertex(bf.p2.x, bf.p2.y)
    p.vertex(bf.p3.x, bf.p3.y)
    p.vertex(bf.p4.x, bf.p4.y)
    p.vertex(bf.p5.x, bf.p5.y)
    p.vertex(bf.p6.x, bf.p6.y)
    p.vertex(bf.p7.x, bf.p7.y)
    p.vertex(bf.p8.x, bf.p8.y)
    p.endShape(p.CLOSE)

    // // Surface Shape
    // p.beginShape()
    // p.stroke(255)
    // p.vertex(bf.p1.x, bf.p1.y)
    // p.vertex(bf.p2.x, bf.p2.y)
    // p.vertex(bf.p3.x, bf.p3.y)
    // p.vertex(bf.p4.x, bf.p4.y)
    // p.vertex(bf.p5.x, bf.p5.y)
    // p.vertex(bf.p6.x, bf.p6.y)
    // p.vertex(bf.p7.x, bf.p7.y)
    // p.vertex(bf.p8.x, bf.p8.y)
    p.endShape(p.CLOSE)
    

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
