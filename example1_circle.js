const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1000, 1000],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.beginPath();
    context.arc(500, 500, 250, 0, Math.PI * 2);
    context.fill();
  };
};

canvasSketch(sketch, settings);
