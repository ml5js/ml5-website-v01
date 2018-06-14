---
id: data-collection
title: Data Collection
---

## Responsible data collection

It is important, when collecting data, to think critically at every stage along the collection process.

Some questions to ask yourself include:

Whose data is this? Would they want you to scrape this? Is it public?
Is there a way to ask permission and/or pay for the data?
Can you collect data with appropriate licensing? Flickr, for instance, has an extensive licensing system, and their API allows you to collect images based on permissions.

You want to be careful of under-representation bias in data collection (also known as [sampling bias](https://en.wikipedia.org/wiki/Sampling_bias). For example, if you're collecting a dataset of the best movies of all time, are you asking only those in your immediate circle? For situations where there are obvious gaps in your data, it's important to see if there's a way to collect more, from varied sources.
Read about some work by Mimi Onuoha along these lines here: [The Library of Missing Datasets](https://github.com/MimiOnuoha/missing-datasets).

The converse of this is collecting too much data. Is it really necessary to your project to ask for gender and age? Could collecting religion, ethnicity, or nationality be dangerous now or down the road? Are you collecting only what is absolutely necessary? Is there something that would be better to leave out?

## Where does data come from?

<img src="assets/img/datastork.png" style="margin:0px" />

Data can be scraped from all over the internet, or from a specific site (like reddit, Twitter, or Flickr). It can be manually created by yourself, or by third-party data creation services (such as Crowdflower). It can be data you already have. It can be accessed using an API, or it can be generated. And of course, much of the world's data comes from companies. 

## Where do labels/tags come from? 

If the data is scraped from somewhere, the label is often the keyword used to search for the data (i.e. 'building' or 'tree'). The location of the data is also sometimes its label (i.e. the subreddit name if scraping from a site like reddit). Data can be manually labeled, or labeled using a third-party data tagging service. It can be labels you already have connected to your data. And of course, many labels and tags come from existing taxonomies.


## Tagging and crowdsourcing

Many datasets are created by making small tasks on a crowdsourcing website (such as Crowdflower or Mechanical Turk) and asking people to do these tasks. Crowdsourcing websites makes it easier to do large amounts of tasks that are hard for computers, but easy for humans - for example, identifying an object in an image, or the emotion that a piece of text evokes. 

Not all crowdsourcing sites are equal in terms of responsible data collection. When creating a job, pay attention to whether the site allows for feedback from the contributors (people doing your tasks), and whether the site encourages you to pay a fair price (and more than minimum wage) for your jobs.

If you're creating a dataset in this way, remember that you wouldn't have a dataset without these taggers. Pay them well and value their time and contribution.