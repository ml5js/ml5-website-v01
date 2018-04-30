---
id: crepe
title: Crepe Pitch Detection
---

This code is based on the code at https://github.com/marl/crepe (gh-pages branch).

Notes from this demo (from the demo page at https://marl.github.io/crepe/):

"This demo works most reliably in the latest versions of Chrome on Windows
and MacOS. There is an issue where TensorFlow.js is not working properly
on Linux versions of Chrome.

A stripped-down model of CREPE is running on this browser,
which has less then 3 percent of papameters. The performance of
this online demo therefore may not be as good as reported
in the <a href="https://arxiv.org/abs/1802.06182">paper</a>,
and it may make more octave errors than the full model.

The model is trained on 16 kHz audio, and due to the imperfect resampling
in the browser, this demo works best when the hardware sample rate is
a multiple of 16000 Hz."


### Example

```javascript
// Create an audio capture (this creates a video element and returns a stream)
const videoElement = createCapture(AUDIO, stream => {
  // Eliminates feedback from mic
  videoElement.volume(0);
  // Initialize a new Crepe instance with the stream
  crepe = new ml5.Crepe(getAudioContext(), stream); 
});

// This should be in your main function
let results = crepe.getResults();
console.log(results);
```

## Constructor

```javascript
Crepe(audioContext, stream)
```

`audioContext AudioContext` - the audioContext of the browser

`stream MediaStream` - the media stream

## Properties

`.audioContext` - the AudioContext instance. Contains sampleRate, currentTime, state, baseLatency.

`.model` - the CREPE classifier. 

`.results` - the current pitch prediction results from the classification model.

`.running` - a boolean value stating whether the Crepe instance is running or not.

`.stream` - the MediaStream instance. Contains an id and a boolean `active` value.


## Methods

```
.getResults()
```
> Returns the results from the Crepe model attempting to predict the pitch.

`result` -  The pitch prediction, if available, or a string 'no voice' if a voice is not detected.

`confidence` -  How confident the model is about its prediction.

## Source

[/src/Crepe/index.js](https://github.com/ml5js/ml5-library/blob/master/src/Crepe/index.js)
