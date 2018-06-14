const siteConfig = {
  title: 'ml5js',
  tagline: 'Friendly Machine Learning For The Web.',
  url: 'ml5js.org',
  baseUrl: '/',
  projectName: 'ml5js.github.io',
  organizationName: 'ml5js',
  headerLinks: [
    { doc: 'getting-started', label: 'Reference' },
    { doc: 'quick-start', label: 'Examples' },
    { doc: 'data-overview', label: 'Data' },
    { doc: 'data-overview', label: 'Training' },
    { page: 'experiments', label: 'Experiments' },
    { doc: 'glossary-machine-learning', label: 'Learn' },
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
    primaryColor: '#a255ff',
    secondaryColor: '#ffffff',
  },
  twitter: 'true',
  twitterUsername: 'ml5js',
  twitterImage: 'img/og.png',
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: '',

  highlight: {
    theme: 'atom-one-light',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    '/scripts/ml5.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/p5.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.16/addons/p5.dom.min.js',
  ],
  cleanUrl: true,
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',
  cname: 'ml5js.org',
  /* Open Graph and Twitter card images */
  ogImage: 'img/og.png',
  twitterImage: 'img/og.png',
  algolia: {
    apiKey: '4e9582fa59998b865a9fd98ae8d8a9cc',
    indexName: 'ml5js',
  },
  repoUrl: 'https://github.com/ml5js/ml5-library',
};

module.exports = siteConfig;
