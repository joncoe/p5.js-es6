import p5 from 'p5';
import '../css/style.scss';

var base = {
  p1: {
    x: 374,
    y: 440
  },

  p2: {
    x : 323,
    y: 733
  },


  p3: {
    x : 488,
    y: 1174
  },

  p4: {
    x : 1073,
    y: 988
  },
};
var surface = {
  p1: {
    x: 409,
    y: 406
  },
  p2: {
    x : 358,
    y: 700
  },
  p3: {
    x : 524,
    y: 1139
  },
  p4: {
    x : 1109,
    y: 953
  },
  p5: {
    x : 1143,
    y: 622
  },
  p6: {
    x : 845,
    y: 338
  }
};






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
    p.fill(255)
    p.vertex(base.p1.x, base.p1.y)
    p.vertex(base.p2.x, base.p2.y)
    p.vertex(base.p3.x, base.p3.y)
    p.vertex(base.p4.x, base.p4.y)
    p.vertex(surface.p4.x, surface.p4.y)
    p.vertex(surface.p3.x, surface.p3.y)
    p.vertex(surface.p2.x, surface.p2.y)
    p.vertex(surface.p1.x, surface.p1.y)
    p.endShape(p.CLOSE)
    
    
    p.beginShape()
    p.stroke('#ffcc00')
    p.fill('#ffcc00')
    p.vertex(surface.p1.x, surface.p1.y)
    p.vertex(surface.p2.x, surface.p2.y)
    p.vertex(surface.p3.x, surface.p3.y)
    p.vertex(surface.p4.x, surface.p4.y)
    p.vertex(surface.p5.x, surface.p5.y)
    p.vertex(surface.p6.x, surface.p6.y)
    p.vertex(surface.p1.x, surface.p1.y)
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
