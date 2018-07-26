// Initialize the Image Classifier method with MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelReady);

function setup() {
  noCanvas();
  // Load the image
  img = select('#targetImage');
  classifier.predict(img, gotResult);
}

// Change the status when the model loads.
function modelReady(){
  select('#status').html('Model Loaded')
}

// A function to run when we get the results
function gotResult(err, results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
}
