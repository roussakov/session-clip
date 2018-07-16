const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    userId: { type : String, trim : true },
    createdAt  : { type : Date, default : Date.now }
});

module.exports = mongoose.model('Session', SessionSchema);