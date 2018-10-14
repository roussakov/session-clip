import {NodeBuilderFactory} from "./builders/node-builder-factory";
import {setNodeAttributes} from "./set-node-attributes";
import {VirtualDomContainer} from "./virtual-dom-container";

//todo: refactor, split classes Builder, VirtualDom
class VirtualDomBuilder {

  private virtualDOMContainer = new VirtualDomContainer();

  constructor(nodes) {
    this.buildNodes(nodes);
  }

  private buildNodes = (nodes) => {
    nodes.forEach(node => {
      const inMemoryNode = NodeBuilderFactory.build(node);

      if (node.attributes && node.attributes.length > 0) {
        setNodeAttributes(inMemoryNode, node.attributes);
      }

      this.virtualDOMContainer.insertNode(node.id, node.parentId, inMemoryNode);
    });
  };

  getRoot() {
    return this.virtualDOMContainer.getDOM()[1];
  }

  setAttributes(id, attributes) {
    attributes.forEach(attr => {
      this.virtualDOMContainer.getDOM()[id].setAttribute(attr.name, attr.value);
    });
  }

  addNodes(nodes) {
    this.buildNodes([nodes]);
  }

  removeNode(id) {
    this.virtualDOMContainer.getDOM()[id].remove();
  }

  findNode(id) {
    return this.virtualDOMContainer.getDOM()[id];
  }
}

export const buildVirtualDOM = (DOMMetaData) => new VirtualDomBuilder(DOMMetaData);
