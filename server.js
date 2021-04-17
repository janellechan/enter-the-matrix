// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
// To serve static files (CSS, images, Javascript), use express.static in conjuction with app.use
// to access them. "/js" and "/css" are virtual path prefixes, so if the path doesn't exist, node.js
// is searching from the path we specify. `__dirname` is the root folder. (https://expressjs.com/en/starter/static-files.html)
// app.use('/script', express.static(__dirname + '/node_modules'));
app.use('img', express.static(__dirname + 'img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

// Routing our base localhost url to our index page
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
server.listen(5000, function() {
  console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {
});

// // TODO: Remove later. Only for testing.
// setInterval(function() {
//   io.sockets.emit('message', 'stop!');
// }, 1000);
