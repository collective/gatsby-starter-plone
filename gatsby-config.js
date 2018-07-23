module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter Plone',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'http://localhost:8080/Plone/',
        showLogs: true,
      },
    },
  ],
};
