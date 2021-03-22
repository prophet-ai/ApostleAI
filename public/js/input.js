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
      // ajax call to pass the bot information from wit ai
      $.ajax({
        type: 'GET',
        headers: {
          // the authorization header just to be seperated as this is exposed to the public atm
          // not a huge deal considering the private repo but this is bad practice
          'Authorization' : 'Bearer ' + 'HPQZ4RCIONLKOEFXTMXAW5XWFMI4EE5I'
        },
        url: 'https://api.wit.ai/message',
        data: {q: input},
        contentType: 'json',
        success: function(data){
          // output the witai response to the console
          console.log(data);
          // Save the wit ai response to the console
          SaveFunction.saveChatLog("\n[WITAI RESPONSE TO] '" + input + "' -> " + JSON.stringify(data) + "\n");
          
          //send the returned data from wit to the parser here

          //send response from parser to generateResponse

          Bot.generateResponse(data);
        }
      })
    }, 1000);
  }