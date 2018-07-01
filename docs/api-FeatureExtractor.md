---
id: FeatureExtractor
title: featureExtractor()
---

You can use neural networks to recognize the content of images. Most of the times you will be using a model trained on a large dataset for this. But you can also use part of a pre-trained model that has already learned some [features]() about the dataset and 'retrain' or 'reuse' it for a new custom task. This is known as [Transfer Learning]().

This class allows you to extract features from pre-trained models and retrain them with new types of data.

## Example

```javascript
// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet');

// Create a new classifier using those features
const classifier = featureExtractor.asClassifier(video);

// Add a new image with a label
classifier.addImage(document.getElementById('dogA') , 'dog');

// Retrain the network
classifier.train();

// Get a prediction for that image
classifier.predict(document.getElementById('dogB'), function(results) {
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
  - `callback` - Optional. A function to be executed once the model has been loaded.
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
  .classifier(video, callback)
  ```
  > Use the features of MobileNet as a classifier

  `video` - An HTML video element or a p5.js video element.

  `callback` - A function to be called once the video is ready.

  ```javascript
  .regression(video, callback)
  ```
  > Use the features of MobileNet as a regressor

  `video` - An HTML video element or a p5.js video element.

  `callback` - A function to be called once the video is ready.

  ```javascript
  .addImage(label, ?callback)
  ```
  ```javascript
  .addImage(input, label, ?callback)
  ```
  > Adds a new image element to 

  `input` -  An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

  `label` -  The label to associate the new image with. When using the classifier this can be strings or numbers. For a regressor, this needs to be a number.

  `callback` - A function to be called once the new image has been added to the model.


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

  `input` - An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided in the method-type will be used.

  `callback` - A function to be called once the input has been classified.

  ```javascript
  .predict(?callback)
  ```
  ```javascript
  .predict(input, ?callback)
  ```
  > Predicts a continues values based on a new retrained model. `.regression()` needs to be used with this. 

  `input` - An HTML image or video element or a p5 image or video element. If not input is provided, the video element provided when creating the regression will be used.

  `callback` - A function to be called once the input has been predicted.

## Source

[src/FeatureExtractor](https://github.com/ml5js/ml5-library/tree/master/src/FeatureExtractor)