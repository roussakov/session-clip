const InitialNodeModel = new require("./../models/initial-node");

const handleNodeInitialStateMessage = ({sessionId, data}) => (new InitialNodeModel({sessionId, data})).save();

module.exports = handleNodeInitialStateMessage;