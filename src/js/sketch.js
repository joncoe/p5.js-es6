import p5 from 'p5';
import '../css/style.scss';


let minShapeDepth = 35;
let maxShapeDepth = 106;
let friction = 0.1;

let randomDepths, red, green, blue;
let cSurface, cRed, cGreen, cBlue;

const animate = true;


// set initial values
red = Math.round(Math.random() * 255);
green = Math.round(Math.random() * 255);
blue = Math.round(Math.random() * 255);

// 50 * 

const base = {
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
  p5: {
    x: 1113,
    y: 652
  },
  p6: {
    x: 815,
    y: 368
  }
};

let surface = JSON.parse(JSON.stringify(base));



function makeShape() {
  
  cSurface = JSON.parse(JSON.stringify(surface));
  cRed = red
  cGreen = green
  cBlue = blue


  red = Math.round(Math.random() * 255);
  green = Math.round(Math.random() * 255);
  blue = Math.round(Math.random() * 255);




  randomDepths = {
    vertex1: minShapeDepth + (Math.random() * maxShapeDepth),
    vertex2: minShapeDepth + (Math.random() * maxShapeDepth),
    vertex3: minShapeDepth + (Math.random() * maxShapeDepth),
    vertex4: minShapeDepth + (Math.random() * maxShapeDepth),
    vertex5: minShapeDepth + (Math.random() * maxShapeDepth),
    vertex6: minShapeDepth + (Math.random() * maxShapeDepth),
  }


  surface = {
    p1: {
      x: base.p1.x + randomDepths.vertex1,
      y: base.p1.y - randomDepths.vertex1
    },
    p2: {
      x: base.p2.x + randomDepths.vertex2,
      y: base.p2.y - randomDepths.vertex2
    },
    p3: {
      x: base.p3.x + randomDepths.vertex3,
      y: base.p3.y - randomDepths.vertex3
    },
    p4: {
      x: base.p4.x + randomDepths.vertex4,
      y: base.p4.y - randomDepths.vertex4
    },
    p5: {
      x: base.p5.x + randomDepths.vertex5,
      y: base.p5.y - randomDepths.vertex5
    },
    p6: {
      x : base.p6.x + randomDepths.vertex5,
      y: base.p6.y - randomDepths.vertex6
    }
  };
}

makeShape();



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
    p.background(200);

    if (animate == true) {

      cRed = p.lerp(cRed, red, 0.05)
      cGreen = p.lerp(cGreen, green, 0.05)
      cBlue = p.lerp(cBlue, blue, 0.05)

      cSurface = {
        p1: {
          x: p.lerp(cSurface.p1.x, surface.p1.x, friction),
          y: p.lerp(cSurface.p1.y, surface.p1.y, friction),
        },
        p2: {
          x: p.lerp(cSurface.p2.x, surface.p2.x, friction),
          y: p.lerp(cSurface.p2.y, surface.p2.y, friction),
        },
        p3: {
          x: p.lerp(cSurface.p3.x, surface.p3.x, friction),
          y: p.lerp(cSurface.p3.y, surface.p3.y, friction),
        },
        p4: {
          x: p.lerp(cSurface.p4.x, surface.p4.x, friction),
          y: p.lerp(cSurface.p4.y, surface.p4.y, friction),
        },
        p5: {
          x: p.lerp(cSurface.p5.x, surface.p5.x, friction),
          y: p.lerp(cSurface.p5.y, surface.p5.y, friction),
        },
        p6: {
          x: p.lerp(cSurface.p6.x, surface.p6.x, friction),
          y: p.lerp(cSurface.p6.y, surface.p6.y, friction),
        },
        
      };

      p.beginShape()
      p.noStroke()
      p.fill(255)
      p.vertex(base.p1.x, base.p1.y)
      p.vertex(base.p2.x, base.p2.y)
      p.vertex(base.p3.x, base.p3.y)
      p.vertex(base.p4.x, base.p4.y)
      p.vertex(cSurface.p4.x, cSurface.p4.y)
      p.vertex(cSurface.p3.x, cSurface.p3.y)
      p.vertex(cSurface.p2.x, cSurface.p2.y)
      p.vertex(cSurface.p1.x, cSurface.p1.y)
      p.endShape(p.CLOSE)
      

      
      p.beginShape()
      p.noStroke()
      p.fill(cRed, cGreen, cBlue)
      p.vertex(cSurface.p1.x, cSurface.p1.y)
      p.vertex(cSurface.p2.x, cSurface.p2.y)
      p.vertex(cSurface.p3.x, cSurface.p3.y)
      p.vertex(cSurface.p4.x, cSurface.p4.y)
      p.vertex(cSurface.p5.x, cSurface.p5.y)
      p.vertex(cSurface.p6.x, cSurface.p6.y)
      p.vertex(cSurface.p1.x, cSurface.p1.y)
      p.endShape(p.CLOSE)

      p.stroke(0)
      p.strokeWeight(1)
      // p.line(base.p2.x, base.p2.y, tSurface.p2.x, tSurface.p2.y)
      // p.line(base.p3.x, base.p3.y, tSurface.p3.x, tSurface.p3.y)
      p.line(base.p2.x, base.p2.y, cSurface.p2.x, cSurface.p2.y)
      p.line(base.p3.x, base.p3.y, cSurface.p3.x, cSurface.p3.y)


    } else {

      

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
      p.fill(red, green, blue)
      p.vertex(surface.p1.x, surface.p1.y)
      p.vertex(surface.p2.x, surface.p2.y)
      p.vertex(surface.p3.x, surface.p3.y)
      p.vertex(surface.p4.x, surface.p4.y)
      p.vertex(surface.p5.x, surface.p5.y)
      p.vertex(surface.p6.x, surface.p6.y)
      p.vertex(surface.p1.x, surface.p1.y)
      p.endShape(p.CLOSE)

      p.stroke(0)
      p.strokeWeight(1)
      p.line(base.p2.x, base.p2.y, surface.p2.x, surface.p2.y)
      p.line(base.p3.x, base.p3.y, surface.p3.x, surface.p3.y)
    }

  };

  p.keyPressed = () => {};

  p.mouseClicked = makeShape;
};

new p5(sketch);
