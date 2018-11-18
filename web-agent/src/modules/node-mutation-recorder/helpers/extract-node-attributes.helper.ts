import {NodeDataAttributes} from "../models/node.data";

export const extractNodeAttributes = (attributes: NamedNodeMap): NodeDataAttributes[] => {
    return attributes ? Array.from(attributes)
        .map((attr: Attr) => ({name: attr.nodeName, value: attr.nodeValue})) : []
};
