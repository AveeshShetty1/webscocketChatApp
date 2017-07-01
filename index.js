var express= require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(4000, function(){

console.log("This is it");

});

app.use(express.static('public'));
 var io = socket(server);

io.on('connection',function(socket){
 console.log('connection established',socket.id);

socket.on('chat',function(data){
 io.sockets.emit('chat',data);
});
 
 socket.on('typing',function(data){
  socket.broadcast.emit('typing',data);
 });

});
