// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));  // Serve static files like HTML, JS, CSS

io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for the 'ban' event
  socket.on('ban', (data) => {
    console.log(`Ban request received for player ID: ${data.playerId}`);
    // Handle banning logic (e.g., mark player as banned in the database)
  });

  // Listen for the 'kick' event
  socket.on('kick', (data) => {
    console.log(`Kick request received for player ID: ${data.playerId}`);
    // Handle kicking logic
  });

  // Listen for the 'freeze' event
  socket.on('freeze', (data) => {
    console.log(`Freeze request received for player ID: ${data.playerId}`);
    // Handle freezing logic
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
