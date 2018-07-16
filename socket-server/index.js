const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');
const amqp = require('amqplib');

const amqpConnection = amqp.connect('amqp://rabbitmq');

function authenticate(socket, data, callback) {
    const amqpChannel = amqpConnection.then((conn) => conn.createChannel());
    const createSessionRequest = axios.post('http://session-service:3000/session', {"userId":"123"});

    Promise.all([createSessionRequest, amqpChannel]).then((data) => {
        socket.amqpChannel = data[1];
        callback(null, data[0].data)
    })
}

function postAuthenticate(socket, data) {
    socket.on("addedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "addedNodeRecords", record));
    socket.on("removedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "removedNodeRecords", record));
    socket.on("mutatedNodeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mutatedNodeRecords", record));
    socket.on("viewPortResizeRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "viewPortResizeRecords", record));
    socket.on("scrollRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "scrollRecords", record));
    socket.on("mouseMoveRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mouseMoveRecords", record));
    socket.on("mouseClickRecord", (record) => sendPayloadToQueue(socket.amqpChannel, "mouseClickRecords", record));
}

function sendPayloadToQueue(amqpChannel, queue, payload) {
    const ok = amqpChannel.assertQueue(queue, {durable: false});
    ok.then(() => amqpChannel.sendToQueue(queue, Buffer.from(JSON.stringify(payload))));
}

function disconnect(socket) {
    console.log(socket.id + ' disconnected');
}

require('socketio-auth')(io, {
    authenticate: authenticate,
    postAuthenticate: postAuthenticate,
    disconnect: disconnect,
    timeout: 50000
});

http.listen(3000, () => console.log('listening on *:3000'));