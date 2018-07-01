---
id: word2vec-example
title: Word2Vec
---

Word2vec is a group of related models that are used to produce [word embeddings](https://en.wikipedia.org/wiki/Word2vec)</sup>. This method allows you to perform vector operations on a given set of input vectors. 

You can use the word models [we provide](https://github.com/ml5js/ml5-examples/tree/master/p5js/Word2Vec/data), trained on a corpus of english words (watch out for bias data!), or you can train your own vector models following [this tutorial](https://github.com/ml5js/ml5-data-and-training/tree/master/training). More of this soon!

## Demo

<div class="example">
  <style>
    .row {
      margin-top: 10px;
      padding: 20px;
      outline: 2px solid #ccc;
      outline-offset: -10px;
      -moz-outline-radius: 10px;
      -webkit-outline-radius: 10px;
    }
  </style>
  <div>
  <div>
    <div class="row">
      <p>
        <input type="text" value="rainbow" id="nearword"></input>
        <button id="submit" class="btn btn-primary">is similar to ...</button>
      </p>
      <p id="results"></p>
    </div>
    <div class="row">
      <p>
        Between
        <input type="text" value="rainbow" id="between1"></input> and
        <input type="text" value="kitten" id="between2"></input>
        <button id="submit2" class="btn btn-primary">is ...</button>
      </p>
      <p id="results2"></p>
    </div>
    <div class="row">
      <p>
        <input type="text" value="pizza" id="isto1"></input> is to
        <input type="text" value="humans" id="isto2"></input> as
        <input type="text" value="fish" id="isto3"></input>
        <button id="submit3" class="btn btn-primary">is to ...</button>
      </p>
      <p id="results3"></p>
    </div>
  </div>

  <script src="assets/scripts/example-word2vec.js"></script>
</div>

## Code

```javascript
// Create the Word2Vec methods
const word2Vec = ml5.word2vec('data/wordvecs10000.json', modelLoaded);
let modelReady = false;

function setup() {
  noLoop();
  noCanvas();

  let nearWordInput = select('#nearword');
  let nearButton = select('#submit');
  let nearResults = select('#results');

  let betweenWordInput1 = select("#between1");
  let betweenWordInput2 = select("#between2");
  let betweenButton = select("#submit2");
  let betweenResults = select("#results2");

  let addInput1 = select("#isto1");
  let addInput2 = select("#isto2");
  let addInput3 = select("#isto3");
  let addButton = select("#submit3");
  let addResults = select("#results3");

  nearButton.mousePressed(() => {
    let word = nearWordInput.value();
    nearResults.html(findNearest(word, 10));
  });

  betweenButton.mousePressed(() => {
    let word1 = betweenWordInput1.value();
    let word2 = betweenWordInput2.value();
    let average = word2Vec.average([word1, word2], 1);
    betweenResults.html(average[0].word);
  });

  addButton.mousePressed(() => {
    let is1 = addInput1.value();
    let to1 = addInput2.value();
    let is2 = addInput3.value();
    let difference = word2Vec.subtract([to1, is1]);
    let to2 = word2Vec.add([is2, difference[0].word]);
    addResults.html(to2[0].word);
  });
}

function modelLoaded () {
  modelReady = true;
}

function findNearest(word, n=10) {
  if(modelReady){
    let nearest = word2Vec.nearest(word, n);
    if (!nearest) {
      return 'No word vector found';
    }
    let output = '';
    for (let i = 0; i < nearest.length; i++) {
      output += nearest[i].word + '<br/>';
    }
    return output;
  } 
  return 'Model has not loaded yet!';
}
```

## [Source](https://github.com/ml5js/ml5-examples/tree/master/p5js/Word2Vec)
