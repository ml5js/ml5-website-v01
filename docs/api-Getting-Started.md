---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

ml5.js is heavily inspired by the [Processing](https://processing.org/) and [p5.js](https://p5js.org/) libraries. Its primary goal is to make machine learning accessible to beginners, artists, designers, and educators through a simple and concise interface.

## Setup

Download the [latest version](https://github.com/ITPNYU/ml5) of ml5.js and save the following HTML file to your computer:

```html
<!DOCTYPE html>
  <html>
    <head>
      <meta charset=utf-8>
      <title>Intro to ml5.js</title>
    </head>
    <body>
      <script src="ml5.min.js"></script>
      <script>
        // Your code will go here
      </script>
    </body>
  </html>
```

That's all!

## Creating a simple image recognition example

Make a new `index.html` and paste in the below code. Make sure the first `<script>` tag is pointing to a copy of [ml5.min.js](https://github.com/ITPNYU/ml5/tree/master/dist).

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Simple ml5.js Example</title>
    <script src="ml5.min.js"></script>
    <script>
    // Initialize the imaImageClassifier method with the pre-trained SqueezeNet model.
    const classifier = new ml5.ImageClassifier('SqueezeNet');

    function onImageReady() {
      // Get the image element from the page
      let img = document.getElementById('image');
      // Get a prediction for that image
      classifier.predict(img, 10, gotResult);
    }

    // When we get the results
    function gotResult(results) {
      // The results are in an array ordered by probability.
      document.getElementById('result').innerText = results[0].className;
      document.getElementById('probability').innerText = results[0].probability.toPrecision(2);
    }
    </script>
  </head>
  <body>
    <!--
    This is the image we want to use.
    We can change the src later in code.
    We set crossOrigin to anonymous because imgur
    will respect that and send CORS headers.
    Not needed if you're loading an image from your own domain.
    -->
    <h1>Simple Image Classification Example</h1>
    <img onload="onImageReady()" id="image" src="https://i.imgur.com/wxrLX68.jpg" crossOrigin="anonymous" >

    <p>
      I guess this is a <span id="result">...</span>.
      My confidence is <span id="probability">...</span>
    </p>
  </body>
</html>
```

Open it in a web browser and after a couple seconds of you should see something like this:

<img src="assets/img/getting-started.png">

This demo needs only ml5.js to run. When the HTML is parsed by the browser, it loads the `<img>` tag, at which point it gets an image from Imgur using a cross-origin request. When the image is loaded, `onImageReady()` is called and asks ImageClassifier for its best prediction as to what the image is, along with its confidence level. Then it prints the result to the specified DOM elements.

It should be noted that this example uses a pre-trained model ([SqueezeNet](https://arxiv.org/abs/1602.07360)) that was trained on a database of approximately 15 million images ([ImageNet](http://www.image-net.org/)). The ml5 library accesses the model from the cloud. What the algorithm labels an image is entirely dependent on that training data -- what is included, excluded, and how those images are labeled (or mislabeled).
