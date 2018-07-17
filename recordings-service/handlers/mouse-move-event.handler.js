const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleMouseMoveEvent = (record) => {
    const recordContainer = new RecordContainer("mouseMove", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleMouseMoveEvent;