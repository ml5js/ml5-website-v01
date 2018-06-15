---
id: training-lstm
title: Training a LSTM 
---

This short tutorial will go over how to train a custom LSTM on your own dataset and then use the results in ml5.js [LSTMGenerator()](/docs/LSTMGenerator) method. For this, you will need a dataset of text you would like to use. Take a look at some of the ones we are using [here](https://github.com/ml5js/ml5-data-and-training/tree/master/training/lstm/data).

The code for this tutorial is based on [Sherjil Ozair](https://github.com/sherjilozair/char-rnn-tensorflow) version of [Andrej Karpathy's](https://karpathy.github.io/) [char-rnn code](https://github.com/karpathy/char-rnn).

## Requirements

Please setup the require python environment. [More detailed instructions here](/docs/training-setup)

## 1) Get the code

Start by [downloading](https://github.com/ml5js/ml5-data-and-training/archive/master.zip) or cloning the [ml5-data-and-training]() repository:

```bash
git clone https://github.com/ml5js/ml5-data-and-training.git
```

Once download change directory into the lstm training code:

```bash
cd training/lstm
```

## 2) Train

Inside the `training/lstm/data` folder, create a new folder with the name of your data. Inside that folder there should be just one file called `input.txt`


(A quick tip to concatenate many small disparate `.txt` files into one large training file: `ls *.txt | xargs -L 1 cat >> input.txt`)

Once inside that folder run:

```bash
python train.py --data_dir=./data/my_own_data/
```

You can also specify the hyperparameters:

```bash
python train.py --data_dir=./data/my_own_data/ --rnn_size 128 --num_layers 2 --seq_length 64 --batch_size 32 --num_epochs 1000
```

This will train your model and save the model, **in the globals `./models` folder**, in a format usable in ml5. ✨

## 3) Use!

To use model in ml5, you'll just need to point to the new folder in your sketch:

```javascript
const lstm = ml5.LSTMGenerator('./models/your_new_model');
```

That's it!

## Hyperparameters

Given the size of the training dataset, you can use:

* 2 MB: 
   - rnn_size 256 (or 128) 
   - layers 2 
   - seq_length 64 
   - batch_size 32 
   - dropout 0.25
* 5-8 MB: 
  - rnn_size 512 
  - layers 2 (or 3) 
  - seq_length 128 
  - batch_size 64 
  - dropout 0.25
* 10-20 MB: 
  - rnn_size 1024 
  - layers 2 (or 3) 
  - seq_length 128 (or 256) 
  - batch_size 128 
  - dropout 0.25
* 25+ MB: 
  - rnn_size 2048 
  - layers 2 (or 3) 
  - seq_length 256 (or 128) 
  - batch_size 128 
  - dropout 0.25

_Thanks to Ross Goodwin!_

## Tensorboard

Tensorflow comes with [Tensorboard](https://github.com/tensorflow/tensorboard): "a suite of web applications for inspecting and understanding your TensorFlow runs and graphs.".

To visualize training progress, model graphs, and internal state histograms: fire up Tensorboard and point it at your `log_dir`:

```bash
$ tensorboard --logdir=./logs/
```

Then open a browser to [http://localhost:6006](http://localhost:6006) or the correct IP/Port specified.

