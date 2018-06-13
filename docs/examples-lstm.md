---
id: lstm-example
title: Text Generation with LSTM
---

In this demo you ask the LSTM: "Starting with the seed text, predict what text might come next based on the pre-trained [Ernest Hemingway](https://en.wikipedia.org/wiki/Ernest_Hemingway) model." Changing `length` changes the number of characters in the resulting predicted text. Higher `length` values can take many minutes to compute and use a lot of CPU. The `temperature` controls the randomness of the output. A `temperature` of 0 will be relatively random but might not even look like English, while a `temperature` of 1.0 will probably be correct English but will also be very close to the original Hemingway, perhaps even straight quotations.

This example is built with p5.js.

You can train your own models following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training/lstm). More on this soon!

## Demo

<div class="example">
  <p>seed text: <input id="textInput" value="The meaning of life is" /></p> 
  <p>length: <input id="lenSlider" type="range" min="10" max="500" value="100"> <span id="length">100</span></p>
  <p>temperature:<input id="tempSlider" type="range" min="0" max="1" step="0.01"><span id="temperature">0.5</span></p>
  <p id="status">Loading Model</p>
  <button id="generate">generate</button>
  <p id="result"></p>
</div>

<script src="assets/scripts/example-lstm.js"></script>

## Code

```javascript
// Create the LSTM Generator passing it the model directory
const lstm = ml5.LSTMGenerator('models/nietschze/', modelReady);

let textInput;
let lengthSlider;
let tempSlider;
let button;

function modelReady() {
  select('#status').html('Model Loaded');
}

function setup() {
  noCanvas();

  // Grab the DOM elements
  textInput = select('#textInput');
  lengthSlider = select('#lenSlider');
  tempSlider = select('#tempSlider');
  button = select('#generate');

  // DOM element events
  button.mousePressed(generate);
  lengthSlider.input(updateSliders);
  tempSlider.input(updateSliders);

  // Update the slider values
  function updateSliders() {
    select('#length').html(lengthSlider.value());
    select('#temperature').html(tempSlider.value());
  }
}

// Generate new text
function generate() {
  // Update the status log
  select('#status').html('Generating...');

  // Grab the original text
  let original = textInput.value();
  // Make it to lower case
  let txt = original.toLowerCase();

  // Check if there's something to send
  if (txt.length > 0) {
    // This is what the LSTM generator needs
    // Seed text, temperature, length to outputs
    // TODO: What are the defaults?
    let data = {
      seed: txt,
      temperature: tempSlider.value(),
      length: lengthSlider.value()
    };

    // Generate text with the lstm
    lstm.generate(data, gotData);

    // When it's done
    function gotData(result) {
      // Update the status log
      select('#status').html('Ready!');
      select('#result').html(txt + result.generated);
    }
  }
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/LSTM_Text)

