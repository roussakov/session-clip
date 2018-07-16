const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const amqp = require('amqplib/callback_api');

const devConfig = require('./config/development');

const sessionRouter = require('./routes/session');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/session', sessionRouter);

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
  res.render('error');
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

//test
amqp.connect('amqp://rabbitmq', (err, conn) => {
   conn.createChannel((err, ch) => {
       const q = "records";

       ch.assertQueue(q, {durable: false});
       ch.consume(q, (msg) => {

           console.log(JSON.parse(msg.content.toString()))

       }, {noAck:true})
   })
});




module.exports = app;
