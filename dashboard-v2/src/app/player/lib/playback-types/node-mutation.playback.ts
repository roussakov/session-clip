export class NodeMutationPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(node) {
    this.timeLine.addCallback(() => {
      this.virtualDom.setNodeAttributes(node.data.id, node.data.attributes);
    }, node.offset);
  }

}
