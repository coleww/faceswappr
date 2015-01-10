var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/headtrackr.js', function(req, res){
  res.sendFile(__dirname + '/headtrackr.js');
});

io.on('connection', function(socket){
  socket.on('IMG', function(img){
    socket.broadcast.emit('IMG', img);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});