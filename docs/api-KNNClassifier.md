---
id: KNNClassifier
title: KNNClassifier()
---

This class allows you to create a classifier using the [K-Nearest Neighbors](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm) algorithm. It's a little diffrent from other classes in this library, because it doesn't provide a model with weights, but rather a utility for constructing a KNN model using outputs from another model or any other data that could be classified.

For example, you could get features of an image by calling `FeatureExtractor.infer()`, and feed the features to KNNClassifier to classify an image.

You can also collect any kind of data, construct them into an array of numbers and feed them to KNNClassifier. Check out this [example](/docs/knnclassifier-posenet) that uses KNNClassifier to classify data from [PoseNet](/docs/PoseNet) model.

## Example
Here is an example of using KNNClassifier for image classification.
```javascript
// Create a KNN classifier
const knnClassifier = ml5.KNNClassifier();

// Create a featureExtractor that can extract features of an image
const featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

// Get the features of an image
const features = featureExtractor.infer(myImg);

// Add an example with a label to the KNN Classifier
knnClassifier.addExample(features, label);

// Use KNN Classifier to classify these features
knnClassifier.classify(features, function(err, result) {
  console.log(result); // result.label is the predicted label
});
```

[Here](https://github.com/ml5js/ml5-examples/tree/master/p5js/KNNClassification/KNNClassification_Video) is a complete example to create a customizable classifier on live webcam images.

## Syntax
  ```javascript
  ml5.KNNClassifier()
  ```

## Methods
  ```javascript
  .addExample(example, indexOrLabel)
  ```
  > Adding an example to a class.

  `example` - An example to add to the dataset, usually an activation from another model.
  `indexOrLabel` - The class index(number) or label(string) of the example.

  ```javascript
  .classify(input, callback?)
  ```
  ```javascript
  .classify(input, k?, callback?)
  ```
  > Classify an new input. It returns an object with a top classIndex and label, confidences mapping all class indices to their confidence, and confidencesByLabel mapping all classes' confidence by label.

  `input` - An example to make a prediction on, could be an activation from another model or an array of numbers.

  `k` - Optional. The K value to use in K-nearest neighbors. The algorithm will first find the K nearest examples from those it was previously shown, and then choose the class that appears the most as the final prediction for the input example. Defaults to 3. If examples < k, k = examples.

  `callback` - Optional. A function to be called once the input has been classified. If no callback is provided, it will return a promise that will be resolved once the model has classified the new input.

  ```javascript
  .clearLabel(indexOrLabel)
  ```
  > Clear all examples in a label.

  `indexOrLabel` - The class index or label, a number or a string.

  ```javascript
  .clearAllLabels()
  ```
  > Clear all examples in all labels

  ```javascript
  .getCountByLabel()
  ```
  > Get the example count for each label. It returns an object that maps class label to example count for each class.

  ```javascript
  .getCount()
  ```
  > Get the example count for each class. It returns an object that maps class index to example count for each class.

  ```javascript
  .save(fileName?)
  ```
  > Download the whole dataset as a JSON file. It's useful for saving state.
  
  `fileName` - Optional. The name of the JSON file that will be downloaded. e.g. "myKNN" or "myKNN.json". If no fileName is provided, the default file name is "myKNN.json".

  ```javascript
  .load(path, callback?)
  ```
  > Load a dataset from a JSON file. It's useful for restoring state. 

  `path` - The path for a valid JSON file.

  `callback` - Optional. A function to run once the dataset has been loaded. If no callback is provided, it will return a promise that will be resolved once the dataset has loaded.

  ```javascript
  .getNumLabels()
  ```
  > It returns the total number of labels.

## Source

[/src/KNNClassifier/](https://github.com/ml5js/ml5-library/tree/master/src/KNNClassifier)
