// Create the LSTM Generator passing it the model directory
const lstm = ml5.LSTMGenerator('assets/models/hemingway', modelReady);

let textInput;
let tempSlider;
let lengthSlider;

function modelReady() {
  document.getElementById('status').innerHTML = 'Model Loaded';
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