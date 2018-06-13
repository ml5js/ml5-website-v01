---
id: style-transfer-image-example
title: Style Transfer
---

Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training). 

This example is using [p5.js](https://p5js.org/). 

## Demo

<div id="example">
  <style>
    #example img {
      width: 250px;
      height: 250px;
      display: inline;
    }
  </style>

  <p id="statusMsg">Loading Models...</p>

  <button id="transferBtn">Transfer!</button>
  <p>Input Image:</p>

  <img src="assets/img/patagonia.jpg" alt="input img" id="inputImg">

  <div id="styleA">
    <p>Style A: <a href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa">The Great Wave off Kanagawa, 1829 - Katsushika Hokusai</a></p>
    <img src="assets/img/wave.jpg" alt="style one">
  </div>

  <div id="styleB">
    <p>Style B: <a href="https://en.wikipedia.org/wiki/File:Francis_Picabia,_1913,_Udnie_(Young_American_Girl,_The_Dance),_oil_on_canvas,_290_x_300_cm,_Mus%C3%A9e_National_d%E2%80%99Art_Moderne,_Centre_Georges_Pompidou,_Paris..jpg">Udnie (Young American Girl, The Dance), 1913 - Francis Picabia</a></p>
    <img src="assets/img/udnie.jpg" alt="style two">
  </div>

  <script src="assets/scripts/example-style-transfer-image.js"></script>
</div>



## Code

```javascript
let inputImg;
let statusMsg;
let transferBtn;

// Create two Style methods with different pre-trained models
const style1 = ml5.styleTransfer('models/wave', modelLoaded);
const style2 = ml5.styleTransfer('models/udnie', modelLoaded);

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready && style2.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  style1.transfer(inputImg, function(result) {
    createImg(result.src).parent('styleA');
  });

  style2.transfer(inputImg, function(result) {
    createImg(result.src).parent('styleB');
  });

  statusMsg.html('Done!');
}
```

## [Source](https://github.com/ITPNYU/ml5/tree/master/examples/fast_style_transfer)