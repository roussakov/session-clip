const sendPayloadToQueue = (amqpChannel, queue, payload) => {
    const ok = amqpChannel.assertQueue(queue, {durable: false});
    ok.then(() => amqpChannel.sendToQueue(queue, Buffer.from(JSON.stringify(payload))));
};

module.exports = sendPayloadToQueue;