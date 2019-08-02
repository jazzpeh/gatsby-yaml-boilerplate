/**
 * Returns selected yaml Graphql node data
 * @param {any} data The Graphql query
 * @param {String} path The intended target path for the node data
 * @returns {Object} The returned useful yaml Graphql data
 */
export const getYamlNodeData = (data, path = '') => {
  if (!data) return {};

  const { allPagesYaml } = data;
  if (!allPagesYaml) return {};

  const { edges } = allPagesYaml;
  if (!edges) return {};
  if (edges.length <= 0) return {};

  const { node } = path ? edges.find(e => e.node && e.node.path === path) : edges[0];
  if (!node) return {};

  return node;
};

/**
 * Returns selected yaml Graphql section data
 * @param {any} data The Graphql query
 * @param {String} path The intended target path for the section data
 * @param {String} type The intended target type for the section data
 * @returns {Object} The returned useful yaml Graphql data
 */
export const getYamlSectionData = (data, path, type) => {
  const node = getYamlNodeData(data, path);
  if (!node) return {};

  const { sections } = node;
  if (!sections) return {};
  if (sections.length <= 0) return {};

  const section = sections.find(s => s.type === type);

  if (!section) return {};
  if (!section.data) return {};

  return section.data;
};
