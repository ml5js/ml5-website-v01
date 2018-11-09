---
id: knnclassifier
title: KNN Classifier with Feature Extractor
---

This example allows people to train a "Rock Paper Scissor" classifier on webcam images by using the KNN Classifier. First, click on the "Add an Example" button to add some examples to each class, then click "Start predicting!" to see the results. You can also load or save a dataset.

This example is using [p5.js](https://p5js.org/).

*Please enable your webcam*

## Demo

<style>
  button {
    margin: 6px 6px 6px 0;
    padding: 4px;
    font-size: 14px;
  }
  video {
    width: 300;
    height: 300;
  }
  p {
    display: inline;
    font-size: 16px;
  }
  .emoji {
    font-size: 24px;
  }
</style>

<div class="example">
  <div id="videoContainer"></div>
  <p id="status">Loading Model...</p>
  <div>
    <button id="load">Load Dataset</button><br>
    <p>If you load this sample classifer dataset. Try to make rock, paper, or scissor gestures to see if the classifier can class them.<br>
      If this sample dataset doesn't work well for you, you could train your own classifier,<br>
      and use the 'Save Dataset' button below to create your own myKNNDataset.json file,<br>
      and replace the myKNNDataset.json in this folder.
    </p>
  </div>
  <br><p>
    <span class="emoji"> ✊ </span><button id="addClassRock">Add an Example to Class Rock</button>
    <button id="resetRock">Reset Class Rock</button>
    <p><span id="exampleRock">0</span> Rock examples</p>
    <p>| Confidence in Rock is: <span id="confidenceRock">0</span></p>
    <br><span class="emoji"> 🖐 </span><button id="addClassPaper">Add an Example to Class Paper</button>
    <button id="resetPaper">Reset Class Paper</button>
    <p><span id="examplePaper">0</span> Paper examples</p>
    <p>| Confidence in Paper is: <span id="confidencePaper">0</span></p>
    <br><span class="emoji"> ✌️ </span><button id="addClassScissor">Add an Example to Class Scissor</button>
    <button id="resetScissor">Reset Class Scissor</button>
    <p><span id="exampleScissor">0</span> Scissor examples</p>
    <p>| Confidence in Scissor is: <span id="confidenceScissor">0</span></p>
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
  <div><button id="save">Save Dataset</button></div>
</div>

<script src="assets/scripts/example-knnclassifier.js"></script>

## Code

```javascript
let video;
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();
// Create a featureExtractor that can extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

function setup() {
  noCanvas();
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.parent('videoContainer');
  // Create the UI buttons
  createButtons();
}

function modelReady(){
  select('#status').html('FeatureExtractor(mobileNet model) Loaded')
}

// Add the current frame from the video to the classifier
function addExample(label) {
  // Get the features of the input video
  const features = featureExtractor.infer(video);
  // You can also pass in an optional endpoint, defaut to 'conv_preds'
  // const features = featureExtractor.infer(video, 'conv_preds');
  // You can list all the endpoints by calling the following function
  // console.log('All endpoints: ', featureExtractor.mobilenet.endpoints)

  // Add an example with a label to the classifier
  knnClassifier.addExample(features, label);
  updateExampleCounts();
}

// Predict the current frame.
function classify() {
  // Get the total number of classes from knnClassifier
  const numClasses = knnClassifier.getNumClasses();
  if (numClasses <= 0) {
    console.error('There is no examples in any class');
    return;
  }
  // Get the features of the input video
  const features = featureExtractor.infer(video);

  // Use knnClassifier to classify which class do these features belong to
  // You can pass in a callback function `gotResults` to knnClassifier.classify function
  knnClassifier.classify(features, gotResults);
  // You can also pass in an optional K value, K default to 3
  // knnClassifier.classify(features, 3, gotResults);

  // You can also use the following async/await function to call knnClassifier.classify
  // Remember to add `async` before `function predictClass()`
  // const res = await knnClassifier.classify(features);
  // gotResults(null, res);
}

// A util function to create UI buttons
function createButtons() {
  // When the A button is pressed, add the current frame
  // from the video with a label of "rock" to the classifier
  buttonA = select('#addClassRock');
  buttonA.mousePressed(function() {
    addExample('Rock');
  });

  // When the B button is pressed, add the current frame
  // from the video with a label of "paper" to the classifier
  buttonB = select('#addClassPaper');
  buttonB.mousePressed(function() {
    addExample('Paper');
  });

  // When the C button is pressed, add the current frame
  // from the video with a label of "scissor" to the classifier
  buttonC = select('#addClassScissor');
  buttonC.mousePressed(function() {
    addExample('Scissor');
  });

  // Reset buttons
  resetBtnA = select('#resetRock');
  resetBtnA.mousePressed(function() {
    clearClass('Rock');
  });
	
  resetBtnB = select('#resetPaper');
  resetBtnB.mousePressed(function() {
    clearClass('Paper');
  });
	
  resetBtnC = select('#resetScissor');
  resetBtnC.mousePressed(function() {
    clearClass('Scissor');
  });

  // Predict button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);

  // Clear all classes button
  buttonClearAll = select('#clearAll');
  buttonClearAll.mousePressed(clearAllClasses);

  // Load saved classifier dataset
  buttonSetData = select('#load');
  buttonSetData.mousePressed(loadDataset);

  // Get classifier dataset
  buttonGetData = select('#save');
  buttonGetData.mousePressed(saveDataset);
}

// Show the results
function gotResults(err, result) {
  // Display any error
  if (err) {
    console.error(err);
  }

  if (result.confidencesByLabel) {
    const confideces = result.confidencesByLabel;
    // result.label is the label that has the highest confidence
    if (result.label) {
      select('#result').html(result.label);
      select('#confidence').html(`${confideces[result.label] * 100} %`);
    }

    select('#confidenceRock').html(`${confideces['Rock'] ? confideces['Rock'] * 100 : 0} %`);
    select('#confidencePaper').html(`${confideces['Paper'] ? confideces['Paper'] * 100 : 0} %`);
    select('#confidenceScissor').html(`${confideces['Scissor'] ? confideces['Scissor'] * 100 : 0} %`);
  }

  classify();
}

// Update the example count for each class	
function updateExampleCounts() {
  const counts = knnClassifier.getClassExampleCountByLabel();

  select('#exampleRock').html(counts['Rock'] || 0);
  select('#examplePaper').html(counts['Paper'] || 0);
  select('#exampleScissor').html(counts['Scissor'] || 0);
}

// Clear the examples in one class
function clearClass(classLabel) {
  knnClassifier.clearClass(classLabel);
  updateExampleCounts();
}

// Clear all the examples in all classes
function clearAllClasses() {
  knnClassifier.clearAllClasses();
  updateExampleCounts();
}

// Save dataset as myKNNDataset.json
function saveDataset() {
  knnClassifier.saveDataset('myKNNDataset');
}

// Load dataset to the classifier
function loadDataset() {
  knnClassifier.loadDataset('./myKNNDataset.json', updateExampleCounts);
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/KNNClassification/KNNClassification_Video)
