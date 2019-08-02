/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const component = require.resolve('./src/components/layout/layout.js');

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
      const { path } = node;

      createPage({
        path,
        component,
        context: { path },
      });
    });
  });
};
