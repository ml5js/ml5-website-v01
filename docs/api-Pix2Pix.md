---
id: Pix2Pix
title: pix2pix()
---

Image-to-image translation with conditional adversarial nets, or pix2pix, is a machine learning technique developed by 
[Isola et al](https://github.com/phillipi/pix2pix) that learns how to map input images to output images.

> The pix2pix model works by training on pairs of images such as building facade labels to building facades, and then attempts to generate the corresponding output image from any input image you give it. [Source](https://affinelayer.com/pixsrv/)

The original pix2pix TensorFlow implementation was made by [affinelayer](https://github.com/affinelayer/pix2pix-tensorflow).
This version is heavily based on [Christopher Hesse TensorFlow.js implementation](https://github.com/affinelayer/pix2pix-tensorflow/tree/master/server)

## Example

```javascript
// Create a pix2pix model using a pre trained network
const pix2pix = ml5.pix2pix('models/customModel.pict', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Transfer using a canvas
pix2pix.transfer(canvas, function(err, result) {
  console.log(result);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/Pix2Pix_callback/sketch.js) is a complete example.

## Syntax
  ```javascript
  ml5.pix2pix(model, ?callback);
  ```

### Parameters

  - `model` - Optional. The path for a valid model.
  - `callback` - Optional. A function to run once the model has been loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

  ```javascript
  .ready
  ```
  > Boolean to check if the model has loaded

## Methods

  ```javascript
  .transfer(canvas, ?callback)
  ```
  > Given an canvas element, applies image-to-image translation using the provided model. Returns an image.

  `canvas` -  A HTML canvas element.

  `?callback` - A function to run once the model has made the transfer. If no callback is provided, it will return a promise that will be resolved once the model has made the transfer.

## Source

[/src/Pix2pix](https://github.com/ml5js/ml5-library/tree/master/src/Pix2pix)
