/*
Home Page
*/

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + '/siteConfig.js');
const Highlight = require('react-highlight');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}



Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    <small>{siteConfig.tagline}</small>
  </h2>
);

const Flex1 = props => (
  <div style={props.style} className="flexDiv">
  {props.children}
  </div>
);


const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div className="hero bluelight">

      </div>
    );
  }
}

class Why extends React.Component {
  render() {
    return (
      <div className="flex exampleBlock ">
        <div className="f1 p5 subtitle getStartedSection">
          <h1> 🎉 💻 Friendly Machine Learning for the Web. </h1>
          <p className="mt40">
            ml5 aims to make machine learning accessible to a broad audience of artists,
            creative coders, and students. Using <code>TensorFlow.js</code> as a foundation,ml5.js
            provides access to machine learning algorithms and models in the browser
            with no other external dependencies.
          </p>
          <p className="mt40">
            The library is supported by code examples, tutorials, and sample datasets with an emphasis on ethics.
            Bias in data, stereotypical harms, and responsible crowdsourcing are part of the documentation
            around data collection.
           </p>
          <button className="btn-blue mt40"href="#"> Get Started </button>
        </div>
        <div className="f1 p5 p30 center dropExample">
          <img className="w60 bird" src="/img/bird_blue.png" />

          <p className="mt40"> This is a bird blabla </p>
        </div>
      </div>
    );
  }
}

class Code extends React.Component {
  render() {
    return (
      <div className="codeContainer">
        <h1 className="center">
          Simple classification with a pre-trained model:
        </h1>
        <div className="codeBox">
          <div className="codeExample">
            <p className="code bold">
              // Create the classifier
            </p>
            <p className="code mb20">
            const classifier = new ml5.ImageClassifier('MobileNet');
            </p>
            <p className="code bold">
            // Make a prediction
            </p>
            <p className="code mb20">
            let prediction = classifier.predict(img, gotResults);
            </p>
            <p className="code">
            function gotResults(results) &#123;
            </p>
            <p className="code">
            &nbsp;&nbsp;console.log(results);
            </p>
            <p className="code mb20">
            &#125;
            </p>
          </div>
        </div>

      </div>
    );
  }
}

class Texts extends React.Component {
  render() {
    return (
      <div className="flex texts ">
        <div className="f1 p5 subtitle br ">
          <h1 className='mb40'>A Wrapper Around TensorFlow.js</h1>
          <p className="description">
            ml5 is a friendly high level interface to TensorFlow.js that handles
            the GPU accelerated mathematical operations and memory management
            required for machine learning algorithms.
          </p>

        </div>
        <div className="f1 p5 subtitle">
          <h1 className='mb40'>Models and Training</h1>
          <p className="description mb40">
          ml5 provides immediate access to pre-trained models for detecting human poses, generating text,
          styling an image with another, composing music, pitch detection, and common English language word
          relationships. </p>
          <p className="description" >
            In addition ml5 provides an API for training new models based on pre-trained ones
          and with custom user data from scratch.
          </p>
        </div>
      </div>
    );
  }
}


class Examples extends React.Component {
  render() {
    return (
      <div className="ExamplesLinkBlock p5">
        <button className="btn-blue mt40"href="#"> 🌟 See Examples 🌟 </button>

      </div>
    );
  }
}



const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    className='homeBlock'
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Providing a simple and friendly interface to work with GPU accelerated machine learning in JavaScript.',
        imageAlign: 'top',
        title: 'A wrapper around [Tensorflow.js](https://js.tensorflow.org/)',
      },
      {
        content: 'A set of ready-to-use machine learning utilities.',
        imageAlign: 'top',
        title: 'Custom methods',
      },
    ]}
  </Block>
);





class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
         <Why  />
         <Code />
         <Texts  />
         <Examples  />
      </div>
    );
  }
}

module.exports = Index;
