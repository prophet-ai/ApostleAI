/*
*   BOT.JS
*   All bot thinking should go in this file.
*   Things to do with bot processing and communication
*
*/

// Imports
import * as SaveFunction from "/js/saveChat.js";
import {prompts} from "/js/Lexicon.js";
import {responses} from "/js/Lexicon.js";
import {alternative} from "/js/Lexicon.js";


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
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
  // Dummy delay to make it appear like the bot is 'thinking'
  if(delay != 0)
    var delay = 1000;
    
  setTimeout(() => { botMessageText.innerText = `${input}`; }, delay)
}

// Generate Response
export function generateResponse(input) {
  
  const messagesContainer = document.getElementById("messages");

  // Product holds what the bot will send back to the user in a message
  let product;

  // Regex to remove non word/space characters, trim trailing whitespce, and remove digits. (Note: this means the bot can't read numbers, this is intentional.)
  let text = input
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/[\d]/gi, "")
    .trim();

  // This is where the bot will decide what to respond with.
  if (compare(prompts, responses, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, responses, text);
  } else {
    // If all else fails, pick a random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Passes the  bot-generated product to the sendBotMessage function to be displayed on the html page
  sendMessage(product);
}

export function compare(promptsArray, responsesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let responses = responsesArray[x];
        reply = responses[Math.floor(Math.random() * responses.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}