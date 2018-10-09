export class NodeMutationPlayback {

  constructor(private timeLine, private virtualDom) {
  }

  register(mutation) {
    this.timeLine.addCallback(() => {
      this.virtualDom.setAttributes(mutation.id, mutation.attributes);
    }, mutation.offset);
  }

}
