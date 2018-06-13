---
id: StyleTransfer
title: styleTransfer()
---

Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image.

You can train your own images following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training). More on this soon!

## Example

```javascript
// Create a new Style Transfer Instance
const style = ml5.styleTransfer('data/myModel/');

// Grab a img element and generate a new image. 
style.transfer(document.getElementById('img'), function(resultImg) {
  img.src = resultImg.src;
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/StyleTransfer_Image/sketch.js) is a complete example.

## Syntax
  ```javascript
  ml5.styleTransfer(model, ?callback)
  ```
  ```javascript
  ml5.styleTransfer(model, ?video, ?callback)
  ```

### Parameters

  - `model` - The path to Style Transfer model.
  - `video` - Optional. A HTML video element or a p5 video element.
  - `callback` - Optional. A function to be called once the model is loaded.

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

## Source

[/src/StyleTransfer/](https://github.com/ml5js/ml5-library/tree/master/src/StyleTransfer)