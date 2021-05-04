import p5 from 'p5';
import '../css/style.scss';


var minShapeDepth = 35;
var maxShapeDepth = 106;

var randomDepth = minShapeDepth + (Math.random() * maxShapeDepth);

// 50 * 

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
  p5: {
    x: 1113,
    y: 652
  },
  p6: {
    x: 815,
    y: 368
  }
};

let randomDepths = {
  vertex1: minShapeDepth + (Math.random() * maxShapeDepth),
  vertex2: minShapeDepth + (Math.random() * maxShapeDepth),
  vertex3: minShapeDepth + (Math.random() * maxShapeDepth),
  vertex4: minShapeDepth + (Math.random() * maxShapeDepth),
  vertex5: minShapeDepth + (Math.random() * maxShapeDepth),
  vertex6: minShapeDepth + (Math.random() * maxShapeDepth),
}


var surface = {
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



// set initial values
let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);





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
    //p.fill('#ED1C24')
    p.fill(red, green, blue)
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

  p.mouseClicked = () => {
    // set new random values for the variables defined above:
    red = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    
    
    let randomDepths = {
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
};

new p5(sketch);
