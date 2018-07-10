const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const axios = require('axios');

function authenticate(socket, data, callback) {
    axios.post('http://session-service:3000/session', {"userId":"123"})
        .then((response) => {
            console.log(response.data);
            callback(null, response.data)
        });
}

function postAuthenticate(socket, data) {
    console.log("in post authenticate");

    socket.on("record", (record) => {
        // console.log(record);
    });
}


function disconnect(socket) {
    console.log(socket.id + ' disconnected');
}

require('socketio-auth')(io, {
    authenticate: authenticate,
    postAuthenticate: postAuthenticate,
    disconnect: disconnect,
    timeout: 50000
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});