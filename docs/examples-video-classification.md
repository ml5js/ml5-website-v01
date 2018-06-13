---
id: video-classification-example
title: Video Classification
---


Webcam Image Classification using Mobilenet and p5.js.

You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples/tree/master/javascript/ImageClassification_Video)

*Please enable your webcam*

## Demo

<div class="example">
  <div id="videoContainer"></div>
  <p>My guess is a <span id="result">...</span>.
  <br/>My confidence is <span id="probability">...</span>.
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
  // Initialize the Image Classifier method with Mobilenet and the video as the second argument
  classifier = ml5.imageClassifier('Mobilenet', video);
  // Call the classifyFrame function to start classifying the video
  classifyVideo();
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.predict(gotResult);
  // You can also specify the amount of classes detected you want
  // classifier.predict(10, gotResult)
}

// When we get a result
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
  classifyVideo();
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/ImageClassification_Video)

