import {createNodes} from "../virtual-dom/utils";

export class NodeCreationPlayback {

  constructor(private timeLine, private virtualDOM) {
  }

  register(node) {
    this.timeLine.addCallback(() => {

      createNodes(
        [node],
        (id, parentId, node) => this.virtualDOM.insertNode(id, parentId, node)
      );

    }, node.offset);

  }

}
