export class InputPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      const node = this.virtualDom.findNode(mutation.id);
      node.value = mutation.value;
    }, mutation.offset);

  }

}
