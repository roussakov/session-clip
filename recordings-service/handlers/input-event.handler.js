const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleInputEvent = (record) => {
    const recordContainer = new RecordContainer("input", record);
    const recordModel = new RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleInputEvent;