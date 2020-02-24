const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
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
    <img src={props.img_src}/>
  </div>
);

const ProjectTitle = props => (
  <div>
    <h2 style={{fontFamily: 'Gugi'}} className="projectTitle">{siteConfig.title}</h2>
    <h2> {siteConfig.tagline}</h2>
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
      <SplashContainer>
	<div className="inner">
	  <ProjectTitle/>
	</div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const BlockNoPadding = props => (
  <Container
    padding={[]}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout}/>
  </Container>
);

const Features = props => (
  <div>
    <Block background="light" layout="threeColumn">
      {[
	{
	  content: 'Some description',
	  image: imgUrl('opqview-landing.png'),
	  imageAlign: 'top',
	  title: 'Some photo demonstration',
	  },
	{
	  content: 'Some description',
	  image: imgUrl('opqview-landing.png'),
	  imageAlign: 'top',
	  title: 'Some photo demonstration',
	  },
	{
	  content: 'Some description',
	  image: imgUrl('opqview-landing.png'),
	  imageAlign: 'top',
	  title: 'Some photo demonstration',
	  },
      ]}
    </Block>
  </div>
);

const OPQFeatures = props => (
  <div className="productShowcaseSection paddingBottom">
    <h2 style={{ fontWeight: "bold" }}>Features</h2>
    <BlockNoPadding layout="threeColumn">
      {[
	{
	  title: 'Feature 1',
	  content: 'Feature description or something',
	  },
	{
	  title: 'Feature 2',
	  content: 'Feature description or something',
	  },
	{
	  title: 'Feature 3',
	  content: 'Feature description or something',
	  },
	{
	  title: 'Feature 4',
	  content: 'Feature description or something',
	  },
	{
	  title: 'Feature 5',
	  content: 'Feature description or something',
	  },
	{
	  title: 'Feature 6',
	  content: 'Feature description or something',
	  },
      ]}
    </BlockNoPadding>
  </div>
);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <div>
	<HomeSplash language={language}/>
	<div className="mainContainer">
	  <Features/>
	  <OPQFeatures/>
	</div>
      </div>
    );
  }
}

module.exports = Index;
