import {NodeBuilderStrategy} from "./node-builder-strategy";

export class CommentNodeBuilderStrategy implements NodeBuilderStrategy {

  build(node): any {
    return document.createComment(node.nodeName);
  }

}

