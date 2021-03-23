/*
 *   INPUT.JS
 *   All input handling should go in this file.
 *   Things to do with front end communication and user interaction
 *
 */

// imports
import * as Bot from "/js/bot.js";
import * as SaveFunction from "/js/saveChat.js";
import * as PorterStemmer from "/js/porterStemming.js";

window.onload = function () {
  let intro =
    "Greetings young disciple! I am ApostleAI, a simple conversation bot coded in Javascript. You can talk to me about things like 'the meaning of life', your 'purpose', or even ask me about me! If you need some talking points, click the link above!";
  Bot.sendMessage(intro, 0);
};

const ws = new WebSocket("ws://localhost:8082");

ws.addEventListener("open", () => {
  console.log("Connected to server!");
});

// Isolate the chatButton element from index.html
var sendChat = document.getElementById("chatButton");

// Handle USER INPUT
// This function will run when the chatButton is clicked on the html page.
sendChat.onclick = function () {
  // Isolates the input field on the html page, saves to 'input' and then wipes the field.
  // Then passes the input into the generateResponse function

  const inputField = document.getElementById("message");
  let input = inputField.value;

  SaveFunction.saveChatLog("You: " + input);
  inputField.value = "";
  sendUserMessage(input);
};

// Checks for any key releases on 'Enter' key
// Isolates the input field on the html page, saves to 'input' and then wipes the field.
// Then passes the input into the generateResponse function
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // Isolates the input field on the html page, saves to 'input' and then wipes the field.
    // Then passes the input into the generateResponse function
    const inputField = document.getElementById("message");
    let input = inputField.value;

    SaveFunction.saveChatLog("You: " + input);
    inputField.value = "";
    sendUserMessage(input);
  }
});

// Function to display the user's message in the message box on the html page
function sendUserMessage(input) {
  const messagesContainer = document.getElementById("messages");

  //Error correction
  input = PorterStemmer.textInput(input);

  //Save to chat log
  SaveFunction.saveChatLog("You: " + input);

  // Creates a div for the message, propogates it with the necessary information and then appends it to the messages div
  let userMessageDiv = document.createElement("div");
  userMessageDiv.id = "user";
  userMessageDiv.className = "user response box sb1";
  userMessageDiv.innerHTML = `<span id="msgSpan">${input}</span><img src="assets/user.png" class="avatar">`; // This includes an image for the user (in assets/)
  messagesContainer.appendChild(userMessageDiv);

  // Keep the most recent message at the bottom and pushes old ones up to mimic a chat
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  ws.send(input);
  console.log("Sending '" + input + "' to socket server...");
}
