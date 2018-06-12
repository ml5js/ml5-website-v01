---
id: PoseNet
title: poseNet()
---

PoseNet is a machine learning model that allows for [Real-time Human Pose Estimation](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5). This model was ported to tensorflow.js by Dan Oved.

PoseNet can be used to estimate either a single pose or multiple poses, meaning there is a version of the algorithm that can detect only one person in an image/video and one version that can detect multiple persons in an image/video.

## Example

```javascript
const video = document.getElementById('video');

// Create a new poseNet method with a single detection
const poseNet = ml5.poseNet(video, 'single', gotPoses);
// Make a prediction with a selected image
function gotPoses(results) {
  poses = results;
}
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/PoseNet/sketch.js) is a complete example.

## Syntax

  ```javascript
  ml5.poseNet(?video, ?type, ?callback)
  ```

  ```javascript
  ml5.poseNet(?video, ?options, ?callback)
  ```

  ```javascript
  ml5.poseNet(?callback, ?options)
  ```

### Parameters

  - `video` - Optional. A HTML video element or a p5 video element.
  - `type` - Optional. A String value to run 'single' or 'multiple' estimation.
  - `callback` - Optional. A function to run once the model has been loaded.
  - `options` - Optional. An object describing a model accuracy and performance. For Mobilenet this are: `{ version: 1,
    alpha: 1.0, topk: 3, }`


## Properties

  ```javascript
  .modelName
  ```
  > The name of the model used.

  ```javascript
  .modelLoaded
  ```
  > Boolean to check if the model has loaded

  ```javascript
  .model
  ```
  > The model architecture

## Methods

  ```javascript
  .predict(input, ?callback)
  ```

  ```javascript
  .predict(input, ?numberOfClasses ,?callback)
  ```

  ```javascript
  .predict(?callback)
  ```

  ```javascript
  .predict(?numberOfClasses ,?callback)
  ```

  > Given an image or video, returns an array of objects containing class names and probabilities.

  `input` -  A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

  `numberOfClasses` -  The number of results to return.

  `callback` - A function to run once the model has made the prediction.

## Source

[/src/PoseNet](https://github.com/ml5js/ml5-library/tree/master/src/PoseNet)
