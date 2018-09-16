export type onNodeCallback = (node: Node) => void;

export const iterateNode = (rootNode: Node, onNode?: onNodeCallback) => {

    function iterate(node:Node) {
        onNode && onNode(node);

        let childNode = node.firstChild;

        while (childNode) {
            iterate(childNode);

            childNode = childNode.nextSibling;
        }
    }

    iterate(rootNode);
};