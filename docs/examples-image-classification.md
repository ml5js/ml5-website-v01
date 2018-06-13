---
id: image-classification-example
title: Image Classification
---

Image classification example using [Mobilenet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet). Mobilenet is a machine learning model trained to recognize the content of certain images.

This example is built with p5.js. You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples/tree/master/javascript/ImageClassification).

## Demo

<div class="example">
  <img src="assets/img/bird.jpg" id="targetImage" width=400/>
  <p>The MobileNet model labeled this as <span id="result">...</span> with a confidence of  <span id="probability">...</span></p>
</div>

<script src="assets/scripts/example-image-classification.js"></script>

## Code

```javascript
// Initialize the Image Classifier method with Mobilenet
const classifier = ml5.imageClassifier('Mobilenet');

// A variable to hold the image we want to classify
let img;

function setup() {
  noCanvas();
  // Load the image
  img = createImg('images/bird.jpg', imageReady);
  img.size(400, 400);
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img, gotResult);
  // You can also specify the amount of classes you want
  // classifier.predict(img, 10, gotResult);
}

// A function to run when we get the results
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/ImageClassification)
