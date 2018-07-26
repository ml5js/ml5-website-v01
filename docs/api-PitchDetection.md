---
id: PitchDetection
title: pitchDetection()
---

A pitch detection algorithm is a way of estimating the pitch or fundamental frequency of an audio signal. This method allows to use a pre-trained machine learning pitch detection model to estimate the pitch of sound file.

Right now ml5.js only support the CREPE model. This model is a direct port of [github.com/marl/crepe](https://github.com/marl/crepe) and only supports direct input from the browser microphone.

### Example

```javascript
const audioContext = new AudioContext();
// const MicStream = MicStream
const pitch = ml5.pitchDetection('./model/', audioContext , MicStream, modelLoaded); 

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

pitch.getPitch(function(err, frequency){
  console.log(frequency)
});
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/PitchDetection_Game/sketch.js) is a complete example.

## Constructor

```javascript
ml5.pitchDetection(model, audioContext, stream, callback)
```

### Parameters
  - `model` - The path to the trained model. Only [CREPE](https://github.com/marl/crepe) is available for now. Case insensitive.
  - `audioContext` - The browser audioContext to use.
  - `stream MediaStream` - The media stream to use.
  - `callback` - Optional. A callback to be called once the model has loaded. If no callback is provided, it will return a promise that will be resolved once the model has loaded.

## Properties

`.audioContext` - the AudioContext instance. Contains sampleRate, currentTime, state, baseLatency.

`.model` - the pitch detection model. 

`.results` - the current pitch prediction results from the classification model.

`.running` - a boolean value stating whether the model instance is running or not.

`.stream` - the MediaStream instance. Contains an id and a boolean `active` value.


## Methods

```
.getPitch(?callback)
```
> Returns the pitch from the model attempting to predict the pitch.

`callback` -  Optional. A function to be called when the model has generated content. If no callback is provided, it will return a promise that will be resolved once the model has predicted the pitch.

## Source

[/src/PitchDetection](https://github.com/ml5js/ml5-library/tree/master/src/PitchDetection)
