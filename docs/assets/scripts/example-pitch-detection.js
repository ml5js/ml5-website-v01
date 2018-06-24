// Crepe variables
let crepe;
let mic;
let fft
let frequencyP;

function startPitch() {
  // This needs to wait for the model to be loaded locally. 
  crepe = ml5.pitchDetection('Crepe', getAudioContext(), mic.stream);
}

function setup() {
  noCanvas();
  frequencyP = select('#result');
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