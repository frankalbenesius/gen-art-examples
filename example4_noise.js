const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1000, 1000],
};

const sketch = () => {
  return ({ context, width, height }) => {
    for (let x = 0; x <= width; x += 50) {
      for (let y = 0; y <= height; y += 50) {
        const frequency = 0.002;
        const amplitude = 1;

        const randomValue = random.noise2D(x, y, frequency, amplitude);
        const absRandomValue = Math.abs(randomValue);
        const radius = 20 * absRandomValue;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  };
};

canvasSketch(sketch, settings);
