import express from "express";
import http from 'http';
import { Server } from "socket.io"
import { fileURLToPath } from "url";
import path from "path";
const app = express();

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"],
    }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    // res.send("<h1>Hello There</h1>");
    res.sendFile(__dirname + "/index.html");


})

io.on("connection", (socket) => {
    console.log("Connection is ready");
    console.log(socket.id);
    socket.on('send-message', (data) => {
        console.log("message received -> ", data.message);
        socket.emit("message-from-server", data);


    })
})

httpServer.listen(5000, () => {
    console.log("Server running...");
})