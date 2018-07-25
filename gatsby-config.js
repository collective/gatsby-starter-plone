module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Plone',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'https://plonedemo.kitconcept.com/en',
        showLogs: true,
      },
    },
  ],
};
