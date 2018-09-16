const axios = require('axios');
const amqp = require('amqplib');
const amqpConnection = amqp.connect('amqp://rabbitmq');

const authenticate = (socket, data, callback) => {
    const amqpChannel = amqpConnection.then((conn) => conn.createChannel());

    const payload = Object.assign({}, {"userId":"123"}, data);

    const createSessionRequest = axios.post('http://session-service:3000/api/session', payload);

    Promise.all([createSessionRequest, amqpChannel]).then((data) => {
        socket.amqpChannel = data[1];
        callback(null, data[0].data)
    })
};

module.exports = authenticate;