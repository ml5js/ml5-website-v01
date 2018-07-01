---
id: training-introduction
title: Introduction
---

Once you have collected a dataset you can train your own model from scratch (ml5 examples coming soon) or [retrain](https://ml5js.org/docs/FeatureExtractor) a pre-trained model. 

## Transfer Learning with Custom Images

An effective technique for working with custom datasets is referred to as “transfer learning.” In this case, instead of training a machine learning model from scratch with a dataset, a pre-trained model is used as the starting point for training with new data. Working with the TensorFlow.js team, researchers and artists from Google Creative Lab developed a project called “Teachable Machine” that demonstrates this process. With a webcam, someone can interactively and in real-time train a machine learning model to classify input from a video camera.  

In addition to the Teachable Machine website itself, Google released “teachable machine boilerplate”: the bare minimum amount of JavaScript code needed to create your own version. This inspired us to think about an ml5.js version of transfer learning. How do we make the process simple but expose its details to reduce the feeling of “magic”? For this end, we incorporated a “FeatureExtractor.”

```javascript
let features = ml5.featureExtractor('MobileNet');
```

As discussed earlier, MobileNet was designed to assign a label to an image: “coffee mug”, “turtle”, etc. However, behind the scenes, before it actually does so, the MobileNet model runs a mathematical process called a “convolution” (similar to what happens in a photoshop filter) which transforms all the pixels into a reduced set of numbers. A 200x200 image with 40,000 pixels results in a list of 135 floating point numbers. These numbers are considered the “features” of the image. While MobileNet might associate of a certain set of features with a “coffee mug” the transfer learning process allows us to assign new labels to the features extracted from new images.

Once we have the extractor, the next step is to create a classifier from it:

```javascript
const classifier = features.classification();
```

We can tell the classifier about images that with our own labels.

```javascript
classifier.addImage(puffinImage1, 'Puffin');
classifier.addImage(puffinImage2, 'Puffin');
classifier.addImage(puffinImage3, 'Puffin');
classifier.addImage(snowLeopardImage1, 'Snow Leopard');
classifier.addImage(snowLeopardImage2, 'Snow Leopard');
```

Finally we can train a new model based on the features on the images we added.

```javascript
classifier.train();
```

And classify a new unknown image.

```javascript
classifier.classify(someImage, gotResult);

function gotResult(labels) {
  console.log(labels);
}
```
A use case of this is to train an interactive system to recognize custom images. Alejandro Matamala created one of the first projects at ITP with this approach in [PongML](https://github.com/matamalaortiz/Pong-ML). In his project, someone trains a machine learning model in realtime to recognize and then play the game according to person’s specific poses.


## Training a Classifier from Scratch
* Coming soon!
