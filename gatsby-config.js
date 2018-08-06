module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Plone',
    subTitle: 'Kickstart Gatsby static site development with Plone',
  },
  pathPrefix: '',
  plugins: [
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'https://plonedemo.kitconcept.com/en',
        logLevel: 'DEBUG',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
