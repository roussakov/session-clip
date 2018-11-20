const sendPayloadToQueue = (channel, queue, payload) => {
    channel.assertQueue(queue, {durable: false});
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)))
};

module.exports = sendPayloadToQueue;