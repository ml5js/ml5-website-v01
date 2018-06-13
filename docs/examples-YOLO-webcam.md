---
id: yolo-webcam
title: YOLO with Webcam
---

You only look once ([YOLO](https://pjreddie.com/darknet/yolo/)) is a state-of-the-art, real-time object detection system.

ml5.js implements a special version of YOLO called Tiny YOLO based on [this](https://github.com/ModelDepot/tfjs-yolo-tiny).

This example is built with p5.js.

## Demo

<div class="example">
  <style>
  .example button{
    margin: 1rem 0px;
    padding: 3px 7px;
  }
  </style>
  <p id="status">Wait for the model to load. Loading Model...</p>
  <button id='start'>Start</button>
  <div id="canvasContainer"></div>
  <script src="assets/scripts/example-yolo-webcam.js"></script>
</div>

## Code

```javascript
let video;
let yolo;
let status;
let objects = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);

  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);
  
  // Hide the original video
  video.hide();
  status = select('#status');
}

function draw() {
  image(video, 0, 0, 640, 480);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x*width, objects[i].y*height - 5);
    noFill();
    strokeWeight(4);
    stroke(0,255, 0);
    rect(objects[i].x*width, objects[i].y*height, objects[i].w*width, objects[i].h*height);
  }
}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  yolo.detect(function(results){
    objects = results;
    detect();
  });
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/YOLO)
