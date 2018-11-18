const express = require('express');
const router = express.Router();
const Record = require('./../models/record');

router.get('/:sessionId', function (req, res) {

    Record.find({"sessionId": req.params.sessionId})
        .sort({"sequenceNum": 1})
        .then(recordings => recordings.map(record => ({
            type: record.type,
            data: record.data,
            sequenceNum: record.sequenceNum,
            time: record.time
        })))
        .then(nodes => res.send(nodes));
});

module.exports = router;
