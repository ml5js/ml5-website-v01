---
id: lstm-example
title: LSTM
---

A simple LSTM text generation example using a pre-trained model on a corpus of [Ernest Hemingway](https://en.wikipedia.org/wiki/Ernest_Hemingway) using ml5.js and [p5.js](https://p5js.org/). 

In this demo you ask the LSTM: "Starting with the seed text, predict what text might come next based on the pre-trained Ernest Hemingway model." Changing `length` changes the number of characters in the resulting predicted text. Higher `length` values can take many minutes to compute and use a lot of CPU. The `temperature` controls the randomness of the output. A `temperature` of 0 will be relatively random but might not even look like English, while a `temperature` of 1.0 will probably be correct English but will also be very close to the original Hemingway, perhaps even straight quotations.

You can train your own models following [this tutorial](#). 

You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

## Demo

<div class="example">
  <p>seed text: <input id="textInput" value="She was sitting next to" /></p> 
  <p>length: <input id="lenSlider" type="range" min="10" max="500" value="100"> <span id="length">100</span></p>
  <p>temperature:<input id="tempSlider" type="range" min="0" max="1" step="0.01"><span id="temperature">0.5</span></p>
  <p id="status">Loading Model</p>
  <button id="generate">generate</button>
  <p id="result"></p>
</div>

<script src="assets/scripts/example-lstm.js"></script>

## Code

```html
  <p>seed text: <input id="textInput" value="She was sitting next to" /></p> 
  <p>length: <input id="lenSlider" type="range" min="10" max="500" value="100"> <span id="length">100</span></p>
  <p>temperature:<input id="tempSlider" type="range" min="0" max="1" step="0.01"><span id="temperature">0.5</span></p>
  <p id="status">Loading Model</p>
  <button id="generate">generate</button>
  <p id="result"></p>
```

```javascript
// Create the LSTM Generator passing it the model directory
const lstm = new ml5.LSTMGenerator('assets/models/hemingway/', modelReady);

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
    select('#length').html(lengthSlider.value())
    select('#temperature').html(tempSlider.value())
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

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/03_LSTM_Simple)

