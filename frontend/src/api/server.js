const express = require("express");
const app = express();  
const http = require("http"); 
const server = http.createServer(app); 
const socket = require("socket.io"); 
const io = socket(server); 

// VIDEO CHAT
const users = {}
const socketToRoom = {}

io.on("connection", (socket) => {
    // Joining Room
    socket.on("join room", roomID => {
        if (users[roomID]) {
            const length = users[roomID].length;
            if (length === 4) {
                socket.emit("room full");
                return;
            }
            users[roomID].push(socket.id);
        } else {
            users[roomID] = [socket.id];
        }
        socketToRoom[socket.id] = roomID;
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

        socket.emit("all users", usersInThisRoom);
    });

    // Sending Call Signal
    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
    });

    // Returning Call Signal
    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
    });

    // Disconnect from Call
    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id];
        let room = users[roomID];
        if (room) {
            room = room.filter(id => id !== socket.id);
            users[roomID] = room;
        }
    });

});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`); 
}); 