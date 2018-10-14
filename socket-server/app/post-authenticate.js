const sendPayloadToQueue = require("./helpers/send-payload-to-queue");

const postAuthenticate = (socket, data) => {
    socket.on("nodeInitialStateRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "nodeInitialStateRecords", record));
    socket.on("addedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "addedNodeRecords", record));
    socket.on("removedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "removedNodeRecords", record));
    socket.on("mutatedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mutatedNodeRecords", record));
    socket.on("viewPortResizeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "viewPortResizeRecords", record));
    socket.on("scrollRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "scrollRecords", record));
    socket.on("mouseMoveRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mouseMoveRecords", record));
    socket.on("mouseClickRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mouseClickRecords", record));
    socket.on("inputRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "inputRecords", record));
};

module.exports = postAuthenticate;