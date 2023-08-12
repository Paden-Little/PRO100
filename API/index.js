const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected');
  socket.emit('message', { manny: 'hey how are you?'});
  socket.on('another event', (data) => {
    console.log(data);
  });
});

/*const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
   res.sendfile('index.html');
});

io.on('connection', (socket) => {
  console.log('user connected');
  console.log(socket)
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
})

server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

*/