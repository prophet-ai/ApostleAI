/*
*   SERVER.JS
*   This file serves the application.
*   This is as big of a backend as I think is safe to go
*   very simple, simply listen on port 8080 and serve the index.html file
*   also allow access to the public folder, so think about what you put into
*   that public folder because all of that is served to the client
*   this of course is not.
*/

var express = require('express');
var path = require('path');
var app = express();

// middleware
app.use(express.urlencoded({
  extended: true
}));

// index
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at hostname:8080/talkingpoints
app.get('/talkingpoints', function(req, res){
    res.sendFile(path.join(__dirname + '/talkingpoints.txt'));
});

// allow the app to use the static library for public facing assets
app.use(express.static(__dirname + '/public'));

// Listen on port 8080
app.listen(8080);