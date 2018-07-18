const express = require('express');
const router = express.Router();
const SessionModel = new require("./../models/session");

router.get('/', (req, res) => {
    SessionModel.find().then(
        sessions => sessions.map(session => ({
            sessionId: session._id,
            userId: session.userId,
            createdAt: session.createdAt
        }))
    ).then(sessions => res.send(sessions));
});

router.post('/', (req, res) => {
    const session = new SessionModel(req.body);

    session.save((err, sessionRecord) => {
        res.send({
            sessionId: sessionRecord._id,
            userId: sessionRecord.userId
        });
    });
});

module.exports = router;
