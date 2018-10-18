export class NodeMutationPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(node) {
    this.timeLine.addCallback(() => {
      this.virtualDom.setNodeAttributes(node.id, node.attributes);
    }, node.offset);
  }

}
