---
id: data-preparing-your-own-data
title: Preparing your own data
---

## Training, test, and validation datasets

Once you have your dataset, you generally want to split it into training, test, and validation datasets. 

Training datasets are used to train the model. Validation datasets are used to change the parameters of the model, and test datasets are used to test the final performance of the model. Over time, we'll add more resources here to further explain these concepts. For now, you just need to know that you need to split your data into these sets.

There is no hard and fast rule for how to split this, but one suggestion is to take all of your data and put about 80% into your training dataset, and 15-16% into test set, and the remaining 4-5% into your validation set.

There are not hard and fast rules, but typically a model will perform better if you have a lot of training data. If you are working with a small dataset, you can optionally increase the percentage  that goes into your training dataset.
