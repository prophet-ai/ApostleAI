import * as Bot from "/js/bot.js";

const WebSocketServer = require("ws").Server;

const wss = new WebSocketServer({ port: 8082 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    console.log("Client send us: " + data);
    Bot.generateResponse(data);
    console.log("Attempting to generate")
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
