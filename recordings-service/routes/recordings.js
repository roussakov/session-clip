const express = require('express');
const router = express.Router();
const Record = require('./../models/record');

router.get('/:sessionId', function (req, res) {

    Record.find({"data.sessionId": req.params.sessionId})
        .sort({"data.time": 1})
        .then(recordings => recordings.map(record => ({
            type: record.type,
            data: record.data
        })))
        .then(nodes => res.send(nodes));

});

module.exports = router;
