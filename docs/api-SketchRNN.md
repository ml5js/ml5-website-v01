---
id: SketchRNN
title: SketchRNN()
---

SketchRNN is model 

This original paper and implementation of SketchRNN is TensorFlow and [Magenta.js](https://magenta.tensorflow.org/get-started/#magenta-js) was made by [David Ha](https://twitter.com/hardmaru). The ml5.js implementation was ported by [Reiichiro Nakano](https://github.com/reiinakano).

## Example

```javascript
// Create a new Style Transfer Instance
const style = ml5.styleTransfer('data/myModel/', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}
// Grab a img element and generate a new image.
style.transfer(document.getElementById('img'), function(err, resultImg) {
  img.src = resultImg.src;
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/StyleTransfer/StyleTransfer_Image/sketch.js) is a complete example.

## Syntax
  ```javascript
  ml5.styleTransfer(model, ?callback)
  ```
  ```javascript
  ml5.styleTransfer(model, ?video, ?callback)
  ```

### Parameters

  `model` - The path to Style Transfer model.

  `video` - Optional. A HTML video element or a p5 video element.

  `callback` - Optional. A function to be called once the model is loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

## Methods

  ```javascript
  .transfer(?callback)
  ```
  ```javascript
  .transfer(input, ?callback)
  ```
  > Apply style transfer to an input. Returns an HTML img element.

  `input` -  A HTML video or image element or a p5 image or video element. If no input is provided, the default is to use the video element given in the constructor.

  `callback` - Optional. A function to run once the model has made the transfer. If no callback is provided, it will return a promise that will be resolved once the model has made the transfer.

## Source

[/src/StyleTransfer/](https://github.com/ml5js/ml5-library/tree/master/src/StyleTransfer)
