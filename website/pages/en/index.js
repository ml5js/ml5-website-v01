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
      <div className="hero">
        <Flex1 style={{padding:"10% 0 0 5%;"}}>
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('getting-started.html', language)}>Getting Started</Button>
            <Button href={docUrl('simple-image-classification-example.html', language)}>Examples</Button>
          </PromoSection>
        </Flex1>
        <Flex1 style={{padding:" 1.5% 0 0 4%"}}>


        </Flex1>
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
        title: 'A wrapper around [deeplearn.js](https://deeplearnjs.org/)',
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
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <MarkdownBlock>The main idea of this project is to further reduce the barriers between lower level machine learning and creative coding in JavaScript. ml5 provides two main functionalities:</MarkdownBlock>
  </div>
);


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />

        <div className="mainContainer">
          <Why />
          <Features />

        </div>
      </div>
    );
  }
}

module.exports = Index;
