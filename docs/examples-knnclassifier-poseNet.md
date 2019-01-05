---
id: knnclassifier-posenet
title: KNN Classifier with PoseNet
---

This example allows people to train a pose classifier on webcam images by using the KNN Classifier and PoseNet model.

You can click on the "Add an Example to Class A/B" button to add some examples to each class, then click "Start predicting!" to see the results.

This example is using [p5.js](https://p5js.org/).

*Please enable your webcam*

## Demo

<style>
  .example button {
    margin: 6px 6px 6px 0;
    padding: 4px;
    font-size: 14px;
  }
  .example p {
    display: inline;
    font-size: 16px;
  }
  .example .emoji {
    font-size: 24px;
  }
</style>

<div class="example">
<div id="videoContainer"></div>
  <p id="status">Loading Model...</p>
  <br><p>
    <button id="addClassA">Add an Example to Class A</button>
    <button id="resetA">Reset Class A</button>
    <p><span id="exampleA">0</span> A examples</p>
    <p>| Confidence in A is: <span id="confidenceA">0</span></p>
    <br><button id="addClassB">Add an Example to Class B</button>
    <button id="resetB">Reset Class B</button>
    <p><span id="exampleB">0</span> B examples</p>
    <p>| Confidence in B is: <span id="confidenceB">0</span></p>
  </p>
  <br/>
  <p>
    <button id="buttonPredict">Start predicting!</button><br>
    <button id="clearAll">Clear all classes</button><br>
  </p>
  <p>
    KNN Classifier with mobileNet model labeled this
    as Class: <span id="result">...</span>
    with a confidence of <span id="confidence">...</span>
  </p>
</div>

<script src="assets/scripts/example-knnclassifier-posenet.js"></script>

## Code

```javascript
let video;
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();
let poseNet;
let poses = [];

function setup() {
  const canvas = createCanvas(640, 480);
  canvas.parent('videoContainer');
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create the UI buttons
  createButtons();

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

function modelReady(){
  select('#status').html('model Loaded')
}

// Add the current frame from the video to the classifier
function addExample(label) {
  // Convert poses results to a 2d array [[score0, x0, y0],...,[score16, x16, y16]]
  const poseArray = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);

  // Add an example with a label to the classifier
  knnClassifier.addExample(poseArray, label);
  updateCounts();
}

// Predict the current frame.
function classify() {
  // Get the total number of labels from knnClassifier
  const numLabels = knnClassifier.getNumLabels();
  if (numLabels <= 0) {
    console.error('There is no examples in any label');
    return;
  }
  // Convert poses results to a 2d array [[score0, x0, y0],...,[score16, x16, y16]]
  const poseArray = poses[0].pose.keypoints.map(p => [p.score, p.position.x, p.position.y]);

  // Use knnClassifier to classify which label do these features belong to
  // You can pass in a callback function `gotResults` to knnClassifier.classify function
  knnClassifier.classify(poseArray, gotResults);
}

// A util function to create UI buttons
function createButtons() {
  // When the A button is pressed, add the current frame
  // from the video with a label of "A" to the classifier
  buttonA = select('#addClassA');
  buttonA.mousePressed(function() {
    addExample('A');
  });

  // When the B button is pressed, add the current frame
  // from the video with a label of "B" to the classifier
  buttonB = select('#addClassB');
  buttonB.mousePressed(function() {
    addExample('B');
  });

  // Reset buttons
  resetBtnA = select('#resetA');
  resetBtnA.mousePressed(function() {
    clearLabel('A');
  });
	
  resetBtnB = select('#resetB');
  resetBtnB.mousePressed(function() {
    clearLabel('B');
  });

  // Predict button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);

  // Clear all classes button
  buttonClearAll = select('#clearAll');
  buttonClearAll.mousePressed(clearAllLabels);
}

// Show the results
function gotResults(err, result) {
  // Display any error
  if (err) {
    console.error(err);
  }

  if (result.confidencesByLabel) {
    const confidences = result.confidencesByLabel;
    // result.label is the label that has the highest confidence
    if (result.label) {
      select('#result').html(result.label);
      select('#confidence').html(`${confidences[result.label] * 100} %`);
    }

    select('#confidenceA').html(`${confidences['A'] ? confidences['A'] * 100 : 0} %`);
    select('#confidenceB').html(`${confidences['B'] ? confidences['B'] * 100 : 0} %`);
  }

  classify();
}

// Update the example count for each label	
function updateCounts() {
  const counts = knnClassifier.getCountByLabel();

  select('#exampleA').html(counts['A'] || 0);
  select('#exampleB').html(counts['B'] || 0);
}

// Clear the examples in one label
function clearLabel(classLabel) {
  knnClassifier.clearLabel(classLabel);
  updateCounts();
}

// Clear all the examples in all labels
function clearAllLabels() {
  knnClassifier.clearAllLabels();
  updateCounts();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/KNNClassification/KNNClassification_PosetNet)
