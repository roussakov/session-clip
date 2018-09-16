export class VirtualDomContainer {

  private dom = {};

  constructor(){}

  insertNode(id, parentId, node) {
    this.dom[id] = node;

    if(parentId) {
      this.dom[parentId].appendChild(node);
    }
  }

  getDOM() {
    return this.dom;
  }
}
