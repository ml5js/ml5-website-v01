---
id: data-types-of-datasets
title: Types of Data
---

There are many different types of data. You can have images, videos, text, sounds, files, graphs, and more. Here are some common types of datasets that might be interesting when using ml5js.

## Images

Images often need to be resized to have consistent dimensions. Sometimes they will need to be converted to greyscale. It depends on the neural net architecture you are using so check the documentation to know for sure. One tool often used to process images programmatically is [OpenCV](http://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_tutorials.html).  

## Text

There are many great resources online for gathering text datasets, such as [Project Gutenberg](https://www.gutenberg.org/), a collection of over fifty thousand free books with appropriate copyrights. Text that is scraped from other sources - such as a website, or a chat log - likely needs to be cleaned and processed. Processing can include tokenizing (splitting
text into words or sentences), removing punctuation, filtering out stopwords (words that you might not care about/don't want to process), and normalizing (such as making sure all the words have the same capitalization).

For more resources on dealing with text data, check out Dan Shiffman's [A2Z course](http://shiffman.net/a2z/intro/)!

## Sound and Music

Music is different from other mediums because it can be represented in many ways. One thing to think about when making a music dataset is how you want to represent your music. Possible machine learning music inputs include audio files (such as wav files), [MIDI](https://en.wikipedia.org/wiki/MIDI), [spectograms](https://en.wikipedia.org/wiki/Spectrogram)/[rainbowgrams](https://magenta.tensorflow.org/nsynth), sheet music, raw audio, or ABC notation. Your music dataset is then a collection of wav files, midi files, ABC notation files, or spectograms. Each of these types of inputs work best with certain machine learning algorithms. Ror instance, text-based music notation often works with LSTMs, whereas spectograms often work best with the same algorithms employed for images.
