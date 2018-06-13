---
id: style-transfer-webcam-example
title: Style Transfer with Webcam
---

Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training). 

This example is using [p5.js](https://p5js.org/). 

*Please enable your webcam*

## Demo

<div class="example">
  <style>
    .example img {
      width: 300px;
      height: 300px;
    }
    #canvasContainer{
      display: inline;
    }
    .example button{
      padding: 3px 12px;
      margin: 1rem 0px 1rem 0px;
    }
  </style>
  <p>Style: <a href="https://en.wikipedia.org/wiki/File:Francis_Picabia,_1913,_Udnie_(Young_American_Girl,_The_Dance),_oil_on_canvas,_290_x_300_cm,_Mus%C3%A9e_National_d%E2%80%99Art_Moderne,_Centre_Georges_Pompidou,_Paris..jpg">Udnie (Young American Girl, The Dance), 1913 - Francis Picabia</a></p>
  <p id='status'>Loading model...</p>
  <button id="startStop">Start</button>
  <br>
  <img src="assets/img/udnie.jpg" />
  <div id="canvasContainer"></div>
  <br/>
</div>

<script src="assets/scripts/example-style-transfer-webcam.js"></script>

## Code

```javascript
let style;
let video;
let isTransfering = false;
let resultImg;

function setup() {
  createCanvas(300, 300);

  video = createCapture(VIDEO);
  video.hide();

  // The results image from the style transfer
  resultImg = createImg('');
  resultImg.hide();

  // The button to start and stop the transfer process
  select('#startStop').mousePressed(startStop);

  // Create a new Style Transfer method with a defined style.
  // We give the video as the second argument
  style = ml5.styleTransfer('models/udnie', video, modelLoaded);
}

function draw(){
  // Switch between showing the raw camera or the style
  if (isTransfering) {
    image(resultImg, 0, 0, 300, 300);
  } else {
    image(video, 0, 0, 300, 300);
  }
}

// A function to call when the model has been loaded.
function modelLoaded() {
  select('#status').html('Model Loaded');
}

// Start and stop the transfer process
function startStop() {
  if (isTransfering) {
    select('#startStop').html('Start');
  } else {
    select('#startStop').html('Stop');
    // Make a transfer using the video
    style.transfer(gotResult); 
  }
  isTransfering = !isTransfering;
}

// When we get the results, update the result image src
function gotResult(img) {
  resultImg.attribute('src', img.src);
  if (isTransfering) {
    style.transfer(gotResult); 
  }
}

```

## [Source](https://github.com/ITPNYU/ml5/tree/master/examples/fast_style_transfer_mirror)

