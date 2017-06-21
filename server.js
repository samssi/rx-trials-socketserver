"use strict";

const app = require("http").createServer();
const io = require("socket.io")(app);
const fs = require("fs");
const keypress = require("keypress");
const readline = require('readline');

const lineReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

app.listen(8001);
keypress(process.stdin);

io.on("connection", function (socket) {
    console.log("New connection opened...");
    socket.emit("message", { message: "Message from server!" });
    lineReader.on("line", (line) => {
        console.log("Sending: %s", line);
        socket.emit("message", { message: line });
    });
    socket.on("disconnect", () => {console.log("Connection closed...")});
});



