// imports
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const logger = require('./src/logger');
const Bot = require('./src/prophet');

// connections array
var connections = [];

// serve static files from the public folder (css etc)
app.use(express.static('public'))

// index of the server serves index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// viewed at hostname:8080/talkingpoints
app.get("/talkingpoints", function (req, res) {
    res.sendFile(path.join(__dirname + "/talkingpoints.txt"));
  });

// On socket connection
io.on('connection', (socket) => {

    // initialize the bot while passing in the socket objects;
    // this is also where more bots could be loaded up to speak to each other
    var bot = new Bot('bot', socket, io);

    // push new connections to connection array
    connections.push(socket);

    // display socket information on new connection, including
    // how many sockets are already connected
    console.log(logger.getTime() + 'Connected: ' + logger.info(connections.length) + ' sockets connected | ' + logger.highlight(socket.id));

    // Socket listener for MESSAGE event
    socket.on('message', (data) => {
        // log the message information
        // note, messages come in json form data = { sender, msg }
        console.log(logger.getTime() + logger.info("message: ") + data.msg + ' | from ' + data.sender);

        // emit a message event to to front end to recieve
        io.emit('message', data);
    });

    // socket listener for disconnections, splice old sockets from the stack
    socket.on('disconnect', (socket) => {
        // splice old connections
        connections.splice(connections.indexOf(socket), 1);

        // output current information about the connections array after splice
        console.log(logger.getTime() + logger.warn('Disconnected: ') + logger.info(connections.length) + ' sockets connected');
    });6
});

// Serve
http.listen(8080, () => {
    // Output server information
    console.log(logger.info("ApostleAI Server running, listening on port 8080\n"));
});