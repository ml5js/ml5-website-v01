---
id: FeatureExtractor
title: featureExtractor()
---

You can use neural networks to recognize the content of images. Most of the time you will be using a "pre-trained" model trained on a large dataset to classify an image into a fixed set of categories. However you can also use a part of the pre-trained model: the [features](https://en.wikipedia.org/wiki/Feature_extraction). Those features allow you to  'retrain' or 'reuse' the model for a new custom task. This is known as [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning).

This class allows you to extract features of an image via a pre-trained model and re-train that model with new data.

## Example

```javascript
// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Create a new classifier using those features and with a video element
const classifier = featureExtractor.classification(video, videoReady);

// Triggers when the video is ready
function videoReady() {
  console.log('The video is ready!');
}

// Add a new image with a label
classifier.addImage(document.getElementById('dogA') , 'dog');

// Retrain the network
classifier.train(function(lossValue) {
  console.log('Loss is', lossValue)
});

// Get a prediction for that image
classifier.predict(document.getElementById('dogB'), function(err, results) {
  console.log(results) // Should output ['dog']
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/FeatureExtractor_Image_Regression/sketch.js) is a complete example to create a custom regression.

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/FeatureExtractor_Image_Classification/sketch.js) is a complete example to create a custom classifier.

## Syntax
  ```javascript
  ml5.featureExtractor(model, ?callback)
  ```

  ```javascript
  ml5.featureExtractor(model, ?options, ?callback)
  ```
### Parameters
  - `model` - The model from which extract the learned features. Case-insensitive
  - `callback` - Optional. A function to be executed once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.
  - `options` - Optional. An object containing custom options. For the MobileNet model these are the custom options you can reset:

  ```javascript
  {   
    version: 1,
    alpha: 1.0,
    topk: 3,
    learningRate: 0.0001,
    hiddenUnits: 100,
    epochs: 20,
    numClasses: 2,
    batchSize: 0.4, 
  }
  ```
### MobileNet Features
--- 

The following are the Properties and Methods when MobileNet is selected as the model from which to extract the Features:

```javascript
ml5.featureExtractor('MobileNet')
```

### Properties

  ```javascript
  .modelLoaded
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .hasAnyTrainedClass
  ```
  > Boolean value that specifies if new data has been added to the model 

  ```javascript
  .usageType
  ```
  > String that specifies how is the Extractor being used. Possible values are 'regressor' and 'classifier'

  ```javascript
  .isPredicting
  ```
  > Boolean value to check if the model is predicting.


### Methods

  ```javascript
  .classification(?video, ?callback)
  ```
  > Use the features of MobileNet as a classifier

  `video` - Optional. An HTML video element or a p5.js video element.

  `callback` - Optional. A function to be called once the video is ready. If no callback is provided, it will return a promise that will be resolved once the video element has loaded.

  ```javascript
  .regression(?video, ?callback)
  ```
  > Use the features of MobileNet as a regressor

  `video` - Optional. An HTML video element or a p5.js video element.

  `callback` - Optional. A function to be called once the video is ready. If no callback is provided, it will return a promise that will be resolved once the video element has loaded.

  ```javascript
  .addImage(label, ?callback)
  ```
  ```javascript
  .addImage(input, label, ?callback)
  ```
  > Adds a new image element to 

  `input` -  Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

  `label` -  The label to associate the new image with. When using the classifier this can be strings or numbers. For a regressor, this needs to be a number.

  `callback` - Optional. A function to be called once the new image has been added to the model. If no callback is provided, it will return a promise that will be resolved once the image has been added.


  ```javascript
  .train(callback)
  ```
  > Retrain the model with the provided images and labels using the models original features as starting point.

  `callback` - A function to be called to follow the progress of the training.

  ```javascript
  .classify(?callback)
  ```
  ```javascript
  .classify(input, ?callback)
  ```
  > Classifies an an image based on a new retrained model. `.classification()` needs to be used with this.

  `input` - Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

  `callback` - Optional. A function to be called once the input has been classified. If no callback is provided, it will return a promise that will be resolved once the model has classified the image.

  ```javascript
  .predict(?callback)
  ```
  ```javascript
  .predict(input, ?callback)
  ```
  > Predicts a continues values based on a new retrained model. `.regression()` needs to be used with this. 

  `input` - Optional. An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided when creating the regression will be used.

  `callback` - Optional. A function to be called once the input has been predicted. If no callback is provided, it will return a promise that will be resolved once the model has predicted the image.

## Source

[src/FeatureExtractor](https://github.com/ml5js/ml5-library/tree/master/src/FeatureExtractor)
