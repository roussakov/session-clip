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

const handleAddedNode = require("./handlers/added-node.handler");
const handleRemovedNode = require("./handlers/removed-node.handler");
const handleMutatedNode = require("./handlers/mutated-node.handler");
const handleMouseClickEvent = require("./handlers/mouse-click-event.handler");
const handleMouseMoveEvent = require("./handlers/mouse-move-event.handler");
const handleScrollEvent = require("./handlers/scroll-event.handler");
const handleViewPortResizeEvent = require("./handlers/view-port-resize-event.handler");
const handleNodeInitialState = require("./handlers/node-initial-state.handler");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/recordings', recordingsRouter);
app.use('/api/initial-nodes', initialNodes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

connect();

function connect () {
    const options = {
        poolSize: 2,
        promiseLibrary: global.Promise,
        useNewUrlParser: true
    };
    return mongoose.connect(devConfig.db, options).connection;
}


amqp.connect('amqp://rabbitmq', (err, conn) => {
   conn.createChannel((err, ch) => {
       consumeFromQueue(ch, "nodeInitialStateRecords", handleNodeInitialState);
       consumeFromQueue(ch, "addedNodeRecords", handleAddedNode);
       consumeFromQueue(ch, "removedNodeRecords", handleRemovedNode);
       consumeFromQueue(ch, "mutatedNodeRecords", handleMutatedNode);
       consumeFromQueue(ch, "mouseClickRecords", handleMouseClickEvent);
       consumeFromQueue(ch, "scrollRecords", handleScrollEvent);
       consumeFromQueue(ch, "mouseMoveRecords", handleMouseMoveEvent);
       consumeFromQueue(ch, "viewPortResizeRecords", handleViewPortResizeEvent);
   })
});


function consumeFromQueue(channel, queue, handler) {
    channel.assertQueue(queue, {durable: false});
    channel.consume(queue, (msg) => {
        handler(JSON.parse(msg.content.toString()))
    }, {noAck:true})
}

module.exports = app;
