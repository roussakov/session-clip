import {NodeBuilderStrategy} from "./node-builder-strategy";

export class ElementNodeBuilderStrategy implements NodeBuilderStrategy {

  build(node): any {

    if(node.nodeName === "SCRIPT") {
      node.nodeName = "NOSCRIPT";
    }

    return document.createElement(node.nodeName);
  }

}
