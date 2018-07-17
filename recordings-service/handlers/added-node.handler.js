const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleAddedNode = (record) => {
    const recordContainer = new RecordContainer("addedNode", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleAddedNode;