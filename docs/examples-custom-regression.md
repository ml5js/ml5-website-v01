---
id: custom-regression
title: Regression with Feature Extractor
---

This example uses the feature extraction method over the MobileNet model to create a regression and output continuos values. This will allow you to control a slider after training the model between just three categories of images.

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
  <p>1. With the slider on the middle and your face over the red square, click the 'Add Sample' button. Try adding around 15 images.</p>
  <br>
  <p>2. Move the slider all the way to the left and your head all the way to the left of your camera, click the 'Add Sample' button. Try adding around 15 images.</p>
  <br>
  <p>3. Move the slider all the way to the right and your head all the way to the right of your camera, click the 'Add Sample' button. Try adding around 15 images.</p>
  <br>
  <p>4. Click 'Train' and wait for the model to be trained</p>
  <br>
  <p>4. Click 'Start predicting!' and move your face left and right!</p>
  <br>
  <br>
  
  <p>
    <input type="range" name="slider" id="slider" min="0.01" max="1.0" step="0.01" value="0.5">
  </p>
  <br>
  <p>
    <button id="addSample">Add Sample</button>
    <p><span id="amountOfSamples">0</span> Sample Images</p>
  </p>

  <br/>
  <p><button id="train">Train</button><span id="loss"></span></p>
  <br/>
  <p>
    <button id="buttonPredict">Start predicting!</button><br>
  </p>
</div>

<script src="assets/scripts/example-custom-regression.js"></script>

## Code

```javascript
let featureExtractor;
let regressor;
let video;
let loss;
let slider;
let samples = 0;
let positionX = 140;

function setup() {
  createCanvas(340, 280);
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.hide();
  // Extract the features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new regressor using those features and give the video we want to use
  regressor = featureExtractor.regression(video, videoReady);
  // Create the UI buttons
  setupButtons();
}

function draw() {
  image(video, 0, 0, 340, 280);
  noStroke();
  fill(255, 0, 0);
  rect(positionX, 120, 50, 50);
}

// A function to be called when the model has been loaded
function modelReady() {
  select('#modelStatus').html('Model loaded!');
}

// A function to be called when the video has loaded
function videoReady() {
  select('#videoStatus').html('Video ready!');
}

// Classify the current frame.
function predict() {
  regressor.predict(gotResults);
}

// A util function to create UI buttons
function setupButtons() {
  slider = select('#slider');
  // When the Dog button is pressed, add the current frame
  // from the video with a label of "dog" to the classifier
  select('#addSample').mousePressed(function() {
    regressor.addImage(slider.value());
    select('#amountOfSamples').html(samples++);
  });

  // Train Button
  select('#train').mousePressed(function() {
    regressor.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  select('#buttonPredict').mousePressed(predict);
}

// Show the results
function gotResults(err, result) {
  if (err) {
    console.error(err);
  }
  positionX = map(result, 0, 1, 0, width);
  slider.value(result);
  predict();
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/FeatureExtractor_Image_Classification)

