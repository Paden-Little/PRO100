/*const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('user connected');
    socket.on('message', (msg) => {
        console.log(`message: ${msg}`);
        io.emit('message', msg);
    })
})
*/

const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public')); // Serve static files from the 'public' directory

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('join room', (roomCode) => {
    socket.join(roomCode);
    console.log(`User joined room: ${roomCode}`);
  });

  socket.on('message', (roomCode, message) => {
    io.to(roomCode).emit('message', message);
  });
});

http.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
