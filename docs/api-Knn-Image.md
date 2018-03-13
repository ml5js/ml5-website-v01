---
id: knnImage
title: KNN Image Classifier
---

This class allows you to train and classify images in to a set of custom categories.

It uses a pre-trained image classifier model, the same used in the [`ImageClassifier`](/imageclassifier.md) method, but allows to add new sets of images that can later be searched for visual similarity.

Based on [deeplearn.js KNN image classifier model](https://github.com/PAIR-code/deeplearnjs/tree/master/models/knn_image_classifier).

### Example

```javascript
// Create the classifier
const knn = new ml5.KNNImageClassifier(callback);

// Add two image and a label associated with that image
knn.addImage(imageOne, 'apple');
knn.addImage(imageTwo, 'orange');

// Make a prediction. Will return either apple or orange
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

  `label` - A label (aka category or class) associated with the image.

  `callback` - A callback to be executed once the image is added.

  ```javascript
  .addImageFromVideo(index, callback)
  ```
  > Trains the model the current frame if a video is passed when constructing the instance

  `label` - A label (aka category or class) associated with the video frame.

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
  .save(?name)
  ```
  > Save the current trained model to a json file that can later be loaded. Where it downloads is dependant on browser preferences.

  `name` - The name of the file to save. Optional, defaults to the current time

  ```javascript
  .load(file)
  ```
  > Loads a pre-trained KNNImageClassifier model that has been saved with the .save() method.

  `file` - The path of the file to load.


  ```javascript
  .getClassExampleCount()
  ```
  > Get the amount of trained examples for a label.

  ```javascript
  .clearClass(label)
  ```
  > Clears a class associated with an label.

  `label` - The class label to clear.

## Static Methods

  ```javascript
  loadModel(model)
  ```
  > Loads a deeplearn.js model.

  `model` - The model to load.

## Source

[/src/KNNImage/index.js](https://github.com/ITPNYU/ml5/blob/master/src/KNNImage/index.js)
