var http = require('http').Server();
var io = require('socket.io')(http);
var HOST = 'localhost';
var PORT_SOCKET=3000;

var events = {
  newConnection: 'connection', 
  offConnnection: 'disconnect', 
  newMessage: 'new_message',
  emitMessage: 'read_message'
} 


io.on(events.newConnection, function(socket) {

  socket.on(events.newMessage, function(message) {

    io.sockets.emit( events.emitMessage , message);
  
  });

  socket.on(events.offConnnection, () => {
        console.log('user disconnected');
  });

});

http.listen(PORT_SOCKET, function(){
  console.log('Esperando Clientes on '+HOST+':'+PORT_SOCKET);
});