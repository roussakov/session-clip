export class NodeDeletionPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(node) {
    this.timeLine.addCallback(() => {
      this.virtualDom.removeNode(node.id)
    }, node.offset);
  }

}
