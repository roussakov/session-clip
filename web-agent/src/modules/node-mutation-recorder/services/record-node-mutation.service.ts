import {MutatedNode} from "../models/mutated-node";
import {AddedNode} from "../models/added-node";
import {RemovedNode} from "../models/removed-node";
import {extractAttributes} from "../helpers/extract-attributes.helper";
import {getUUID, SessionClipNode} from "../../../common/modules/node-mutator/node-mutator";
import {RecordType} from "../models/record-type";

export class RecordNodeMutationService {

    private nodes:Array<any> = [];

    addNode(id:number, node:Node) {
        const {nodeType, nodeName} = node;

        const addedNode:AddedNode = {
            id,
            nodeType,
            nodeName,
            type:RecordType.addedNode,
            time: (new Date).toString()
        };

        if((node instanceof Element)) {
            addedNode.attributes = extractAttributes(node.attributes)
        }

        if(node.parentNode) {
            addedNode.parentId = getUUID(<SessionClipNode>node.parentNode);
        }

        if(node.previousSibling) {
            addedNode.prevSiblingId = getUUID(<SessionClipNode>node.previousSibling);
        }

        this.nodes.push(addedNode);
    }

    removeNode(id:number) {
        const node:RemovedNode = {id, type:RecordType.removedNode, time: (new Date).toString()};

        this.nodes.push(node);
    }

    mutateNode(id:number, node:Node) {
        const element = <Element>node;
        const mutatedNode:MutatedNode = {
            id,
            attributes: extractAttributes(element.attributes),
            type: RecordType.mutatedNode,
            time: (new Date).toString()
        };

        this.nodes.push(mutatedNode);
    }
}