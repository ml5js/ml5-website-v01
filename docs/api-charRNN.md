---
id: charRNN
title: charRNN()
---

RNN and [LSTMs](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (Long Short Term Memory networks) are a type of Neural Network architecture useful for working with sequential data (like characters in text or the musical notes of a song) where the order of the that sequence matters. This class allows you run a model pre-trained on a body of text to generate new text.

You can train your own models [using this tutorial](/docs/training-lstm) or use [this set of pre trained models](https://github.com/ml5js/ml5-data-and-training/tree/master/models/lstm).

## Example

```javascript
// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('models/bolaño/', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Generete content
rnn.generate({ seed: 'the meaning of pizza is' }, function(err, results){
  console.log(results);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/LSTM/LSTM_Text/sketch.js) is a complete example using the [p5.js](https://p5js.org) library.

## Syntax

  ```javascript
  ml5.charRNN(model, ?callback)
  ```

### Parameters
  - `model` - The path to the trained charRNN model.

  - `callback` - Optional. A callback to be called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

   ```javascript
  .state
  ```
  > The current state of the model.

  ```javascript
  .model
  ```
  > The pre-trained charRNN model.

  ```javascript
  .vocabSize
  ```
  > The vocabulary size (or total number of possible characters).

## Methods

  ```javascript
  .generate(options, ?callback)
  ```
  > Generates content in a stateless manner, based on some initial text (known as a "seed"). Returns a string.

  `options` -  An object specifying the input parameters of seed, length and temperature. Default length is 20, temperature is 0.5 and seed is a random character from the model. The object should look like this:
  ```javascript
  {
    seed: 'The meaning of pizza is'
    length: 20,
    temperature: 0.5
  }
  ```

  `callback` - Optional. A function to be called when the model has generated content. If no callback is provided, it will return a promise that will be resolved once the model has generated new content.

  ```javascript
  .feed(seed, ?callback)
  ```
  > Feed a string of characters to the model state.

  `seed` -  A string to feed the charRNN model state. 

  `callback` - Optional. A function to be called when the model finished adding the seed. If no callback is provided, it will return a promise that will be resolved once seed has been fed.

  ```javascript
  .predict(temperature, ?callback)
  ```
  > Feed a string of characters to the model state.

  `predict` -  Predict the next character based on the model's current state.

  `callback` - Optional. A function to be called when the model finished adding the seed. If no callback is provided, it will return a promise that will be resolved once the prediction has been generated.

  ```javascript
  .reset()
  ```
  > Reset the model state

## Source

[/src/charRNN/](https://github.com/ml5js/ml5-library/tree/master/src/charRNN)
