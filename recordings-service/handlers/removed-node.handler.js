const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleRemovedNode = (record) => {
    const recordContainer = new RecordContainer("removedNode", record);
    const recordModel = new RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleRemovedNode;