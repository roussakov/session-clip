const axios = require('axios');
const amqp = require('amqplib/callback_api');


//todo: This is a quick and dirty solution, required to implement in fault tolerance fashion
//using exponential backoffs and other best practices
const amqpConnect = (url) => {

    return new Promise((resolve, reject) => {

        tryToConnect();

        function tryToConnect() {
            console.log("SOCKET-SERVER trying to establish connection with AMQP");
            amqp.connect(url, connectionStrategy);
        }

        function connectionStrategy(err, conn) {
            if (err) {
                console.log("SOCKET-SERVER failed to establish connection with AMQP, retry in 3 sec");
                setTimeout(tryToConnect, 3000);
                return
            }

            console.log("SOCKET-SERVER successfully connected to AMQP");
            resolve(conn);
        }

    });
};

const amqpConnection = amqpConnect("amqp://rabbitmq");

const authenticate = (socket, data, callback) => {
    const amqpChannel = amqpConnection.then((conn) => conn.createChannel());

    const payload = Object.assign({}, {"userId": "123"}, data);

    const createSessionRequest = axios.post('http://session-service:3000/api/session', payload);

    Promise.all([createSessionRequest, amqpChannel]).then((data) => {
        socket.amqpChannel = data[1];
        callback(null, data[0].data)
    })
};

module.exports = authenticate;