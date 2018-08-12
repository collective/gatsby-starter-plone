module.exports = {
  siteMetadata: {
    title: 'Kickstart Gatsby static site development with Plone',
    subTitle: 'Plone + Gatsby = \u2764',
  },
  pathPrefix: '/',
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Starter Plone',
        short_name: 'Plone',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#007eb6',
        display: 'standalone',
        icon: 'src/images/icon.png',
    },
  },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
