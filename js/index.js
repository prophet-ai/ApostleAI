// Welcome to the initial brains of ApostleAI

// Whenever the window loads, this function will run to automatically send an intro message from the bot.
window.onload = function () {
  let intro =
    "Greetings young disciple! I am ApostleAI, a simple conversation bot coded in Javascript at the begining of time. But, you can call me Paul. You can ask me questions about the world, your future, or more! Give it a try!";
  sendBotMessage(intro, 0);
};

// Isolate the chatButton element from index.html
var sendChat = document.getElementById("chatButton");

// This function will run when the chatButton is clicked on the html page.
sendChat.onclick = function () {
  // Isolates the input field on the html page, saves to 'input' and then wipes the field.
  // Then passes the input into the generateResponse function
  const inputField = document.getElementById("input");
  let input = inputField.value;
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
    inputField.value = "";
    sendUserMessage(input);
  }
});

// Function to display the user's message in the message box on the html page
function sendUserMessage(input) {
  const messagesContainer = document.getElementById("messages");

  // Creates a div for the message, propogates it with the necessary information and then appends it to the messages div
  let userMessageDiv = document.createElement("div");
  userMessageDiv.id = "user";
  userMessageDiv.className = "user response box sb1";
  userMessageDiv.innerHTML = `<span id="msgSpan">${input}</span><img src="assets/user.png" class="avatar">`; // This includes an image for the user (in assets/)
  messagesContainer.appendChild(userMessageDiv);

  // Keep the most recent message at the bottom and pushes old ones up
  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Passes the input to generateResponse function after 1 second (this gives the user a chance to send another message )
  setTimeout(function () {
    generateResponse(input);
  }, 1000);
}

// Function to display the bot's message in the message box on the html page
function sendBotMessage(input, delay) {
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

// Function to generate a response based on the input message from the user
function generateResponse(input) {
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
  sendBotMessage(input);
}
