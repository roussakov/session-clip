import {getUUID, SessionClipNode} from "../../../common/modules/node-mutator/node-mutator";
import {NodeData} from "../models/node.data";
import {extractNodeAttributes} from "./extract-node-attributes.helper";

export const createNodeData = (id: number, node: Node): NodeData => {

    const {
        nodeType,
        nodeName,
        nodeValue,
        parentNode,
        previousSibling,
        attributes
    } = node;

    const nodeData: NodeData = {id, nodeType, nodeName};

    if (attributes) {
        nodeData.attributes = extractNodeAttributes(attributes)
    }

    if (nodeValue) {
        nodeData.value = nodeValue;
    }

    if (parentNode) {
        nodeData.parentId = getUUID(<SessionClipNode>parentNode);
    }

    if (previousSibling) {
        nodeData.prevSiblingId = getUUID(<SessionClipNode>previousSibling);
    }

    return nodeData;
};