export class InputPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      const node = this.virtualDom.findNode(mutation.data.id);
      node.value = mutation.data.value;
    }, mutation.offset);

  }

}
