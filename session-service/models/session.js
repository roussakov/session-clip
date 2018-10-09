const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    userId: {type: String, trim: true},
    createdAt: {type: Date, default: Date.now},
    userInfo: {type: Schema.Types.Mixed, default: null},
    platform: {type: Schema.Types.Mixed, default: null}
});

module.exports = mongoose.model('Session', SessionSchema);