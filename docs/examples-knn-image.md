---
id: knn-image-example
title: KNN Image Classification
---

This examples allows you to train and classify frames from a live webcam stream into two categories. You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

*Please enable your webcam*

Instructions: 
  1. Train the model on one set of images using the 'Train A' button. Try with 15 images.
  2. Add something distinctive to your webcam scene and train the model on another set of images using the 'Train B' button.
  3. Click 'Start guessing!' and switch between the two scenes you trained the model on!

## Demo

<style>
  .example button {
    margin: 4px;
    padding: 8px;
  }
  .example video{
    width: 300;
    height: 300;
  }
  .example p{
    display: inline;
    font-size: 14px;
  }
  .example h6{
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>

<div class="example">
  <div id="videoContainer"></div>
  <h6 id="loading">Loading the model...</h6>
  
  <p>
    <button id="buttonA">Train A</button>
    <button id="resetA">Reset A</button>
    <p><span id="exampleA">0</span> Examples in A</p>
    <p>| Confidence in A is: <span id="confidenceA">0</span></p>
    <br><button id="buttonB">Train B</button>
    <button id="resetB">Reset B</button>
    <p><span id="exampleB">0</span> Examples in B</p>
    <p>| Confidence in B is: <span id="confidenceB">0</span></p>
  </p>
  <br/>
  <h6>Training on: <span id="training"></span></h6>
  <br/>
  <p>
    <button id="buttonPredict">Start guessing!</button><br>
    My guess is category: <span id="result">...</span>.
  </p>
</div>

<script src="assets/scripts/example-knn-image.js"></script>

## Code

```javascript
let knn;
let video;

function setup() {
  noCanvas();
  video = createCapture(VIDEO).parent('videoContainer');
  // Create a KNN Image Classifier
  knn = new ml5.KNNImageClassifier(2, 1, modelLoaded, video.elt);
  createButtons();
}

function createButtons() {
  // Train buttons
  buttonA = select('#buttonA');
  buttonA.mousePressed(function() {
    train(1);
  });

  buttonB = select('#buttonB');
  buttonB.mousePressed(function() {
    train(2);
  });

  // Reset buttons
  resetBtnA = select('#resetA');
  resetBtnA.mousePressed(function() {
    clearClass(1);
    updateExampleCounts();
  });

  resetBtnB = select('#resetB');
  resetBtnB.mousePressed(function() {
    clearClass(2);
    updateExampleCounts();
  });

  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(predict);
}

// A function to be called when the model has been loaded
function modelLoaded() {
  select('#loading').html('Model loaded!');
}

// Train the Classifier on a frame from the video.
function train(category) {
  let msg;
  if (category == 1) {
    msg = 'A';
  } else if (category == 2) {
    msg = 'B';
  }
  select('#training').html(msg);
  knn.addImageFromVideo(category);
  updateExampleCounts();
}

// Predict the current frame.
function predict() {
  knn.predictFromVideo(gotResults);
}

// Show the results
function gotResults(results) {
  let msg;

  if (results.classIndex == 1) {
    msg = 'A';
  } else if (results.classIndex == 2) {
    msg = 'B';
  }
  select('#result').html(msg);

  // Update confidence
  select('#confidenceA').html(results.confidences[1]);
  select('#confidenceB').html(results.confidences[2]);

  setTimeout(function(){
    predict();
  }, 50);
}

// Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}

// Update the example count for each class
function updateExampleCounts() {
  let counts = knn.getClassExampleCount();
  select('#exampleA').html(counts[1]);
  select('#exampleB').html(counts[2]);
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/02_KNNImage)

