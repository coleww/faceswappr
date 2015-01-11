var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// i am so lazy
app.get('/cat.png', function(req, res){
  res.sendFile(__dirname + '/cat.png');
});

// this still probably took less time than googling for how to serve a public folder...
app.get('/client.js', function(req, res){
  res.sendFile(__dirname + '/client.js');
});


io.on('connection', function(socket){
  socket.on('IMG', function(img){
    socket.broadcast.emit('IMG', img);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});