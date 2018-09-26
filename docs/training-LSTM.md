---
id: training-lstm
title: Training a LSTM 
---

This short tutorial will go over how to train a custom LSTM on your own dataset and then use the results in ml5.js [LSTMGenerator()](/docs/LSTMGenerator) method. For this, you will need a dataset of text you would like to use. Take a look at some of the ones we are using [here](https://github.com/ml5js/ml5-data-and-models/tree/master/datasets/text).

The code for this tutorial is based on [Sherjil Ozair](https://github.com/sherjilozair/char-rnn-tensorflow) version of [Andrej Karpathy's](https://karpathy.github.io/) [char-rnn code](https://github.com/karpathy/char-rnn).


**This are the same instructions you can find in [this repository](https://github.com/ml5js/training-lstm)**

## Requirements

- Set up a python environment with tensorflow installed. [More detailed instructions here](../)

- If you are familiar with Docker, you can also use this  ~~[container]()~~ (soon!)

## Usage

### 1) Download the repository

Start by [downloading](https://github.com/ml5js/training-lstm) or cloning the training repository:

```bash
git clone https://github.com/ml5js/training-lstm.git
cd training-lstm
```

### 2) Collect data

LSTMs work well when you want predict sequences or patterns from your inputs. Try to gather as much input data as you can. The more the better. 

Once your data is ready, create a new folder in the `root` of this project and inside that folder you should have one file called `input.txt` that contains all your training data.

_(A quick tip to concatenate many small disparate `.txt` files into one large training file: `ls *.txt | xargs -L 1 cat >> input.txt`)_

### 2) Train

Run the training script with the default settings: 

```bash
python train.py --data_dir=./folder_with_my_custom_data
```

Or you can specify the hyperparameters you want depending on the training set, size of your data, etc:

```bash
python train.py --data_dir=./folder_with_my_custom_data --rnn_size 128 --num_layers 2 --seq_length 64 --batch_size 32 --num_epochs 1000 --save_model ./models --save_checkpoints ./checkpoints
```

This will train your model and save a JavaScript version **in a folder called `./models`**, if you don't specify a different path.

You can also run the script called `run.sh`:

```bash
bash run.sh
```

This file contains the same parameters as the one's described before:
```bash
# This are the hyperparameters you can change to fit your data
python train.py --data_dir=./bronte \
--rnn_size 128 \
--num_layers 2 \
--seq_length 50 \
--batch_size 50 \
--num_epochs 50 \
--save_checkpoints ./checkpoints \
--save_model ./models
```

### 3) Use it!

Once the model is ready, you'll just need to point to it in your ml5 sketch:

```javascript
const lstm = new ml5.LSTMGenerator('./models/your_new_model');
```

That's it!

## Hyperparameters

Given the size of the training dataset, here are some hyperparameters that might work:

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
