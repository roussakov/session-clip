const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleInnerScrollEvent = (record) => {
    const recordContainer = new RecordContainer("innerScroll", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleInnerScrollEvent;