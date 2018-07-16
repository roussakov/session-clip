const axios = require('axios');
const amqp = require('amqplib');
const amqpConnection = amqp.connect('amqp://rabbitmq');

const authenticate = (socket, data, callback) => {
    const amqpChannel = amqpConnection.then((conn) => conn.createChannel());
    const createSessionRequest = axios.post('http://session-service:3000/session', {"userId":"123"});

    Promise.all([createSessionRequest, amqpChannel]).then((data) => {
        socket.amqpChannel = data[1];
        callback(null, data[0].data)
    })
};

module.exports = authenticate;