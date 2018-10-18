import {NodeBuilderFactory} from "./node-builders/node-builder-factory";

export const createNodes = (nodes, onNodeCreated) => {

  nodes.forEach(node => {
    const inMemoryNode = NodeBuilderFactory.build(node);

    if (node.attributes && node.attributes.length > 0) {
      setAttributes(inMemoryNode, node.attributes);
    }

    onNodeCreated(node.id, node.parentId, inMemoryNode);
  });

};

export const setAttributes = (node, attributes) => {
  attributes.forEach(attr => {
    try {
      node.setAttribute(attr.name, attr.value);
    } catch (e) {
      //todo: need to abstract logs
      console.log("Unable to set attribute", e);
    }
  });
};

