---
id: video-classification-example
title: Video Classification
---

A live webcam stream image classifier example using ml5.js and [p5.js](https://p5js.org/). You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

*Please enable your webcam*

## Demo

<div class="example">
  <style>
    .example video{
      width: 400;
      height: 400;
    }
  </style>
  <div id="videoContainer"></div>
  <p>My guess is a <span id="result">...</span>.
  <br/>My confidence is <span id="probability">...</span>.
  </p>
</div>

<script src="assets/scripts/example-video-classification.js"></script>

## Code

```javascript
// Initialize the ImageNet method with the MobileNet model.
const classifier = new ml5.ImageClassifier('MobileNet');
let video;

function setup() {
  noCanvas();
  // Load the camera and call guess() once it has loaded.
  video = createCapture(VIDEO, guess).parent('videoContainer');
}

// Get a prediction for the current video frame
function guess() {
  classifier.predict(video.elt, 10, gotResult);
}

function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].label);
  select('#probability').html(nf(results[0].probability, 0, 2));
  setTimeout(guess, 500);
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/01_ImageNet_Camera)

