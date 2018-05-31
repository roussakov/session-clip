export const extractAttributes = (nodeAttributes:NamedNodeMap): any[] => {
    return nodeAttributes ? Array.from(nodeAttributes).map((attr:any) => ({name:attr.nodeName, value: attr.nodeValue})) : []
};
