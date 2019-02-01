---
id: sketchrnn-example
title: SketchRNN
---

SketchRNN is a recurrent neural network model trained on millions of doodles collected from the [Quick, Draw! game](https://quickdraw.withgoogle.com/). The SketchRNN model can create new drawings (from a list of categories) based on an initial path.

This original paper and implementation of SketchRNN was made in TensorFlow and ported to [Magenta.js](https://magenta.tensorflow.org/get-started/#magenta-js) by [David Ha](https://twitter.com/hardmaru). The ml5.js implementation was ported by [Reiichiro Nakano](https://github.com/reiinakano).

The ml5 library includes [a list of supported SketchRNN models](https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js).

This example is built with p5.js.

## Demo

<div class="example">
  <style>
  .example button{
    margin: 1rem 0px;
    padding: 3px 7px;
  }
  </style>
  <div id="canvasContainer"></div>
  <div>
    <button id="draw">draw cat</button><br/>
    <span id="status">Loading Model...</span>
  </div>
</p>
  <script src="assets/scripts/example-sketchrnn.js"></script>
</div>

## Code

```javascript
// The SketchRNN model
let model;
// Start by drawing
let previous_pen = 'down';
// Current location of drawing
let x, y;
// The current "stroke" of the drawing
let strokePath;

function setup() {
  createCanvas(320, 240);
  background(220);
  // Load the model
  // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
  model = ml5.SketchRNN('cat', modelReady);

  // Button to start drawing
  let button = select('#draw');
  button.mousePressed(startDrawing);
}

// Reset the drawing
function startDrawing() {
  background(220);
  // Start in the middle
  x = width / 2;
  y = height / 2;
  model.reset();
  // Generate the first stroke path
  model.generate(gotStroke);
}

function draw() {
  // If something new to draw
  if (strokePath) {
    // If the pen is down, draw a line
    if (previous_pen == 'down') {
      stroke(0);
      strokeWeight(3.0);
      line(x, y, x + strokePath.dx, y + strokePath.dy);
    }
    // Move the pen
    x += strokePath.dx;
    y += strokePath.dy;
    // The pen state actually refers to the next stroke
    previous_pen = strokePath.pen;

    // If the drawing is complete
    if (strokePath.pen !== 'end') {
      strokePath = null;
      model.generate(gotStroke);
    }
  }
}

// A new stroke path
function gotStroke(err, s) {
  strokePath = s;
}

// The model is ready
function modelReady() {
  select('#status').html('model ready');
  startDrawing();
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/SketchRNN_basic)
