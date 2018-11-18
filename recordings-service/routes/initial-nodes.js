const express = require('express');
const router = express.Router();
const InitialNode = new require("./../models/initial-node");

router.get('/:sessionId', function (req, res) {

    InitialNode.find({sessionId: req.params.sessionId})
        .sort({'data.id': 1})
        .then(nodes => nodes.map(node => ({
            id: node.data.id,
            nodeType: node.data.nodeType,
            nodeName: node.data.nodeName,
            attributes: node.data.attributes,
            parentId: node.data.parentId,
            prevSiblingId: node.data.prevSiblingId,
            value: node.data.value,
        })))
        .then(nodes => res.send(nodes));

});

module.exports = router;
