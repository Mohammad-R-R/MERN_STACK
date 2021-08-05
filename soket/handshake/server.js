// server.js
const express = require('express');
const { Socket } = require('socket.io');
const app = express();
 
const server = app.listen(8000, () =>
  console.log('The server is all fired up on port 8000')
);
 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });

io.on("connection",Socket=>{
    console.log("Nice to meet you. (shake hand)");
})
io.on("connection",socket => {
    socket.on("event_from_clint",data =>{
        socket.broadcast.emit("send_data_to_all_other_clients",data);
        console.log("hello dude");
    });
});