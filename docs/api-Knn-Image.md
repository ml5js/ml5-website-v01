---
id: knnImage
title: KNN Image Classifier
---

This class allows you to train and classify images in to a set of different categories. 

Based on [deeplearn.js KNN image classifier model](https://github.com/PAIR-code/deeplearnjs/tree/master/models/knn_image_classifier).

### Example

```javascript
// Create the classifier
const knn = new ml5.KNNImageClassifier(callback);

// Add two image and Index associate with that image
knn.addImage(imageOne, '1');
knn.addImage(imageTwo, '2');

// Make a prediction. Will return either 1 or 2
knn.predictFromImage(video, callback);
```

## Constructor
  ```javascript
  KNNImageClassifier(callback, ?numClasses, ?knnKValue, ?video)
  ```
  `callback` - A function to run once the model has been loaded.

  `numClasses` - The number of classes to be able to detect. Optional, defaults to 15.
  
  `knnKValue` - The number of nearest neighbors to look at when predicting. Optional, defaults to 5.

  `video` - A HTMLVideoElement.

## Properties

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .hasAnyTrainedClass
  ```
  > Boolean value that specifies if the model has been train on any class.

  ```javascript
  .predicting
  ```
  > Boolean value that specifies if the model is currently predicting.

  ```javascript
  .knnKValue
  ```
  > Starting K value

  ```javascript
  .numClasses
  ```
  > Max number of classes

  ```javascript
  .math
  ```
  > The environment Math element.

  ```javascript
  .classifier
  ```
  > The KNN Image classifier built with `.knnKValue` and `.numClasses`.

## Methods

  ```javascript
  .addImage(image, index, callback)
  ```
  > Trains the model on a given image and index value.

  `image` -  An image element containing valid pixels.

  `index` - An integer associated with the image.

  `callback` - A callback to be executed once the image is added.

  ```javascript
  .addImageFromVideo(index, callback)
  ```
  > Trains the model the current frame if a video is passed when constructing the instance

  `index` - An integer associated with the video frame.

  `callback` - A callback to be executed once the image is added.

  ```javascript
  .predictFromImage(image, callback)
  ```
  > Predicts to which of the training classes does the input image corresponds to. Returns an Object.

  `image` -  An image element containing valid pixels.

  `callback` - A function to be called once the model has made the prediction.


  ```javascript
  .predictFromVideo(callback)
  ```
  > If a video is passed when constructing the instance, predicts to which of the training classes does the current frame corresponds to. Returns an Object.

  `callback` - A function to be called once the model has made the prediction.

  ```javascript
  .getClassExampleCount()
  ```
  > Get the amount of trained examples for every index.

  ```javascript
  .clearClass(index)
  ```
  > Clears a class associated with an index.

  `index` - The class index to clear.

## Static Methods

  ```javascript
  loadModel(model)
  ```
  > Loads a deeplearn.js model.

  `model` - The model to load.

## Source

[/src/KNNImage/index.js](https://github.com/ITPNYU/ml5/blob/master/src/KNNImage/index.js)