const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
    console.log("A new user has connected", socket.id);
})

app.use(express.static("./public"));

app.get("/", (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen(9000, () => console.log("Server started at port: 9000"));