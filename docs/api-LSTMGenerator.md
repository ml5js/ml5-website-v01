---
id: LSTMGenerator
title: LSTMGenerator()
---

[LSTMs](https://colah.github.io/posts/2015-08-Understanding-LSTMs/) (Long Short Term Memory networks) are a type of Neural Network architecture useful for working with series of data where the order of the series matters. This class allows you run a pre-trained model through inference mode and generate new content. 

You can train your own models [using this tutorial](/docs/training-lstm) or use [this set of pretrained models](https://github.com/ml5js/ml5-data-and-training/tree/master/models/lstm). More on this soon! 

## Example

```javascript
// Create the LSTM Generator with a pre trained model
const lstm = ml5.LSTMGenerator('models/bolaño/');

// Generete content
lstm.generate({ seed: 'the meaning of pizza is' }, function(output){
  console.log(output);
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/LSTM_Text/sketch.js) is a complete example.

## Syntax

  ```javascript
  ml5.LSTMGenerator(model, ?callback)
  ```

### Parameters
  - `model` - The path to the trained LSTM model.

  - `callback` - Optional. A callback to be called once the model has loaded.

## Properties
  
  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .model
  ```
  > The pre trained LSTM model.

  ```javascript
  .vocabSize
  ```
  > The size vocabulary.

## Methods

  ```javascript
  .generate(options, ?callback)
  ```
  > Generates content based on the seed given. Returns a string.

  `options` -  An object specifying the input parameters of seed, length and temperature. Defaults length is 20, temperature is 0.5 and seed is a random character from the model. The object should look like this: 
  ```javascript
  {
    seed: 'The meaning of pizza is'
    length: 20,
    temperature: 0.5,
  }
  ```

  `callback` - Optional. A function to be called when the model has generated content.
  
## Source

[/src/Lstm/](https://github.com/ml5js/ml5-library/tree/master/src/LSTM)
