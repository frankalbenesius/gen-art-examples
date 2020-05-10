const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1000, 1000],
  animate: true,
};

const sketch = () => {
  return ({ context, width, height, time }) => {
    // reset canvas each frame of animation
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);
    context.fillStyle = "black";

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
      const staticX = centerPt[0] + Math.cos(angle) * baseRadius;
      const staticY = centerPt[1] + Math.sin(angle) * baseRadius;

      // adjust x & y values based on noise
      const frequency = 0.005;
      const amplitude = baseRadius * 0.2;
      const radiusDelta = random.noise3D(
        staticX,
        staticY,
        time * 200,
        frequency,
        amplitude
      );
      const noisyRadius = baseRadius + radiusDelta;
      const noisyX = centerPt[0] + Math.cos(angle) * noisyRadius;
      const noisyY = centerPt[1] + Math.sin(angle) * noisyRadius;

      // progress the circle's path
      if (i === 0) {
        context.moveTo(noisyX, noisyY);
      } else {
        context.lineTo(noisyX, noisyY);
      }
    }
    context.stroke();
  };
};

canvasSketch(sketch, settings);
