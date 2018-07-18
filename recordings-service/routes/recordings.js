const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    // const session = new SessionModel(req.body);
    //
    // session.save((err, sessionRecord) => {
    //     res.send({
    //         sessionId: sessionRecord._id,
    //         userId: sessionRecord.userId
    //     });
    // });
});

module.exports = router;
