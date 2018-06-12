---
id: YOLO
title: YOLO()
---

You only look once ([YOLO](https://pjreddie.com/darknet/yolo/)) is a state-of-the-art, real-time object detection system.

From the [creators](https://pjreddie.com/darknet/yolo/) website:
> Prior detection systems repurpose classifiers or localizers to perform detection. They apply the model to an image at multiple locations and scales. High scoring regions of the image are considered detections.
> We use a totally different approach. We apply a single neural network to the full image. This network divides the image into regions and predicts bounding boxes and probabilities for each region. These bounding boxes are weighted by the predicted probabilities. [Source](https://pjreddie.com/darknet/yolo/)

ml5.js implements a special version of YOLO called Tiny YOLO based on [this](https://github.com/ModelDepot/tfjs-yolo-tiny).

## Example

```javascript
// Create a YOLO method
const yolo = ml5.YOLO();

// Detect objects in the video element
yolo.detect(document.getElementById('img'), function(results){
  console.log(results) // Will output bounding boxes of detected objects
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/YOLO/sketch.js) is a complete example.

## Syntax
  ```javascript
  ml5.YOLO();
  ```

  ```javascript
  ml5.YOLO(video);
  ```

  ```javascript
  ml5.YOLO(video, ?options, ?callback)
  ```

  ```javascript
  ml5.YOLO(?options, ?callback)
  ```

### Parameters

  - `video` - Optional. A HTML video element or a p5 video element.
  - `options` - Optional. An object describing a model accuracy and performance. For Mobilenet this are: `{ filterBoxesThreshold: 0.01,
  IOUThreshold: 0.4,
  classProbThreshold: 0.4
  }`
  - `callback` - Optional. A function to run once the model has been loaded.

## Properties

  ```javascript
  .isPredicting
  ```
  > Boolean to check if the model is currently predicting

  ```javascript
  .modelReady
  ```
  > Boolean to check if the model has loaded

## Methods

  ```javascript
  .detect(input, ?callback)
  ```

  ```javascript
  .detect(?callback)
  ```

  > Given an image or video, returns an array of objects containing class names, bounding boxes and probabilities.

  `input` -  A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video given in the constructor.

  `callback` - A function to run once the model has made the prediction.

## Source

[/src/YOLO](https://github.com/ml5js/ml5-library/tree/master/src/YOLO)
