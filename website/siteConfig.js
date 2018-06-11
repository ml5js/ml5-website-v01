const siteConfig = {
  title: 'ml5js',
  tagline: 'Friendly Machine Learning For The Web.',
  url: 'ml5js.org',
  baseUrl: '/',
  projectName: 'ml5js.org',
  headerLinks: [
    { doc: 'getting-started', label: 'API' },
    { doc: 'quick-start', label: 'Examples' },
    { doc: 'datasets', label: 'Datasets' },
    { page: 'experiments', label: 'Experiments' },
    { doc: 'glossary-statistics', label: 'Learn' },
    { href: 'https://github.com/ml5js', label: 'Code' },
    { search: true },
  ],
  /* path to images for header/footer */
  headerIcon: 'img/ml5.png',
  disableHeaderTitle: true,
  footerIcon: '',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#071682',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: '',
  organizationName: 'ml5js', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-light',
  },
  scripts: [
    '/scripts/ml5.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/addons/p5.dom.min.js',
  ],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/ITPNYU/ml5',
  algolia: {
    apiKey: '4e9582fa59998b865a9fd98ae8d8a9cc',
    indexName: 'ml5js',
  },
  ogImage: 'img/og.jpg'
};

module.exports = siteConfig;
