---
id: making-datasets
title: Making Your Own Datasets
---

So you want to make your own dataset! Here are some things to think about during this process.

## Introductory questions

<img src="assets/img/datastork.png" style="margin:0px" />

### Where does data come from?

Data can be scraped from all over the internet, or from a specific site (like reddit, Twitter, or Flickr). It can be manually created by yourself, or by third-party data creation services (such as Crowdflower). It can be data you already have. It can be accessed using an API, or it can be generated. And of course, much of the world's data comes from companies. 

### Where do labels/tags come from? 

If the data is scraped from somewhere, the label is often the keyword used to search for the data (i.e. 'building' or 'tree'). The location of the data is also sometimes its label (i.e. the subreddit name if scraping from a site like reddit). Data can be manually labeled, or labeled using a third-party data tagging service. It can be labels you already have connected to your data. And of course, many labels and tags come from existing taxonomies.

## Data collection

### Responsible data collection

It is important, when collecting data, to think critically at every stage along the collection process.

Some questions to ask yourself include:

Whose data is this? Would they want you to scrape this? Is it public?
Is there a way to ask permission and/or pay for the data?
Can you collect data with appropriate licensing? Flickr, for instance, has an extensive licensing system, and their API allows you to collect images based on permissions.

You want to be careful of under-representation bias in data collection (also known as [sampling bias](https://en.wikipedia.org/wiki/Sampling_bias). For example, if you're collecting a dataset of the best movies of all time, are you asking only those in your immediate circle? For situations where there are obvious gaps in your data, it's important to see if there's a way to collect more, from varied sources.
Read about some work by Mimi Onuoha along these lines here: [The Library of Missing Datasets](https://github.com/MimiOnuoha/missing-datasets).

The converse of this is collecting too much data. Is it really necessary to your project to ask for gender and age? Could collecting religion, ethnicity, or nationality be dangerous now or down the road? Are you collecting only what is absolutely necessary? Is there something that would be better to leave out?

### Tagging and crowdsourcing

Many datasets are created by making small tasks on a crowdsourcing website (such as Crowdflower or Mechanical Turk) and asking people to do these tasks. Crowdsourcing websites makes it easier to do large amounts of tasks that are hard for computers, but easy for humans - for example, identifying an object in an image, or the emotion that a piece of text evokes. 

Not all crowdsourcing sites are equal in terms of responsible data collection. When creating a job, pay attention to whether the site allows for feedback from the contributors (people doing your tasks), and whether the site encourages you to pay a fair price (and more than minimum wage) for your jobs.

If you're creating a dataset in this way, remember that you wouldn't have a dataset without these taggers. Pay them well and value their time and contribution.

## Things to know for medium-specific datasets

### Images

Images often need to be resized to all be the same dimensions. Sometimes, they will need to be converted to black-and-white images. It depends on the neural net architecture you are using, so check the documentation to know for sure. One tool often used to process images programmatically is [OpenCV](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html).  

### Text

There are many great resources online for gathering text datasets, such as [Project Gutenberg](https://www.gutenberg.org/), a collection of over fifty thousand free books with appropriate copyrights. Text that is scraped from other sources - such as a website, or your own data from a chat log - likely needs to be cleaned and processed. Processing can include tokenizing (splitting
text into words or sentences), removing punctuation, filtering out stopwords (words that you might not care about/don't want to process), and normalizing (such as making sure all the words have the same capitalization).

For more resources on dealing with text data, check out Dan Shiffman's [A2Z course!](http://shiffman.net/a2z/intro/)

### Music

Music is different from other mediums because it can be represented in many ways. One thing to think about when making a music dataset is how you want to represent your music. Possible machine learning music inputs include audio files (such as wav files), [MIDI](https://en.wikipedia.org/wiki/MIDI), [spectograms](https://en.wikipedia.org/wiki/Spectrogram)/[rainbowgrams](https://magenta.tensorflow.org/nsynth), sheet music, raw audio, or ABC notation. Your music dataset, then, would be a collection of wav files, midi files, ABC notation files, or spectograms. Each of these types of inputs use different machine learning algorithms - for instance, text-based music notation often works with LSTMs, where spectograms often use algorithms more relevant to images.

## Preparing your dataset for machine learning

### Training, test, and validation datasets

Once you have your dataset, you generally want to split it into training, test, and validation datasets. 

Training datasets are used to train the model. Validation datasets are used to change the parameters of the model, and test datasets are used to test the final performance of the model. Over time, we'll add more resources here to further explain these concepts. For now, you just need to know that you need to split your data into these sets.

There is no hard and fast rule for how to split this, but one suggestion is to take all of your data and put about 80% into your training dataset, and 15-16% into test set, and the remaining 4-5% into your validation set.

It is always important to have a lot of training data. If you don't have too much, you may want to put closer to 90% into your training dataset.

## Further reading

A walkthrough on creating an entire dataset from scratch can be found at [ITP's AI blog](https://itp.nyu.edu/AI/creating-datasets/).

