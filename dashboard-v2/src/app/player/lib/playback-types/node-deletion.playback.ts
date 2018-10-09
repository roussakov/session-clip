export class NodeDeletionPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.virtualDom.removeNode(mutation.id)
    }, mutation.offset);
  }

}
