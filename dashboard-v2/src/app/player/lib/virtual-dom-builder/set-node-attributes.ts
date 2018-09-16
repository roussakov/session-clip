export const setNodeAttributes = (node, attributes) => {
  attributes.map(attr => node.setAttribute(attr.name, attr.value));
};
