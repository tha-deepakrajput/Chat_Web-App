const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.static("./public"));

app.get("/", (req, res) => {
    return res.sendFile("./public/index.html");
})

server.listen(9000, () => console.log("Server started at port: 9000"));