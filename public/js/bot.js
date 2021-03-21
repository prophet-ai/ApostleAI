/*
 *   BOT.JS
 *   All bot thinking should go in this file.
 *   Things to do with bot processing and communication
 *
 */

// Imports
import * as SaveFunction from "/js/saveChat.js";
import { prompts } from "/js/Lexicon.js";
import { responses } from "/js/Lexicon.js";
import { other } from "/js/Lexicon.js";

// Function to display the bot's message in the message box on the html page
export function sendMessage(input, delay) {
  const messagesContainer = document.getElementById("messages");

  let botMessageDiv = document.createElement("div"); // Creates the div for the message
  let botMessageImg = document.createElement("img"); // Creates the image for the bot
  let botMessageText = document.createElement("span"); // Creates the span tag for the message content itself

  botMessageText.setAttribute("id", "msgSpan");
  botMessageDiv.id = "bot";
  botMessageImg.src = "assets/paul.jpg";
  botMessageImg.className = "avatar";
  botMessageDiv.className = "bot response box sb2";
  botMessageText.innerText = "Thinking...";
  botMessageDiv.appendChild(botMessageImg);
  botMessageDiv.appendChild(botMessageText);
  messagesContainer.appendChild(botMessageDiv);

  //Add the bot's response to the chat log.
  SaveFunction.saveChatLog("ApostleAI: " + input);

  // Keep the most recent message at the bottom and pushes old ones up
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Dummy delay to make it appear like the bot is 'thinking'
  if (delay != 0) var delay = 1000;

  setTimeout(() => {
    botMessageText.innerText = `${input}`;
  }, delay);
}

// Generate Response
export function generateResponse(input) {
  // Product holds what the bot will send back to the user in a message
  let result;

  // Regex to remove non word/space characters, trim trailing whitespce, and remove digits. (Note: this means the bot can't read numbers, this is intentional.)
  let text = input
    .replace(/[\d]/gi, "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/gi, "");

  // This is where the bot will decide what to respond with.
  if (pickReply(prompts, responses, text)) {
    // Search for exact match in `prompts`
    result = pickReply(prompts, responses, text);
  } else {
    // If all else fails, pick a random alt
    result = other[Math.floor(Math.random() * other.length)];
  }

  // Passes the  bot-generated result to the sendBotMessage function to be displayed on the html page
  sendMessage(result);
  console.log(result);
}

// Function to go through the lexicon.js and pick a response to the user's input
export function pickReply(prompts, responses, userInput) {
  let botReply;
  let gotReply = false;
  
  for (let x = 0; x < prompts.length; x++) {
    for (let y = 0; y < prompts[x].length; y++) {
      if (prompts[x][y] === userInput) {
        // Found a matching reply
        let response = responses[x];
        botReply = response[Math.floor(Math.random() * response.length)];
        gotReply = true;
        // Stop inner loop when a reply is found
        break;
      }
    }
    if (gotReply) {
      // Stop outer loop when reply is found
      break;
    }
  }
  return botReply;
}
