---
id: fast-style-webcam-example
title: Fast Style Transfer with Webcam
---

Fast Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](#). 

This example is using ML5.js and [p5.js](https://p5js.org/). You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

*Please enable your webcam*

## Demo

<div class="example">
  <style>
    .example img {
      width: 300px;
      height: 300px;
    }
    .example button {
      width: 100px;
      height: 30px;
      font-size: 14px;
      border: solid 2px;
      margin: 10px 0;
      cursor: pointer;
    }
    .example button:hover {
      color: white;
      background: #333;
    }
    #canvasContainer{
      display: inline;
    }
  </style>
  <p>Sytle: Udnie (Young American Girl, The Dance), 1913 - Francis Picabia</p>
  <img src="assets/img/udnie.jpg" />
  <div id="canvasContainer"></div>
  <br/>
  <button onClick="togglePredicting()" id="controlBtn">Start</button>
</div>

<script src="assets/scripts/example-fast-style-webcam.js"></script>

## Code

```javascript
let fastStyle;
let video;
let modelReady = false;
let cameraReady = false;
let startPredict = false;
let resultImg;

function setup() {
  createCanvas(300, 300).parent('canvasContainer');
  pixelDensity(1);
  background(0);
  video = createCapture(VIDEO, cameraLoaded);
  resultImg = createImg('');
  resultImg.hide();
  video.size(200, 200);
  video.hide();
  fastStyle = new ml5.FastStyle('assets/models/udnie', modelLoaded);
}

function draw(){
  image(resultImg, 0, 0, 300, 300);
}

function cameraLoaded() {
  cameraReady = true;
}

function modelLoaded() {
  modelReady = true;
}

function togglePredicting() {
  startPredict = !startPredict;
  if(startPredict){
    select('#controlBtn').html('Stop');
    predict();
  } else {
    select('#controlBtn').html('Start');
  }

}

function predict() {
  if(cameraReady && modelReady && startPredict) {
    const result = fastStyle.transfer(video.elt);
    resultImg.elt.src = result.src
    image(resultImg, 0, 300, 300);
    setTimeout(() => predict(), 500);
  }
}

```

## [Source](https://github.com/ITPNYU/ml5/tree/master/examples/fast_style_transfer_mirror)

