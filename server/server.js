const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins for development
        methods: ["GET", "POST"]
    }
});

const sessions = {}; // Store sessions: { sessionId: [socket.id1, socket.id2] }
const terminatedSessions = new Set(); // Blacklist of terminated session IDs

io.on("connection", (socket) => {

    socket.on("join", (sessionId) => {
        
        // Check if session was terminated
        if (terminatedSessions.has(sessionId)) {
            socket.emit("sessionError", { 
                message: "This session has been terminated and is no longer accessible." 
            });
            return;
        }
        
        // Create session if it doesn't exist
        if (!sessions[sessionId]) {
            sessions[sessionId] = [];
        }
        
        // Add user to session if not already in it
        if (!sessions[sessionId].includes(socket.id)) {
            sessions[sessionId].push(socket.id);
        }
        
        // Join the socket.io room
        socket.join(sessionId);
        
        // Notify all users in the session
        io.to(sessionId).emit("userJoined", { 
            sessionId, 
            userCount: sessions[sessionId].length 
        });
    });

    socket.on("message", ({ sessionId, message }) => {
        
        // Broadcast to all OTHER users in the session (not sender)
        socket.to(sessionId).emit("message", { message });
    });

    socket.on("terminate", (sessionId) => {
        if (sessions[sessionId]) {
            // Add to blacklist to prevent rejoining
            terminatedSessions.add(sessionId);
            
            // Notify all users in the session
            io.to(sessionId).emit("terminated");
            
            // Remove all sockets from the room
            sessions[sessionId].forEach(socketId => {
                const clientSocket = io.sockets.sockets.get(socketId);
                if (clientSocket) {
                    clientSocket.leave(sessionId);
                }
            });
            
            // Delete the session
            delete sessions[sessionId];
        } else {
            console.log("❌ Session not found:", sessionId);
        }
    });

    socket.on("disconnect", () => {
        
        // Remove user from all sessions
        Object.keys(sessions).forEach(sessionId => {
            const index = sessions[sessionId].indexOf(socket.id);
            if (index > -1) {
                sessions[sessionId].splice(index, 1);
                
                // If session is empty, delete it
                if (sessions[sessionId].length === 0) {
                    delete sessions[sessionId];
                } else {
                    // Notify remaining users
                    io.to(sessionId).emit("userLeft", { 
                        sessionId, 
                        userCount: sessions[sessionId].length 
                    });
                }
            }
        });
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`🚀 Secure Talk server listening on *:${PORT}`);
});
