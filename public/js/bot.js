/*
 *   BOT.JS
 *   All bot thinking should go in this file.
 *   Things to do with bot processing and communication
 *
 */

// Imports
import * as SaveFunction from "/js/saveChat.js";
import { responses } from "/js/scripture.js";
import { unknown } from "/js/scripture.js";

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

  for (let index = 0; index < input.intents.length; index++) {
    console.log("User Intent: " + input.intents[index].name);
  }

  result = pickReply(input, responses);
  // Passes the  bot-generated result to the sendBotMessage function to be displayed on the html page
  sendMessage(result);
  console.log("Bot Response: '" + result + "'");
}

// Function to go through the lexicon.js and pick a response to the user's input
export function pickReply(input, responses) {
  var botReply;
  var sentiment;

  if (input.intents[0] == null) {
    console.log(
      "Note: Could not find any intent in user input! Selecting generic 'unknown' response now... "
    );
    botReply = unknown[Math.floor(Math.random() * unknown.length)];
    return botReply;
  } else {
    if(input.traits.wit$sentiment == null)
      sentiment = "neutral";
    else
      sentiment = input.traits.wit$sentiment[0].value;
    
    console.log("Sentiment: " + sentiment);
  }

  //Formualtes response based on intent and sentiment
  for (let intent in responses) {
    if(intent == input.intents[0].name){
      botReply = responses[intent][sentiment][Math.floor(Math.random() * responses[intent][sentiment].length)];
      
      if(botReply == null && (sentiment == "positive" | sentiment == "negative")){
        console.log("No " + sentiment + " sentiment response found, defaulting to neutral response");
        botReply = responses[intent]["neutral"][Math.floor(Math.random() * responses[intent]["neutral"].length)];
      }
      
      return botReply;
    }
  }

  //Message if AI interpreted intent is not available in code
  console.log(
    "Note: Recognized intent '" +
    input.intents[0].name +
    "', not in scripture.js"
  );
  botReply = "I understand what you're saying, but my overlords have not blessed me with the knowledge to respond...";
  return botReply;
}
