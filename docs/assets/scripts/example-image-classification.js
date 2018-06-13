// Initialize the Image Classifier method with Mobilenet
const classifier = ml5.imageClassifier('Mobilenet');

function setup() {
  noCanvas();
  // Load the image
  img = select('#targetImage');
  classifier.predict(img, gotResult);
}

// A function to run when we get the results
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].className);
  select('#probability').html(nf(results[0].probability, 0, 2));
}
