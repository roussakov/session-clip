const express = require('express');
const router = express.Router();
const InitialNode = new require("./../models/initial-node");

router.get('/:sessionId', function (req, res) {

    InitialNode.find({sessionId: req.params.sessionId})
        .sort({'node.id': 1})
        .then(nodes => nodes.map(node => ({
            id: node.node.id,
            nodeType: node.node.nodeType,
            nodeName: node.node.nodeName,
            attributes: node.node.attributes,
            parentId: node.node.parentId,
            prevSiblingId: node.node.prevSiblingId,
            time: node.node.time
        })))
        .then(nodes => res.send(nodes));

});

module.exports = router;
