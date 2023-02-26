const express = require("express");
var http = require("http");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server, {
    cors: {
        origin: "*"
    },
});


//middlewre
app.use(express.json());
app.use(cors());



io.on("connection", (socket) => {
  console.log("connetetd");
});

server.listen(port, () => {
  console.log("server started");
});