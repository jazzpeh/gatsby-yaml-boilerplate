module.exports = {
  siteMetadata: {
    title: 'Gatsby Extended Starter',
    description: 'This extended starter ships with the main Gatsby configuration such as eslint, yaml, stylelint which you might need to kick start a good project.',
    author: '@jazzpeh',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-stylelint',
      options: {
        files: ['**/*.scss'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
        ignore: ['**/.*'],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
  ],
};
