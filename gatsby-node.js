/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const component = path.resolve('src/components/layout.js');

  return graphql(`
    {
      allPagesYaml {
        edges {
          node {
            path
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) return Promise.reject(result.errors);

    return result.data.allPagesYaml.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
