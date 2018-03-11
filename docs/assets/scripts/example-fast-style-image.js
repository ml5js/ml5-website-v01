/*
===
Fast Style Transfer Simple Example
===
*/

let inputImg;
let resultImg1;
let resultImg2;
let statusMsg;
let transferBtn;

// Create two Fast Style methods with different pre-trained models
const fs1 = new ml5.FastStyle('assets/models/wave', modelLoaded);
const fs2 = new ml5.FastStyle('assets/models/udnie', modelLoaded);

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = createP('Loading Models...').parent('example');
  
  // Transfer Button
  transferBtn = createButton('Transfer!').parent('example');
  transferBtn.mousePressed(transferImages);

  // Input Image
  createP('Input Image:').parent('example');
  inputImg = createImg('assets/img/patagonia.jpg').parent('example');

  // Style A
  createP('Style A: The Great Wave off Kanagawa, 1829 - Katsushika Hokusai').parent('example');
  createImg('assets/img/wave.jpg').parent('example');
  resultImg1 = createImg('#').parent('example');

  // Style B
  createP('Style B:Udnie (Young American Girl, The Dance), 1913 - Francis Picabia').parent('example');
  createImg('assets/img/udnie.jpg').parent('example');
  resultImg2 = createImg('#').parent('example');
  
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(fs1.ready && fs2.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  var styleA = fs1.transfer(inputImg.elt);
  resultImg1.elt.src = styleA.src;

  var styleB = fs2.transfer(inputImg.elt);
  resultImg2.elt.src = styleB.src;

  statusMsg.html('Done!');
}