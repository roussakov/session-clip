const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleViewPortResizeEvent = (record) => {
    const recordContainer = new RecordContainer("viewPortResize", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleViewPortResizeEvent;