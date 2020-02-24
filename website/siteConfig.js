const siteConfig = {
  title: 'Title' ,
  tagline: 'The tagline',
  url: '#' ,
  baseUrl: '/',
  projectName: 'Name of project',
  organizationName: 'Abhishek Anil Deshmukh',
  headerLinks: [
    {doc: 'intro-user', label: 'User Guide'},
    {doc: 'intro-dev', label: 'Developer Documentation'},
  ],

  headerIcon: 'img/logo.jpg',
  footerIcon: 'img/logo.jpg',
  favicon: 'img/logo.jpg',

  colors: {
    primaryColor: "#0587b3",
    secondaryColor: "#6fc1f0",
    tintColor: "#005068",
    backgroundColor: "#e9faff"
  },

  copyright: 'Copyright © ' + new Date().getFullYear() + 'Abhishek Anil Deshmukh',

  highlight: { theme: 'default' },

  markdownPlugins: [function(md) {
  }],

  scripts: ['https://buttons.github.io/buttons.js', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', '/js/mathjax-config.js'],

  stylesheets: ['https://fonts.googleapis.com/css?family=Gugi'],

  onPageNav: 'separate',
  blogSidebarCount: 'ALL',
};

module.exports = siteConfig;
