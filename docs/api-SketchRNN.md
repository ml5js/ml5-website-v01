---
id: SketchRNN
title: SketchRNN()
---

SketchRNN is a recurrent neural network model trained on millions of doodles collected from the [Quick, Draw! game](https://quickdraw.withgoogle.com/). The SketchRNN model can create new drawings (from a list of categories) based on an initial path.

This original paper and implementation of SketchRNN was made in TensorFlow and ported to [Magenta.js](https://magenta.tensorflow.org/get-started/#magenta-js) by [David Ha](https://twitter.com/hardmaru). The ml5.js implementation was ported by [Reiichiro Nakano](https://github.com/reiinakano).

The ml5 library includes [a list of supported SketchRNN models](https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js).

## Example

```javascript
// Create a new SketchRNN Instance
const model = ml5.SketchRNN('cat', modelReady);

// When the model is loaded
function modelReady() {
  console.log('SketchRNN Model Loaded!');
}
// Reset the model's current stat
model.reset();
// Generate a new stroke
model.generate(gotSketch);

function gotSketch(err, result) {
  // Do something with the result
}
```

Here is [a complete example](https://github.com/ml5js/ml5-examples/blob/master/p5js/SketchRNN/sketch.js).

## Syntax
  ```javascript
  ml5.SketchRNN(model, ?callback)
  ```

### Parameters

  `model` - The name of the model to use.

  `callback` - Optional. A function to be called once the model is loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

## Methods

  ```javascript
  .reset()
  ```
  > Reset the model's current state

  ```javascript
  .generate(?seed, ?options, ?callback)
  ```
  
  > Generates a new sample with the current state.

  `seed` - Optional. A seed to be passed to the model before generating a new stroke.

  `options` - Optional. An object describing the options of the model.

  `callback` - Optional. A function that will return a generated stroke. If no callback is provided, it will return a promise that will be resolved with a generated stroke.

## Source

[/src/SketchRNN/](https://github.com/ml5js/ml5-library/tree/master/src/SketchRNN)
