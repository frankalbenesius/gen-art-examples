const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1000, 1000],
};

const sketch = () => {
  return ({ context, width, height }) => {
    for (let x = 0; x <= width; x += 50) {
      for (let y = 0; y <= height; y += 50) {
        const randomValue = Math.random();
        const radius = 20 * randomValue;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }
    }
  };
};

canvasSketch(sketch, settings);
