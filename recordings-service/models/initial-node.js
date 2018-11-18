const mongoose = require('mongoose');
const node = require("./node");

const Schema = mongoose.Schema;

const InitialNodeSchema = new Schema({
    sessionId: String,
    data: node.NodeSchema
});

module.exports = mongoose.model('InitialNode', InitialNodeSchema);