---
id: multiple-image-classification-example
title: Multiple Image Classification
---

An example for multiple image classification using ml5.js and [p5.js](https://p5js.org/). This example reads in multiple images, classifies them, and creates a JSON file of predictions.

## Prepare your images

This example uses a few photos from the [Caltech 101](http://www.vision.caltech.edu/Image_Datasets/Caltech101/).

### Collect the data
If you're downloading a dataset, download it and move it to the 'images' folder of this example. Unzip it. Delete the zip file. Rename the parent folder (under 'images') to 'dataset'. The dataset folder should contain only images.

If you already have a collection of images, place those in a folder called 'dataset' in the 'images' folder of this example.

### Get the data's structure and put it in a text file
Because JavaScript has a hard time pulling in multiple files, we need to make a JSON file of the image folder's structure, with all of the file names.

Navigate to the dataset in your terminal:

```shell
cd images/dataset
```

If you type 'ls', you can see many folders, each containing images. The images that you want to make predictions on can be in any format.

Once in the folder, type 'tree'. You can see a printout of the structure of the data folder. 

<img src="assets/img/tree.png" style="margin:0px" />

Type:

```shell
tree > ../../make_json/tree.txt
```

to save this structure to a text file in the "make_json" folder.

Next, navigate to the make_json folder:

```shell
cd ../../make_json
```

There is a program here that will take the tree structure and turn it into a nice clean JSON file to read into our JavaScript program.

Once there, if you type 'ls', you will see your tree.txt file and a python script called main.py. Run this program by typing

```shell
python main.py
```

in your terminal. If you type 'ls' again after this, you will see a data.json file with your JSON-structured data.

Move that file to your 'assets' folder. You can do this on the command line by typing:

```shell
mv data.json ../assets/data.json
```

## Code
```javascript
// Initialize the Image Classifier method using MobileNet
const classifier = ml5.imageClassifier('MobileNet', modelReady);

let img;
let currentIndex = 0;
let allImages = [];
let display = true;
let displayTime = 750;
let predictions = [];

function preload() {
  data = loadJSON('assets/data.json');
}

function setup() {
  noCanvas();
  appendImages();
  img = createImg(allImages[0], imageReady);
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function appendImages() {
  for (i = 0; i < data.images.length; i++) {
    imgPath = data.images[i];
    allImages.push('images/dataset/' + imgPath);
  }
}

function drawNextImage() {
  img.attribute('src', allImages[currentIndex], imageReady);
}

// When the image has been loaded,
// get a prediction for that image
function imageReady() {
  classifier.predict(img, gotResult);
}

function savePredictions() {
  predictionsJSON = {
    "predictions": predictions
  }
  saveJSON(predictionsJSON, 'predictions.json');
}

function removeImage() {
  currentIndex++;
  if (currentIndex <= allImages.length - 1) {
    drawNextImage();
  } else {
    savePredictions();
  }
}

// When we get the results
function gotResult(err, results) {
  information = {
    "name": allImages[currentIndex],
    "result": results,
  }
  predictions.push(information);
  console.log(results);
  if (display) {
    // The results are in an array ordered by probability.
    select('#result').html(results[0].className);
    select('#probability').html(nf(results[0].probability, 0, 2));
    // Can be changed with the displayTime variable.
    setTimeout(removeImage, displayTime);
  } else {
    removeImage();
  }
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/ImageClassification_MultipleImages)
