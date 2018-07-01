---
id: posenet-webcam
title: PoseNet with Webcam
---

PoseNet is a machine learning model that allows for [Real-time Human Pose Estimation](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5).

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

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
  <script src="assets/scripts/example-posenet-webcam.js"></script>
</div>

## Code

```javascript
let w = 620;
let h = 480;
let video;
let poseNet;
let poses = [];
let skeletons = [];

function setup() {
  createCanvas(w, h).parent('canvasContainer');
  video = createCapture(VIDEO);
  
  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, 'multiple', gotPoses);
  
  // Hide the video element, and just show the canvas
  video.hide();
  fill(255, 0, 0);
  stroke(255, 0, 0);
}

function draw() {
  image(video, 0, 0, w, h);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  // Loop through all the poses detected
  for(let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    for(let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = poses[i].pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for(let i = 0; i < poses.length; i++) {
    // For every skeleton, loop through all body connections
    for(let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

// The callback that gets called every time there's an update from the model
function gotPoses(results) {
  poses = results;
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/PoseNet)
