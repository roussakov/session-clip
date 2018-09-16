const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NodeSchema = new Schema({
    id: Number,
    nodeType: Number,
    nodeName: String,
    attributes: [],
    parentId: Number,
    prevSiblingId: Number,
    value: String,
    time: Date
});

const NodeModel = mongoose.model('Node', NodeSchema);

module.exports = {
    NodeSchema, NodeModel
};
