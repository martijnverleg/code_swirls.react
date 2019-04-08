import TriShape from './trishape';

function background(p5) {
  const triShapes = [];
  let maxTriShapesize;

  const canvasWidth = p5.windowWidth;
  const canvasHeight = p5.windowHeight;

  p5.setup = function() {
    p5.createCanvas(canvasWidth, canvasHeight);

    p5.angleMode(p5.DEGREES);
    p5.frameRate(30);
    p5.background(255, 255, 255);

    p5.noFill();
    p5.strokeWeight(15);
    p5.stroke(200);

    maxTriShapesize = calcTriangleHeight();

    for (let i = 0; i < 25; i++) {
      triShapes.push(new TriShape((1 / 25) * i));
      triShapes[i].points = triShapes[i].points = generateTriShape(maxTriShapesize);
    }
  };

  p5.draw = function() {
    p5.background(0);

    let scaleAdder = (0.001 / canvasHeight) * p5.mouseY + 0.0015;
    let rotationMultiplier = (48 / canvasWidth) * p5.mouseX - 24;

    if (p5.rotationX != null && p5.rotationX !== 0) {
      scaleAdder = 0.0025 - (0.005 / 360) * p5.rotationX;
      rotationMultiplier = p5.rotationY;
    }

    for (let i = 0; i < triShapes.length; i++) {
      if (triShapes[i].scale > 1) {
        triShapes.splice(i, 1);
        triShapes.unshift(new TriShape(0));
        triShapes[0].points = triShapes[i].points = generateTriShape(maxTriShapesize);
      }
      triShapes[i].scale += scaleAdder;
      triShapes[i].rotation = rotationMultiplier * triShapes[i].scale;

      showTriShape(triShapes[i]);
    }
  };

  function calcTriangleHeight() {
    const aspectRatio = p5.windowWidth / p5.windowHeight;
    const triangleRatio = (1 / (aspectRatio - 0.13)) * 0.64 + 1.26;

    return (triangleRatio * p5.windowWidth) / 1.4;
  }

  function generateTriangle(maxSize) {
    const a = p5.createVector(0, - maxSize);
    const b = p5.createVector(0, 0);
    const c = p5.createVector(0, 0);

    b.x = a.x * p5.cos(120) - a.y * p5.sin(120);
    b.y = a.x * p5.sin(120) + a.y * p5.cos(120);

    c.x = a.x * p5.cos(240) - a.y * p5.sin(240);
    c.y = a.x * p5.sin(240) + a.y * p5.cos(240);

    return [a, b, c,];
  }

  function generateTriShape(maxSize) {
    const centerPoints = generateTriangle(maxSize * 0.75);
    const points = [];

    centerPoints.forEach(function(point) {
      const a = p5.createVector(0, 0);
      const b = p5.createVector(0, 0);
      
      a.x = point.x * p5.cos(-15) - point.y * p5.sin(-15);
      a.y = point.x * p5.sin(-15) + point.y * p5.cos(-15);
  
      b.x = point.x * p5.cos(15) - point.y * p5.sin(15);
      b.y = point.x * p5.sin(15) + point.y * p5.cos(15);

      points.push(a, b);
    });

    return points;
  }

  function showTriShape(triShape) {
    p5.push();

    p5.translate(p5.windowWidth / 2, p5.windowHeight / 2);
    p5.rotate(triShape.rotation);
    p5.scale(triShape.scale);
    
    p5.beginShape();
    triShape.points.forEach(function(point) {
      p5.vertex(point.x, point.y);
    });
    p5.endShape(p5.CLOSE);
    
    p5.pop();
  } 
}

export default background;
