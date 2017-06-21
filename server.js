"use strict";

const app = require('http').createServer();
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(8001);

io.on("connection", function (socket) {
    console.log("New connection opened...");
    socket.emit("message", { message: "Message from server!" });
    socket.on("disconnect", () => {console.log("Connection closed...")});

});