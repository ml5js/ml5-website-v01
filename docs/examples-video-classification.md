---
id: video-classification-example
title: Video Classification
---

Webcam Image Classification using MobileNet and p5.js.

You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples/tree/master/javascript/ImageClassification_Video)

*Please enable your webcam*

## Demo

<div class="example">
  <div id="videoContainer"></div>
  <p id='status'>Loading Model...</p>
  <p>
      The MobileNet model labeled this as <span id="result">...</span>
    <br/>with a confidence of <span id="probability">...</span>.
  </p>
  </p>
</div>

<script src="assets/scripts/example-video-classification.js"></script>

## Code

```javascript
let classifier;
let video;

function setup() {
  noCanvas();
  // Create a camera input
  video = createCapture(VIDEO);
  // Initialize the Image Classifier method with MobileNet and the video as the second argument
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);  
}

function modelReady() {
  // Change the status of the model once its ready
  select('#status').html('Model Loaded');
  // Call the classifyVideo function to start classifying the video
  classifyVideo();
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.predict(gotResult);
}

// When we get a result
function gotResult(err, results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
  classifyVideo();
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/ImageClassification/ImageClassification_Video)
