const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1000, 1000],
};

const sketch = () => {
  return ({ context, width, height }) => {
    // prepare constants
    const centerPt = [width * 0.5, height * 0.5];
    const baseRadius = width * 0.25;
    const numPoints = 200;

    // draw circle path
    context.beginPath();
    context.lineWidth = "5";
    for (let i = 0; i <= numPoints; i++) {
      // for each point, calculate x & y position
      const angle = ((Math.PI * 2) / numPoints) * i;
      const x = centerPt[0] + Math.cos(angle) * baseRadius;
      const y = centerPt[1] + Math.sin(angle) * baseRadius;

      // progress the circle's path
      if (i === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }
    context.stroke();
  };
};

canvasSketch(sketch, settings);
