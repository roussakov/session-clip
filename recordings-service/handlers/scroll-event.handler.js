const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleScrollEvent = (record) => {
    const recordContainer = new RecordContainer("scroll", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleScrollEvent;