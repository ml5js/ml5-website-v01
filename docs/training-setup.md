---
id: training-setup
title: Setting up
---

ml5js is built on top of [TensorFlow.js](https://js.tensorflow.org/) a Javascript framework for training and deploying ML models in the browser and on Node.js . 

Some of the training tutorials you will find in this section will be using TensorFlow.js to train models and some others will be using original version of [Tensorflow](https://www.tensorflow.org/) written in Python.

## Initial Settings

When working with Python, we recommend you to install a package dependency and environment management tool, like [Anaconda](https://conda.io/docs/). This allows to manage your different Python versions and dependencies.

To install Conda please follow this instructions: (Thanks to [shekit](https://github.com/shekit/machine-learning-demystified)!)

### 1) Install miniconda 
- Go to https://conda.io/miniconda.html 
- Choose Python 3.6 (bash installer) and download
- Open terminal and type:

```
bash /path/to/the/file/you/just/downloaded
```
(For the path you can drag the bash file you download into your terminal window from where you installed it.)

   - Review the license and approve the license terms - type in `yes` and press enter
   - Press `Enter` again to confirm the location of install
   - Type `yes` when it asks you if the install location should be prepended to PATH
   - Restart Terminal for changes to take effect
   - Type: `conda info`
   - If it prints out some stuff then it has installed correctly
   
### 2) Create an environment

```
conda create -n ml5 python=3.5.2
```

You can name it something other than 'ml5' if you prefer. Type: `y` (and press Enter). This will create a conda environment with the name 'ml5' and python version 3.5.2

### 3) Turn off conda by default
The above instructions will set conda to be your "default" python on your machine (rather than the usual python 2 that comes pre-installed on a mac.) If you would prefer to turn this off, you have to edit your `bash_profile` (a configuration file for terminal.) Use these steps.

Edit bash profile with 

```
$ nano ~/.bash_profile
```

You should see:

```
# added by Miniconda3 4.3.11 installer
export PATH="/Users/yourname/miniconda3/bin:$PATH"
```
Change this to:

```
alias start_conda='PATH="/Users/yourname/miniconda3/bin:$PATH"'
```

Restart terminal. Now terminal will not use your conda python installation unless you enter `start_conda`. You could also consider using something like [VirtualEnv](https://virtualenv.pypa.io/en/stable/) instead.

### 4) Activate environment

```
$ source activate ml5
```

You should see (ml5) prepended before your terminal prompt

### 5) Install python packages

Create a file called `requirements.txt` and paste the following into it.

```
numpy==1.11.0
scipy==0.17.0
tensorflow==1.0.0
```

Then run 

```
pip install -r requirements.txt
```

Make sure you `ml5` environment is activated (you should see (ml5) prepended before your terminal prompt).

All set! 🌈
