import {createNodes} from "./utils";

export class VirtualDOM {

  private vDOM = {};

  insertNode(nodeId, parentNodeId, node) {
    this.vDOM[nodeId] = node;

    if(parentNodeId) {
      this.vDOM[parentNodeId].appendChild(node);
    }
  }

  findNode(nodeId) {
    return this.vDOM[nodeId];
  }

  removeNode(nodeId) {
    this.vDOM[nodeId].remove()
  }

  setNodeAttributes(nodeId, attributes) {
    attributes.forEach(attr => {
      this.vDOM[nodeId].setAttribute(attr.name, attr.value);
    });
  }

  setBaseURL(url) {
    const rootEl = this.getRootNode();
    const baseEl = document.createElement("base");
    baseEl.href = url;

    const vDOMBaseElement = rootEl.querySelector("base");
    vDOMBaseElement ? vDOMBaseElement.replaceWith(baseEl) : rootEl.appendChild(baseEl);
  }

  public getRootNode() {
    return this.vDOM[1];
  }
}

export const createVirtualDOM = (serializedDOM, baseUrl: string) => {
  const virtualDOM = new VirtualDOM();

  //convert from serialized nodes to virtual dom nodes
  createNodes(serializedDOM, (id, parentId, node) => virtualDOM.insertNode(id, parentId, node));

  virtualDOM.setBaseURL(baseUrl);

  return virtualDOM;
};
