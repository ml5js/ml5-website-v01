---
id: lstm-interactive-example
title: LSTM Interactive
---

An interactive LSTM text generation example using a model trained on a corpus of [Ernest Hemingway](https://en.wikipedia.org/wiki/Ernest_Hemingway) using ml5.js and [p5.js](https://p5js.org/). 

In this demo you ask the LSTM: "Starting with the seed text, predict what text might come next based on the pre-trained Ernest Hemingway model." Changing `length` changes the number of characters in the resulting predicted text. Higher `length` values can take many minutes to compute and use a lot of CPU. The `temperature` controls the randomness of the output. A `temperature` of 0 will be relatively random but might not even look like English, while a `temperature` of 1.0 will probably be correct English but will also be very close to the original Hemingway, perhaps even straight quotations.

You can train your own models following [this tutorial](#).

You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

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

```html
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
```

```javascript
// Create the LSTM Generator passing it the model directory
const lstm = new ml5.LSTMGenerator('assets/models/hemingway/', modelReady);

let textInput;
let tempSlider;
let lengthSlider;

function modelReady() {
  select('#status').html('Model Loaded');
}

function setup() {
  noCanvas();

  // Grab the DOM elements
  textInput = select('#textInput');
  lengthSlider = select('#lenSlider');
  tempSlider = select('#tempSlider');

  // Run generate anytime something changes
  textInput.input(generate);
  lengthSlider.input(generate);
  tempSlider.input(generate);
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
    function gotData(result) {
      select('#status').html('Ready!');
      select('#original').html(original);
      select('#prediction').html(result.generated);
    }
  } else {
    // Clear everything
    select('#original').html('');
    select('#prediction').html('');
  }
}

```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/04_LSTM_Interactive)

