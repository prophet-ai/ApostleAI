/*
*   BOT.JS
*   All bot thinking should go in this file.
*   Things to do with bot processing and communication
*
*/

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
  
  //CHANGE THIS ONCE WE THE BOT STARTS OUTPUTTING REAL RESPONSES!!!!!!!!!!!!!!!
  //chatLog += "\nApostleAI: " + input;
  //saveButton.href = saveChatLog(chatLog);
  
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

  // Currently the bot will just type out your input after it is 'cleaned up' in the line above.
  // This is where the bot will decide what to respond with.
  product = text;

  // Passes the  bot-generated product to the sendBotMessage function to be displayed on the html page
  sendMessage(input);
}