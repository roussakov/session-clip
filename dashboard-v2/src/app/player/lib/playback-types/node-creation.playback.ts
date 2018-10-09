export class NodeCreationPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {

      this.virtualDom.addNodes(mutation);

    }, mutation.offset);

  }

}
