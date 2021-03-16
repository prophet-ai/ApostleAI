/*
*   INPUT.JS
*   All input handling should go in this file.
*   Things to do with front end communication and user interaction
*
*/

// imports
import * as Bot from "/js/bot.js";
import * as SaveFunction from "/js/saveChat.js";

// Isolate the chatButton element from index.html
var sendChat = document.getElementById("chatButton");

// Handle USER INPUT
// This function will run when the chatButton is clicked on the html page.
sendChat.onclick = function () {
    // Isolates the input field on the html page, saves to 'input' and then wipes the field.
    // Then passes the input into the generateResponse function
    const inputField = document.getElementById("input");
    let input = inputField.value;
    //Save to chat log
    SaveFunction.saveChatLog("You: " + input);
    inputField.value = "";
    sendUserMessage(input);
  };

// Checks for any key releases on 'Enter' key
// Isolates the input field on the html page, saves to 'input' and then wipes the field.
// Then passes the input into the generateResponse function
document.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      const inputField = document.getElementById("input");
      let input = inputField.value;
      //Save to chat log
      SaveFunction.saveChatLog("You: " + input);
      inputField.value = "";
      sendUserMessage(input);
    }
});

// Function to display the user's message in the message box on the html page
function sendUserMessage(input) {
    const messagesContainer = document.getElementById("messages");
  
    //Add the user's message to the chat log
    //chatLog += "\nUser: " + input;
    //saveButton.href = saveChatLog(chatLog);
  
    // Creates a div for the message, propogates it with the necessary information and then appends it to the messages div
    let userMessageDiv = document.createElement("div");
    userMessageDiv.id = "user";
    userMessageDiv.className = "user response box sb1";
    userMessageDiv.innerHTML = `<span id="msgSpan">${input}</span><img src="assets/user.png" class="avatar">`; // This includes an image for the user (in assets/)
    messagesContainer.appendChild(userMessageDiv);
  
    // Keep the most recent message at the bottom and pushes old ones up to mimic a chat
    messagesContainer.scrollTop =
      messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
    // Passes the input to generateResponse function after 1 second (this gives the user a chance to send another message )
    setTimeout(function () {
      Bot.generateResponse(input);
    }, 1000);
  }