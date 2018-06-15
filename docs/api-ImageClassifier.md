---
id: ImageClassifier
title: imageClassifier()
---

You can use neural networks to recognize the content of images. `ml5.imageClassifier()` is a method to create an object that classifies an image using a pre-trained model.

It should be noted that the pre-trained model provided by the example below was trained on a database of approximately 15 million images ([ImageNet](http://www.image-net.org/)). The ml5 library accesses
this model from the cloud. What the algorithm labels an image is entirely dependent on that training data -- what is included, excluded, and how those images are labeled (or mislabeled).

## Example

```javascript
// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet');
// Make a prediction with a selected image
classifier.predict(document.getElementById('image'), function(results) {
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/ImageClassification/sketch.js) is a complete example with the [p5.js](https://p5js.org/) library for loading and displaying the image.

## Syntax
  ```javascript
  ml5.imageClassifier(model)
  ```

  ```javascript
  ml5.imageClassifier(model, ?callback)
  ```

  ```javascript
  ml5.imageClassifier(model, ?options, ?callback)
  ```

  ```javascript
  ml5.imageClassifier(model, ?video, ?options, ?callback)
  ```

### Parameters

  - `model` - A String value of a valid model. Only [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/MobileNet) is available for now. Case insensitive.
  - `callback` - Optional. A function to run once the model has been loaded.
  - `options` - Optional. An object describing a model accuracy and performance. For MobileNet the defaults are: `{ version: 1,
    alpha: 1.0, topk: 3, }`
  - `video` - Optional. A HTML video element or a p5 video element.

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

[/src/ImageClassifier](https://github.com/ml5js/ml5-library/blob/master/src/ImageClassifier/)
