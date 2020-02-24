/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
	<section className="sitemap">
	  <a href={this.props.config.baseUrl} className="nav-home">
	    {this.props.config.footerIcon && (
	      <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58"/>
	      )}
	    </a>
	    <div>
	      <h5>Community</h5>
	      <a href="#">Slack</a>
	      <a href="#">Twitter</a>
	      <a href="#">Facebook</a>
	      <a href="#">Discord</a>
	      <a href={this.props.config.baseUrl + 'contact-us.html'}>Contact Us</a>
	    </div>
	    <div>
	      <h5>Documentation Quick Links</h5>
	      <a href={this.docUrl('intro-dev.html')}>Developer Documentation</a>
	      <a href={this.docUrl('intro-user.html')}>User Guide</a>
	    </div>

	    <div>
	      <h5>Development</h5>
	      <a href="#">GitHub</a>
	      <a href="#">Issues</a>
	    </div>
	  </section>
	  <p style={{textAlign: 'center', color: '#e9faff'}}>This project sponsored by:<br/>
	    <a style={{textAlign: 'center', color: '#e9faff'}} href="#">Sponsor1</a><br/>
	    <a style={{textAlign: 'center', color: '#e9faff'}} href="#">Sponsor2</a><br/>
	  </p>
	</footer>
    );
  }
}

module.exports = Footer;
