const siteConfig = {
  title: 'ML5.js',
  tagline: 'A high level javascript library for machine learning.',
  url: 'ml5js.github.io',
  baseUrl: '/',
  projectName: 'ml5js.github.io',
  headerLinks: [
    { doc: 'getting-started', label: 'API' },
    { doc: 'datasets', label: 'Datasets' },
    { doc: 'simple-image-classification-example', label: 'Examples' },
    { page: 'experiments', label: 'Experiments' },
    { doc: 'glossary-statistics', label: 'Learn' },
    { href: 'https://github.com/ml5js/ml5-library', label: 'Code' },
    { search: true },
  ],
  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: '',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#f7394f',
    secondaryColor: '#000000',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: '',
  organizationName: 'ml5js', // or set an env variable ORGANIZATION_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'solarized-dark',
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
};

module.exports = siteConfig;
