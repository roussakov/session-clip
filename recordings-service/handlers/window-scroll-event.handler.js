const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleWindowScrollEvent = (record) => {
    const recordContainer = new RecordContainer("windowScroll", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleWindowScrollEvent;