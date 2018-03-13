---
id: simple-image-classification-example
title: Image Classification
---

A simple image classification example using ml5.js and [p5.js](https://p5js.org/). You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples).

## Demo

<div class="example">
  <img src="assets/img/kitten.jpg" id="targetImage"/>
  <p>I guess this is a <span id="result">...</span>. My confidence is <span id="probability">...</span></p>
</div>

<script src="assets/scripts/example-image-classification.js"></script>

## Code
```javascript
// Initialize the ImageClassifier with the MobileNet model.
const classifier = new ml5.ImageClassifier('MobileNet');

let img;

function setup() {
  noCanvas();
  // Load the image
  img = createImg('assets/img/kitten.jpg', imageReady);
  img.hide();
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img.elt, 10, gotResult);
}

// When we get the results
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].label);
  select('#probability').html(nf(results[0].probability, 0, 2));
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/00_ImageNet_Simple)