module.exports = {
  siteMetadata: {
    title: 'Kickstart Gatsby static site development with Plone',
    subTitle: 'Plone + Gatsby = \u2764',
  },
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
