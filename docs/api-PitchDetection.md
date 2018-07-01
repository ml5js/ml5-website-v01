---
id: PitchDetection
title: pitchDetection()
---

A pitch detection algorithm is a way of estimating the pitch or fundamental frequency of an audio signal. This method allows to use a pre-trained machine learning pitch detection model to estimate the pitch of sound file.

Right now ml5.js only support the CREPE model. This model is a direct port of [github.com/marl/crepe](https://github.com/marl/crepe) and only support direct input from the browser microphone.

### Example

```javascript
const crepe = ml5.pitchDetection('Crepe', context, stream); 
let results = crepe.getResults();
```

[Here](https://github.com/ml5js/ml5-examples/blob/master/p5js/PitchDetection_Game/sketch.js) is a complete example.

## Constructor

```javascript
ml5.pitchDetection(model, audioContext, stream)
```

### Parameters
  - `model` - A String value of a valid model. Only [CREPE](https://github.com/marl/crepe) is available for now. Case insensitive.
  - `audioContext` - The browser audioContext to use.
  - `stream MediaStream` - The media stream

## Properties

`.audioContext` - the AudioContext instance. Contains sampleRate, currentTime, state, baseLatency.

`.model` - the pitch detection model. 

`.results` - the current pitch prediction results from the classification model.

`.running` - a boolean value stating whether the model instance is running or not.

`.stream` - the MediaStream instance. Contains an id and a boolean `active` value.


## Methods

```
.getResults()
```
> Returns the results from the model attempting to predict the pitch.

`result` -  The pitch prediction, if available, or a string 'no voice' if a voice is not detected.

`confidence` -  How confident the model is about its prediction.

## Source

[/src/PitchDetection](https://github.com/ml5js/ml5-library/tree/master/src/PitchDetection)
