const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleMouseClickEvent = (record) => {
    const recordContainer = new RecordContainer("mouseClick", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleMouseClickEvent;