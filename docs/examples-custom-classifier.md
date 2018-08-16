---
id: custom-classifier
title: Classifier with Feature Extractor
---

This example does image classification using the Feature Extraction method over MobileNet. This will allow you to train a neural network to distinguish between two different set of custom images.

This example is built with p5.js. You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples/tree/master/javascript/FeatureExtractor_Image_Classification).

*Please enable your webcam*

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
  <h6><span id="modelStatus">Loading base model...</span> | <span id="videoStatus">Loading video...</span></h6>
  <h5>Instructions</h5>
  <p>1. Make a pose in front of your webcam and click the 'Add Cat Image' button. Try adding around 15 images.</p>
  <br>
  <p>2. Make a different pose in front of your webcam and click the 'Add Dog Image' button. Try adding around 15 images.</p>
  <br>
  <p>3. Click 'Train' and wait until the training process is done.</p>
  <br>
  <p>4. Click 'Start guessing!' and switch between the two poses you trained the model on!</p>
  <br>
  <br>

  <p>
    <button id="catButton">Add Cat Image</button>
    <p><span id="amountOfCatImages">0</span> Cat Images</p>
    <br><button id="dogButton">Add Dog Image</button>
    <p><span id="amountOfDogImages">0</span> Dog Images</p>
  </p>
  <br/>
  <p><button id="train">Train</button><span id="loss"></span></p>
  <br/>
  <br>
  <p>
    <button id="buttonPredict">Start guessing!</button><br>
    Your custom model labeled this as: <span id="result">...</span>
  </p>
</div>

<script src="assets/scripts/example-custom-classifier.js"></script>

## Code

```javascript
let featureExtractor;
let classifier;
let video;
let loss;
let dogImages = 0;
let catImages = 0;

function setup() {
  noCanvas();
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.parent('videoContainer');
  // Extract the already learned features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new classifier using those features and give the video we want to use
  classifier = featureExtractor.classification(video, videoReady);
  // Create the UI buttons
  setupButtons();
}

// A function to be called when the model has been loaded
function modelReady() {
  select('#modelStatus').html('Base Model (MobileNet) loaded!');
}

// A function to be called when the video has loaded
function videoReady () {
  select('#videoStatus').html('Video ready!');
}


// Classify the current frame.
function classify() {
  classifier.classify(gotResults);
}

// A util function to create UI buttons
function setupButtons() {
  // When the Cat button is pressed, add the current frame
  // from the video with a label of "cat" to the classifier
  buttonA = select('#catButton');
  buttonA.mousePressed(function() {
    classifier.addImage('cat');
    select('#amountOfCatImages').html(catImages++);
  });

  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  buttonB = select('#dogButton');
  buttonB.mousePressed(function() {
    classifier.addImage('dog');
    select('#amountOfDogImages').html(dogImages++);
  });

  // Train Button
  train = select('#train');
  train.mousePressed(function() {
    classifier.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);
}

// Show the results
function gotResults(err, result) {
  if (err) {
    console.error(err);
  }
  select('#result').html(result);
  classify();
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/FeatureExtractor/FeatureExtractor_Image_Classification)
