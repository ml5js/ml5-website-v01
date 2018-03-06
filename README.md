# ML5 Website

This website is built with [Docusaurus](https://docusaurus.io/).

Docusaurus is an open-source library, built with React, to create and maintain documentation websites.

### Contributing

The website source is in the `source` branch. The site is served from `master`.

Almost all the content for the website can be found in markdown under the `docs/` folder at the root level of the repository. 

The naming convention we are using is the following:

* Examples are named: `examples-[name of example].md`
* API Reference files are named: `api-[Class].md`
* Glossary: `glossary-[type].md`

If you wish to help develop the website, first you'll need to install the necessary dependencies for Docusaurus.

Clone this repo and 
```
git clone https://github.com/ml5js/ml5js.github.io.git
cd ml5js.github.io.git
cd website/
npm install
```

And then start the development server from inside the `website/` directory:

```
npm run start
```

This wil create a server that will reload whenever there are changes in the website source code.

To build the website run this script from the `website/` directory:

```bash
npm run build
```
