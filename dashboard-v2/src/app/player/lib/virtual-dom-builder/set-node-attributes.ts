export const setNodeAttributes = (node, attributes) => {
  attributes.forEach(attr => {
    try {
      node.setAttribute(attr.name, attr.value);
    } catch (e) {
      //todo: need to abstract logs
      console.log("Unable to set attribute", e);
    }
  });
};
