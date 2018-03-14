---
id: style-transfer-image-example
title: Style Transfer
---

Fast Style Transfer is a machine learning technique that allows to transfer the style of one image into another one. This is a two step process, first you need to train a model on one particular style and then you can apply this style to another image. In this example we are using two pre-trained models.

You can train your own images following [this tutorial](#). 

This example is using ML5.js and [p5.js](https://p5js.org/). You can also find the same example without p5.js [here](https://github.com/ml5js/ml5-examples)

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
    <p>Style B: <a href="https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa">Udnie (Young American Girl, The Dance), 1913 - Francis Picabia</a></p>
    <img src="assets/img/udnie.jpg" alt="style two">
  </div>

  <script src="assets/scripts/example-style-transfer-image.js"></script>
</div>



## Code

```javascript
let inputImg;
let statusMsg;
let transferBtn;

// Create two Fast Style methods with different pre-trained models
const style1 = new ml5.StyleTransfer('assets/models/wave', modelLoaded);
const style2 = new ml5.StyleTransfer('assets/models/udnie', modelLoaded);

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

  var styleA = style1.transfer(inputImg.elt);
  createImg(styleA.src).parent('styleA');

  var styleB = style2.transfer(inputImg.elt);
  createImg(styleB.src).parent('styleB');

  statusMsg.html('Done!');
}

```

## [Source](https://github.com/ITPNYU/ml5/tree/master/examples/fast_style_transfer)