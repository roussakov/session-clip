const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    type: { type : String, trim : true },
    sessionId: String,
    time: Number,
    sequenceNum: Number,
    data: { type : Schema.Types.Mixed}
});

module.exports = mongoose.model('Record', RecordSchema);