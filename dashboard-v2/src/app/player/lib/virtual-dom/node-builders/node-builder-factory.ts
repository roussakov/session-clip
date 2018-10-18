import {NodeBuilderStrategy} from "./node-builder-strategy";
import {ElementNodeBuilderStrategy} from "./element-node-builder-strategy";
import {TextNodeBuilderStrategy} from "./text-node-builder-strategy";
import {CommentNodeBuilderStrategy} from "./comment-node-builder-strategy";

export class NodeBuilderFactory {

  static build(node) {
    let builderStrategy: NodeBuilderStrategy;

    switch (node.nodeType) {
      case 1:
        builderStrategy = new ElementNodeBuilderStrategy;
        break;
      case 3:
        builderStrategy = new TextNodeBuilderStrategy;
        break;
      case 8:
        builderStrategy = new CommentNodeBuilderStrategy;
        break;
    }

    return builderStrategy.build(node);
  }

}
