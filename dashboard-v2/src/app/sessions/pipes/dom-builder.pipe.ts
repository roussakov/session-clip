import { Pipe, PipeTransform } from '@angular/core';
import {InitialNodeRecord} from "../services/recordings.service";

@Pipe({
  name: 'domBuilder'
})
export class DomBuilderPipe implements PipeTransform {

  transform(nodes: InitialNodeRecord[]): any {

    const flatDom = {};

    nodes.forEach(node => {
      if(node.nodeType == 1) {
        flatDom[node.id] = document.createElement(node.nodeName);

        if(node.parentId) {
          flatDom[node.parentId].appendChild(flatDom[node.id]);
        }

      }
    });

    return flatDom;
  }

}
