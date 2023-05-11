import express from "express";
import http from 'http';
import { Server } from "socket.io"
import { fileURLToPath } from "url";
import path from "path";
const app = express();

const httpServer = http.createServer(app);
const io = new Server(httpServer);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.get('/', (req, res) => {
    // res.send("<h1>Hello There</h1>");
    res.sendFile(__dirname + "/index.html");


})

io.on("connection", (socket) => {
    console.log("Connection is ready");
})

httpServer.listen(5000, () => {
    console.log("Server running...");
})