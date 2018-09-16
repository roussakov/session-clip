import {NodeBuilderFactory} from "./builders/node-builder-factory";
import {setNodeAttributes} from "./set-node-attributes";
import {VirtualDomContainer} from "./virtual-dom-container";

class VirtualDomBuilder {

  private virtualDOMContainer = new VirtualDomContainer();

  constructor(nodes) {
    nodes.forEach(node => {
      const inMemoryNode = NodeBuilderFactory.build(node);

      if (node.attributes.length > 0) {
        setNodeAttributes(inMemoryNode, node.attributes);
      }

      this.virtualDOMContainer.insertNode(node.id, node.parentId, inMemoryNode);
    });
  }

  getRoot() {
    return this.virtualDOMContainer.getDOM()[1];
  }
}


export const buildVirtualDOM = (DOMMetaData) => new VirtualDomBuilder(DOMMetaData);
