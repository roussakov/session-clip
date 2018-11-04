import {RecordType} from "../models/record-type";
import {getUUID, SessionClipNode} from "../../../common/modules/node-mutator/node-mutator";
import {AddedNode} from "../models/added-node";
import {extractAttributes} from "./extract-attributes.helper";
import {getSequenceNumber} from "../../../common/modules/sequence-incrementor/sequence-incrementor.service";

export const createAddedNode = (id:number, node:Node):AddedNode => {
    const {nodeType, nodeName} = node;

    const addedNode:AddedNode = {
        id,
        nodeType,
        nodeName,
        type:RecordType.addedNode,
        time: (new Date).getTime(),
        sequenceNum: getSequenceNumber()
    };

    if((node instanceof Element)) {
        addedNode.attributes = extractAttributes(node.attributes)
    }

    if(node.nodeValue) {
        addedNode.value = node.nodeValue;
    }

    if(node.parentNode) {
        addedNode.parentId = getUUID(<SessionClipNode>node.parentNode);
    }

    if(node.previousSibling) {
        addedNode.prevSiblingId = getUUID(<SessionClipNode>node.previousSibling);
    }

    return addedNode;
};