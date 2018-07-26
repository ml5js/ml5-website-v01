---
id: pix2pix-example
title: Pix2Pix
---

Image-to-image translation with conditional adversarial nets, or pix2pix, is a machine learning technique developed by 
[Isola et al](https://github.com/phillipi/pix2pix) that learns how to map input images to output images.

You can train your own images following ~~[this tutorial]()~~. More on this soon! 

This example is using [p5.js](https://p5js.org/). 

## Demo

<div id="example">
  <style>
    .border-box {
      border: black 1px solid;
    }

    .flex {
      display: flex;
    }

    .flex-space-between {
      justify-content: space-between;
    }
  </style>
  <h1>Pix2Pix Edges2Pichaku Example</h1>
  <p>1. Press your mouse to draw a Pikachu on the canvas below.</p>
  <p>2. Click 'Transfer' button.</p>
  <p>3. A colored Pikachu image will appear in ~5s.</p>
  <p>4. Click 'Clear' button to clear the canvas and draw again.</p>
  <p id="status">Loading Model... Please wait...</p>
  <div class="flex">
    <div>
      <div id="canvasContainer"></div>
      <div id="btnContainer" class="flex flex-space-between">
        <button id="clearBtn">Clear</button><br>
        <button id="transferBtn" class="btn">Transfer</button>
      </div>
    </div>
    <div id="transferContainer">
    </div>
    <div id="output"></div>
  </div>
  <script src="assets/scripts/example-pix2pix.js"></script>
</div>



## Code

```javascript
// The pre-trained Edges2Pikachu model is trained on 256x256 images
// So the input images can only be 256x256 or 512x512, or multiple of 256
const SIZE = 256;
let inputImg, inputCanvas, outputContainer, statusMsg, pix2pix, clearBtn, transferBtn;

function setup() {
  // Create a canvas
  inputCanvas = createCanvas(SIZE, SIZE);
  inputCanvas.class('border-box').parent('canvasContainer');

  // Display initial input image
  inputImg = loadImage('assets/img/pikachu.png', drawImage);

  // Selcect output div container
  outputContainer = select('#output');
  statusMsg = select('#status');

  // Select 'transfer' button html element
  transferBtn = select('#transferBtn');

  // Select 'clear' button html element
  clearBtn = select('#clearBtn');
  // Attach a mousePressed event to the 'clear' button
  clearBtn.mousePressed(function() {
    clearCanvas();
  });

  // Set stroke to black
  stroke(0);
  pixelDensity(1);

  // Create a pix2pix method with a pre-trained model
  pix2pix = ml5.pix2pix('https://rawgit.com/ml5js/pix2pix_models/master/edges2pikachu_AtoB.pict', modelLoaded);
}

// Draw on the canvas when mouse is pressed
function draw() {
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Show 'Model Loaded!' message
  statusMsg.html('Model Loaded!');

  // Call transfer function after the model is loaded
  transfer();

  // Attach a mousePressed event to the transfer button
  transferBtn.mousePressed(function() {
    transfer();
  });
}

// Draw the input image to the canvas
function drawImage() {
  image(inputImg, 0, 0);
}

// Clear the canvas
function clearCanvas() {
  background(255);
}

function transfer() {
  // Update status message
  statusMsg.html('Applying Style Transfer...!');

  // Select canvas DOM element
  const canvasElement = select('canvas').elt;

  // Apply pix2pix transformation
  pix2pix.transfer(canvasElement, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result && result.src) {
      // Clear output container
      outputContainer.html('');
      // Create an image based result
      createImg(result.src).class('border-box').parent('output');
      // Show 'Done!' message
      statusMsg.html('Done!');
    }
  });
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/Pix2Pix_callback)