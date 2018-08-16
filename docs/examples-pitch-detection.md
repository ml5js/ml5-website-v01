---
id: pitch-detection-example
title: Pitch Detection
---

A pitch detection algorithm is a way of estimating the pitch or fundamental frequency of an audio signal. This method allows to use a pre-trained machine learning pitch detection model to estimate the pitch of sound file.

Right now ml5.js only support the CREPE model. This model is a direct port of [github.com/marl/crepe](https://github.com/marl/crepe) and only support direct input from the browser microphone.

This example is built with p5.js.

## Demo

<div class="example">
  Detect pitch:
  <p id="result"></p>
</div>

<script src="assets/scripts/example-pitch-detection.js"></script>

## Code

```javascript
// Crepe variables
let crepe;
let mic;
let fft
let frequencyP;

function startPitch() {
  crepe = ml5.pitchDetection('Crepe', getAudioContext(), mic.stream);
}

function setup() {
  noCanvas();
  frequencyP = createP('sing!');
  mic = new p5.AudioIn();
  mic.start(startPitch);
  fft = new p5.FFT();
}

function draw() {
  if (crepe) {
    let pitch = crepe.getResults();
    if (pitch) {
      frequencyP.html(pitch['result']);
    }
  }
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/LSTM/LSTM_Text)
