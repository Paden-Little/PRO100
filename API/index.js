const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// set up express and middlewares
const app = express();
const server = http.createServer(app);
app.use(express.static('public')); 

// set up socket.io
const io = socketIO(server);

//get deck
const deckBuilder = require('./public/Deck')

usersInRoom = 0;
// handle socket connections
io.on('connection', (socket) => {
    console.log('User connected');
    // handle joinRoom event
    socket.on('joinRoom', (roomData) => {
      usersInRoom++
      socket.join(roomData.roomCode);
      if(usersInRoom == 2){
        console.log("Starting a game");
        let deck = deckBuilder.initCards()
        io.in(roomData.roomCode).emit('gameSetup', deck);
      }
    });

    //handle messsages
    socket.on('message', (roomCode, message) => {
      io.to(roomCode).emit('message', message);
    });

    // handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

gameStart = () => {

}

server.listen(3000, () => console.log('Server is running on port 3000'));
