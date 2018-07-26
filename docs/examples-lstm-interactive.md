---
id: lstm-interactive-example
title: Interactive Text Generation LSTM
---

In this interactive demo you ask the LSTM: "Starting with the seed text, predict what text might come next based on the pre-trained [Ernest Hemingway](https://en.wikipedia.org/wiki/Ernest_Hemingway) model." Changing `length` changes the number of characters in the resulting predicted text. Higher `length` values can take many minutes to compute and use a lot of CPU. The `temperature` controls the randomness of the output. A `temperature` of 0 will be relatively random but might not even look like English, while a `temperature` of 1.0 will probably be correct English but will also be very close to the original Hemingway, perhaps even straight quotations.

This example is built with p5.js.

You can train your own models following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training/lstm). More on this soon!

## Demo

<div class="example">
  <textarea id="textInput" style="width: 300px; height: 50px;" placeholder="type here"></textarea>
  <br/> length:
  <input id="lenSlider" type="range" min="1" max="100" value="20"> <span id="length">20</span>
  <br/> temperature:
  <input id="tempSlider" type="range" min="0" max="1" step="0.01"><span id="temperature">0.5</span>
  <p id="status">Loading Model</p>
  <p id="result">
    <span id="original"></span><span id="prediction"></span>
  </p>
</div>

<script src="assets/scripts/example-lstm-interactive.js"></script>

## Code

```javascript
let lstm;
let textInput;
let tempSlider;
let lengthSlider;

function setup() {
  noCanvas();

  // Create the LSTM Generator passing it the model directory
  lstm = ml5.LSTMGenerator('models/woolf/', modelReady);

  // Grab the DOM elements
  textInput = select('#textInput');
  lengthSlider = select('#lenSlider');
  tempSlider = select('#tempSlider');

  // Run generate anytime something changes
  textInput.input(generate);
  lengthSlider.input(generate);
  tempSlider.input(generate);
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function generate() {
  // Update the status log
  select('#status').html('Generating...');

  // Update the length and temperature span elements
  select('#length').html(lengthSlider.value());
  select('#temperature').html(tempSlider.value());

  // Grab the original text
  let original = textInput.value();
  // Make it to lower case
  let txt = original.toLowerCase();

  // Check if there's something
  if (txt.length > 0) {
    // Here is the data for the LSTM generator
    let data = {
      seed: txt,
      temperature: tempSlider.value(),
      length: lengthSlider.value()
    };

    // Generate text with the lstm
    lstm.generate(data, gotData);

    // Update the DOM elements with typed and generated text
    function gotData(err, result) {
      select('#status').html('Ready!');
      select('#original').html(original);
      select('#prediction').html(result);
    }
  } else {
    // Clear everything
    select('#original').html('');
    select('#prediction').html('');
  }
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/LSTM_Interactive)

