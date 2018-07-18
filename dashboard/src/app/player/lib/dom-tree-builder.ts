export default function build(tree, onNodeReady) {
	return _buildRecursive(null, tree, onNodeReady);
}

function _buildRecursive(parent, tree, onNodeReady) {
	let node;

	if (tree.nodeName === "#comment") {
		return;
	}

	if (tree.nodeType === 3) {
		node = document.createTextNode(tree.nodeValue);
	} else {
		node = document.createElement(tree.nodeName === "SCRIPT" ? "NOSCRIPT" : tree.nodeName)
	}

	tree.attr.map(attr => node.setAttribute(attr.name, attr.value));

  onNodeReady({id:tree._id, node: node});

	if (parent) {
		parent.appendChild(node);
	}

	let i = 0;

	if (tree.childNodes.length > 0 && tree.nodeType !== 3) {

		let child = tree.childNodes[ i ];

		while (child) {
			_buildRecursive(node, child, onNodeReady);
			i++;
			child = tree.childNodes[ i ];
		}
	}

	return node;
}
