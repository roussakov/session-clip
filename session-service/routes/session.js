const express = require('express');
const router = express.Router();
const SessionModel = new require("./../models/session");

router.get('/', (req, res) => {
    SessionModel.find().then(
        sessions => sessions.map(session => ({
            sessionId: session._id,
            userId: session.userId,
            userInfo: session.userInfo,
            createdAt: session.createdAt
        }))
    ).then(sessions => res.send(sessions));
});

router.get('/:id', (req, res) => {
    SessionModel.findOne({_id: req.params.id}).then(
        session => ({
                sessionId: session._id,
                userId: session.userId,
                userInfo: session.userInfo,
                createdAt: session.createdAt
            })).then(session => res.send(session));
});

router.post('/', (req, res) => {
    const session = new SessionModel(req.body);

    console.log(req.body);

    session.save((err, sessionRecord) => {
        res.send({
            sessionId: sessionRecord._id,
            userId: sessionRecord.userId
        });
    });
});

module.exports = router;
