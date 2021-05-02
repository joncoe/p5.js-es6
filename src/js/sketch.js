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
    p.background(200);
    // p.image(
    //   baseImage,
    //   0,
    //   0
    // );
  };

  p.draw = () => {
    
    // Base Shape
    p.beginShape()
    p.noStroke()
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
    
    // Surface Shape
    p.beginShape()
    p.noStroke()
    p.fill('#ED1C24')
    p.vertex(surface.p1.x, surface.p1.y)
    p.vertex(surface.p2.x, surface.p2.y)
    p.vertex(surface.p3.x, surface.p3.y)
    p.vertex(surface.p4.x, surface.p4.y)
    p.vertex(surface.p5.x, surface.p5.y)
    p.vertex(surface.p6.x, surface.p6.y)
    p.vertex(surface.p1.x, surface.p1.y)
    p.endShape(p.CLOSE)

    // Connector Shape
    p.stroke(0)
    p.strokeWeight(1)
    p.line(base.p2.x, base.p2.y, surface.p2.x, surface.p2.y)
    p.line(base.p3.x, base.p3.y, surface.p3.x, surface.p3.y)
    

  };


  p.keyPressed = () => {};
};

new p5(sketch);
