---
id: imageclassifier
title: ImageClassifier()
---

You can use neural networks to recognize the content of images. The ImageClassifier is a class to classify an image using a pre-trained model.

It should be noted that the available pre-trained models noted below were trained on a database of approximately 15 million images ([ImageNet](http://www.image-net.org/)). The ml5 library accesses
these model from the cloud. What the algorithm labels an image is entirely dependent on that training data -- what is included, excluded, and how those images are labeled (or mislabeled).

### Example

```javascript
// Create the classifier
const classifier = new ml5.ImageClassifier('SqueezeNet');
// Make a prediction
let prediction = classifier.predict(img, function(result){
  console.log(result)
});
```

## Constructor
  ```javascript
  ImageClassifier(model)
  ```
  `model` - A String value for a valid deeplearn.js model for image recognition. [`SqueezeNet`](https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet) and [`MobileNet`](https://github.com/PAIR-code/deeplearnjs/tree/master/models/mobilenet) models are available.


## Properties

  ```javascript
  .model
  ```
  > The name of the model used.

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .math
  ```
  > The environment Math element.

  ```javascript
  .squeezeNet
  ```
  > The [original SqueezNet model](https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet) from deeplearn.js

## Methods

  ```javascript
  .predict(image, num, callback)
  ```
  > Given an image, returns an array of objects containing categories and probabilities.

  `image` -  An image element containing valid pixels.

  `num` -  The number of results to return.

  `callback` - A function to run once the model has made the prediction.

## Static Methods

  ```javascript
  loadModel(model)
  ```
  > Loads a deeplearn.js model.

  `model` - The model to load.

## Source

[/src/ImageNet/index.js](https://github.com/ml5js/ml5-library/blob/master/src/ImageClassifier/index.js)
