/*
Home Page
*/

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(process.cwd() + '/siteConfig.js');

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

const Why = props => (
  <div className="flex example ">
    <div className="f1 p5 subtitle getStartedSection"> 
      <h1> Friendly Machine Learning For The Web. </h1>
      <p className="mt40">The main idea of this project is to further reduce the barriers between lower level machine learning and creative outputs using JavaScript</p>
      <p className="mt40">
The main idea of this project is to further reduce the barriers between lower level machine learning and creative outputs using JavaScript      </p>
      <button className="btn-blue mt40"href="#"> Get Started </button> 
    </div>
    <div className="f1 p5 p30 center dropExample"> 
    <img className="w60" src="/img/bird_blue.png" /> 
    <p className="mt40"> This is a bird blabla </p>
    </div>

  </div>
);

const Texts = props => (
  <div className="flex texts ">
    <div className="f1 p5 subtitle br "> 
      <h1 className='mb40'>A wrapper around Tensorflow.js</h1>
      <p>
        Providing a simple and friendly interface to work with GPU accelerated machine learning in JavaScript.      
      </p>  
  
    </div>
    <div className="f1 p5 subtitle"> 
      <h1 className='mb40'>Custom methods</h1>
      <p>
        A set of ready-to-use machine learning utilities. 
        A set of ready-to-use machine learning utilities. Can we add more text in this parragraph?A set of ready-to-use machine learning utilities. Can we add more text in this parragraph?
      </p>  
    </div>

  </div>
);


const Code = props => (
  <div className="codeContainer">
    <h1 className="center">
      Easy as: 
    </h1>
    <div className="codeBox">
      <div className="codeExample"> 
        <p>
        // Create the classifier 

        // Make a prediction
    
        </p>
      </div>
    </div>

  </div>
);

const Examples = props => (
  <div className="ExamplesLinkBlock p5">
  <a href="#" > See the examples ⟶</a>

  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash  />

        <div className="mainContainer">
          <Why />
          <Code />
          <Texts />
          <Examples />
        </div>
      </div>
    );
  }
}

module.exports = Index;
