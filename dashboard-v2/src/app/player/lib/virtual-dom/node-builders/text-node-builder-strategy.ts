import {NodeBuilderStrategy} from "./node-builder-strategy";

export class TextNodeBuilderStrategy implements NodeBuilderStrategy {

  build(node): any {
    return document.createTextNode(node.value);
  }

}
