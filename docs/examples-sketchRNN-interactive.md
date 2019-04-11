---
id: sketchrnn-example-interactive
title: SketchRNN Interactive
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

  <h1>SketchRNN</h1>
  <p id="status">Loading Model...</p>
  <div id="canvasContainer"></div>
  <p><button id="clear">clear</button></p>
  <script src="assets/scripts/example-sketchrnn-interactive.js"></script>
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
let seedStrokes = [];

// Storing a reference to the canvas
let canvas;

function setup() {
  canvas = createCanvas(640, 480);
  // Hide the canvas until the model is ready
  canvas.hide();

  background(220);
  // Load the model
  // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
  model = ml5.SketchRNN('cat', modelReady);

  // Button to start drawing
  let button = select('#clear');
  button.mousePressed(clearDrawing);
}

// The model is ready
function modelReady() {
  canvas.show();
  // sketchRNN will begin when the mouse is released
  canvas.mouseReleased(startSketchRNN);
  select('#status').html('model ready - sketchRNN will begin after you draw with the mouse');
}

// Reset the drawing
function clearDrawing() {
  background(220);
  // clear seed strokes
  seedStrokes = [];
  // Reset model
  model.reset();
}

// sketchRNN takes over
function startSketchRNN() {
  // Start where the mouse left off
  x = mouseX;
  y = mouseY;
  // Generate with the seedStrokes
  model.generate(seedStrokes, gotStroke);
}

function draw() {
  // If the mosue is pressed capture the user strokes 
  if (mouseIsPressed) {
    // Draw line
    stroke(0);
    strokeWeight(3.0);
    line(pmouseX, pmouseY, mouseX, mouseY);
    // Create a "stroke path" with dx, dy, and pen
    let userStroke = {
      dx: mouseX - pmouseX,
      dy: mouseY - pmouseY,
      pen: 'down'
    };
    // Add to the array
    seedStrokes.push(userStroke);
  }

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
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/SketchRNN/SketchRNN_interactive)
