const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const authenticate = require("./app/authenticate");
const postAuthenticate = require("./app/post-authenticate");
const disconnect = require("./app/disconnect");


require('socketio-auth')(io, {
    authenticate: authenticate,
    postAuthenticate: postAuthenticate,
    disconnect: disconnect,
    timeout: 5000
});

http.listen(3000, () => console.log('listening on *:3000'));