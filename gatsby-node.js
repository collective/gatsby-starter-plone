/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs');
const path = require('path');

const PLONE_SCHEMA = 'plone-typedefs.graphql';

exports.createSchemaCustomization = ({ actions }) => {
  if (fs.existsSync(PLONE_SCHEMA)) {
    actions.createTypes(fs.readFileSync(PLONE_SCHEMA, { encoding: 'utf-8' }));
  } else {
    actions.printTypeDefinitions({
      path: PLONE_SCHEMA,
      include: { plugins: ['gatsby-source-plone'] },
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allPloneDocument {
        edges {
          node {
            _path
          }
        }
      }
      allPloneEvent {
        edges {
          node {
            _path
          }
        }
      }
      allPloneFolder {
        edges {
          node {
            _path
          }
        }
      }
      allPloneCollection {
        edges {
          node {
            _path
          }
        }
      }
      allPloneNewsItem {
        edges {
          node {
            _path
          }
        }
      }
    }
  `);
  []
    .concat(
      result.data.allPloneDocument.edges,
      result.data.allPloneEvent.edges,
      result.data.allPloneFolder.edges,
      result.data.allPloneCollection.edges,
      result.data.allPloneNewsItem.edges
    )
    .forEach(({ node }) => {
      createPage({
        path: node._path,
        component: path.resolve('./src/templates/default.js'),
      });
    });
};
