const RecordContainer = require("./record-container");
const RecordModel = new require("./../models/record");

const handleMutatedNode = (record) => {
    const recordContainer = new RecordContainer("mutatedNode", record);
    const recordModel = new  RecordModel(recordContainer);
    recordModel.save();
};

module.exports = handleMutatedNode;