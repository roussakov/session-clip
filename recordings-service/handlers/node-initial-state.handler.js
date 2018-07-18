const InitialNodeModel = new require("./../models/initial-node");
const InitialNodeContainer = require("./initial-node");

const handleNodeInitialState = (node) => {
    const initialNodeContainer = new InitialNodeContainer(node.sessionId, node);
    const initialNodeModel = new InitialNodeModel(initialNodeContainer);

    initialNodeModel.save();
};

module.exports = handleNodeInitialState;