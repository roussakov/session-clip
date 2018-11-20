const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const amqp = require('amqplib/callback_api');

const devConfig = require('./config/development');

const recordingsRouter = require('./routes/recordings');
const initialNodes = require('./routes/initial-nodes');
const app = express();

const handleNodeInitialStateMessage = require("./handlers/node-initial-state-message.handler");
const handleRecordMessage = require("./handlers/record-message.handler");


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/recordings', recordingsRouter);
app.use('/api/initial-nodes', initialNodes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send('error');
});

connect();

function connect() {
    const options = {
        poolSize: 2,
        promiseLibrary: global.Promise,
        useNewUrlParser: true
    };
    return mongoose.connect(devConfig.db, options).connection;
}

//todo: This is a quick and dirty solution, required to implement in fault tolerance fashion
//using exponential backoffs and other best practices
const amqpConnect = (url) => {

    return new Promise((resolve, reject) => {

        tryToConnect();

        function tryToConnect() {
            console.log("RECORDINGS-SERVICE trying to establish connection with AMQP");
            amqp.connect(url, connectionStrategy);
        }

        function connectionStrategy(err, conn) {
            if (err) {
                console.log("RECORDINGS-SERVICE failed to establish connection with AMQP, retry in 3 sec");
                setTimeout(tryToConnect, 3000);
                return
            }

            console.log("RECORDINGS-SERVICE successfully connected to AMQP");
            resolve(conn);
        }

    });
};

amqpConnect("amqp://rabbitmq").then(conn => {

    conn.createChannel((err, ch) => {

        consumeFromQueue(ch, "nodeInitialStateRecords", handleNodeInitialStateMessage);

        [
            "addedNodeRecords",
            "removedNodeRecords",
            "mutatedNodeRecords",
            "mouseClickRecords",
            "innerScrollRecords",
            "innerWindowRecords",
            "mouseMoveRecords",
            "viewPortResizeRecords",
            "inputRecords"

        ].forEach(queue => consumeFromQueue(ch, queue, handleRecordMessage))
    })
});


function consumeFromQueue(channel, queue, handler) {
    channel.assertQueue(queue, {durable: false});
    channel.consume(queue, (msg) => {
        handler(JSON.parse(msg.content.toString()))
    }, {noAck: true})
}

module.exports = app;
