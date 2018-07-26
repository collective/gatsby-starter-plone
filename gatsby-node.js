/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allPloneFolder {
        edges {
          node {
            _path
          }
        }
      }
    }
  `);
  result.data.allPloneFolder.edges.forEach(({ node }) => {
    createPage({
      path: node._path,
      component: path.resolve('./src/templates/default.js'),
    });
  });
};
