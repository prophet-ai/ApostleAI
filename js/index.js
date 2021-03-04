// Welcome to the initial brains of ApostleAI

// Whenever the window loads, this function will run to automatically send an intro message from the bot.
window.onload = function () {
  let intro =
    "Greetings young disciple! I am ApostleAI, a simple conversation bot coded in Javascript at the begining of time. But, you can call me Paul. I do not do very much as of yet, but that is about to change very soon!";
  sendBotMessage(intro, 0);
};

// Function to display the bot's message in the message box on the html page
function sendBotMessage(input, delay) {
  const messagesContainer = document.getElementById("messages");

  let botMessageDiv = document.createElement("div"); // Creates the div for the message
  let botMessageImg = document.createElement("img"); // Creates the image for the bot
  let botMessageText = document.createElement("span"); // Creates the span tag for the message content itself

  botMessageText.setAttribute("id", "msgSpan");
  botMessageDiv.id = "bot";
  botMessageImg.src = "assets/apostole.jpg";
  botMessageImg.className = "avatar";
  botMessageDiv.className = "bot response box sb2";
  botMessageText.innerText = "Thinking...";
  botMessageDiv.appendChild(botMessageImg);
  botMessageDiv.appendChild(botMessageText);
  messagesContainer.appendChild(botMessageDiv);

  // Keep the most recent message at the bottom and pushes old ones up
  messagesContainer.scrollTop =
  messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Dummy delay to make it appear like the bot is 'thinking'
  if(delay != 0)
    var delay = 1000;
  
  setTimeout(() => {
    botMessageText.innerText = `${input}`;
  }, delay
  )

}

//A simple RNG that can be called for any function
//Min and Max inclusive
function RNG(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
