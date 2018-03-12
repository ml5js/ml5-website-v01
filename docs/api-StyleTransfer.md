---
id: style-transfer
title: Style Transfer
---

Fast Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](#).

Based on [this demo](https://github.com/PAIR-code/deeplearnjs/tree/0608feadbd897bca6ec7abf3340515fe5f2de1c2/demos/fast-style-transfer)
and [fast-style-transfer-deeplearnjs](https://github.com/reiinakano/fast-style-transfer-deeplearnjs) by reiinakano.

The original Tensorflow version of model can be found [here](https://github.com/lengstrom/fast-style-transfer).

### Example

```javascript
// Create a new Style Transfer Instance
const style = new ml5.StyleTransfer('data/myModel/');

// Grab a <img> element and generate a new image.
const img = document.getElementById('input');
let outputImgData = style.transfer(img);
```

## Constructor
  ```javascript
  StyleTransfer(model, callback)
  ```
  `model` - A valid Fast Style Transfer model that has been ported to deeplearn.js
  `callback` - A function to execute once the model is loaded.

## Properties

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .variableDictionary
  ```
  > 

  ```javascript
  .timesScalar
  ```
  > 

  ```javascript
  .plusScalar
  ```
  > 

  ```javascript
  .epsilonScalar
  ```
  > 

  ```javascript
  .math
  ```
  > The environment Math element.

## Methods

  ```javascript
  .transfer(img)
  ```
  > Run the style transformation on the given image, assumes variables have been loaded. Returns an HTML img element.

  `img` -  HTMLImageElement of input img

  ```javascript
  .loadCheckpoints(path)
  ```
  > Loads the corresponding checkpoints of the model. This method is run when constructing the class.

  `path` - Model path

## Source

[/src/StyleTransfer/index.js](https://github.com/ml5js/ml5-library/tree/master/src/StyleTransfer)