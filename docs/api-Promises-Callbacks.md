---
id: promises-callback
title: A note on using Promises and Callbacks
sidebar_label: Promises and Callbacks
---

ml5.js is heavily inspired by the syntax, patterns and code structure [p5.js](https://p5js.org/) uses. Although, there are some changes in the way asynchronous operation work. ml5.js supports <b>error-first callbacks</b> and Promises in all its methods. You can choose which one to use when using ml5.js.

## Using Callbacks

In [p5.js](https://p5js.org/), [callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) are passed as arguments to functions that often perform some asynchronous operation. For example, [p5.js](https://p5js.org/) defines the [`loadJSON()`](https://p5js.org/reference/#/p5/loadJSON) function as the following:

```javascript
loadJSON('http//example.com/data.json', function (results) {
  // Do something with the results
});
```

One thing you will notice from this example, is that the results from the callback in [p5.js](https://p5js.org/) are given as the only argument to the function. There are no error arguments in the callback.

ml5.js on the other hand, uses a pattern referred to as an <b>error-first callback</b>: 

>  With this pattern, a callback function is passed to the method as an argument. When the operation either completes or an error is raised, the callback function is called with the Error object (if any) passed as the first argument. If no error was raised, the first argument will be passed as null. [[Taken from the Node.js documentation](https://nodejs.org/api/errors.html#errors_error_first_callbacks)]

So, for example, if you are using the `imageClassifier()` method, you will need to construct it in the following way: 

```javascript
// We pass a callback function to constructor
const classifier = ml5.imageClassifier('MobileNet', function(err, model) {
  console.log('Model Loaded!');
}

// Make a prediction with the selected image and pass a callback function with two arguments
classifier.predict(image, function(err, results) {
  // Check for errors. If no errors, then do something with the results
});
```

This is just a convention. JavaScript does not enforce this pattern in the way you right code. But this convention is very common among developers. So, keep in mind that most ml5.js methods and functions are asynchronous (machine learning models  might takes some time to process the inputs and output some results!) and therefore, you will need to use the <b>error-first callback</b> pattern if you want to use callbacks.

## Using Promises

ml5.js supports [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) by default. If no callback is given to any asynchronous function then a Promise will be returned. 

So, the image classification example can be used in the following way:

```javascript
// No callback needs to be passed to use Promises.
ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.predict(image))
  .then(results => {
    // Do something with the results
  });
```