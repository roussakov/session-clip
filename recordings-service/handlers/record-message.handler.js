const RecordModel = new require("./../models/record");

const handleRecordMessage = (record) => (new RecordModel(record)).save();

module.exports = handleRecordMessage;