// Welcome to the initial brains of ApostleAI

// Isolate the chatButton element from index.html
var sendChat = document.getElementById('chatButton');

// This function will run when the chatButton is clicked on the html page.
sendChat.onclick = function(){

  // Isolates the input field on the html page, saves to 'input' and then wipes the field.
  // Then passes the input into the generateResponse function
  const inputField = document.getElementById("input");
  let input = inputField.value;
      inputField.value = "";
      generateResponse(input);

}


// Checks for any key releases on 'Enter' key
// Isolates the input field on the html page, saves to 'input' and then wipes the field.
// Then passes the input into the generateResponse function
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    const inputField = document.getElementById("input");
    let input = inputField.value;
      inputField.value = "";
      generateResponse(input);
  }
});

// Function to generate a response based on the input message from the user
function generateResponse(input) {
  
  // Product holds what the bot will send back to the user in a message
  let product; 

  // Regex to remove non word/space characters, trim trailing whitespce, and remove digits. (Note: this means the bot can't read numbers, this is intentional.)
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  
  // Currently the bot will just type out your input after it is 'cleaned up' in the line above.
  product = text;

  // Passes the original user input and the bot-generated product to the createMessages function to be displayed on the html page
  createMessages(input, product);
}

function createMessages(input, product) {


  // Targets the message div on the html page
  const messagesContainer = document.getElementById("messages");

  // Creates a div for the message, propogates it with the necessary information and then appends it to the messages div
  let userMessageDiv = document.createElement("div");
  userMessageDiv.id = "user";
  userMessageDiv.className = "user response";
  userMessageDiv.innerHTML = `<img src="assets/user.png" class="avatar"><span id="msgSpan">${input}</span>`; // This includes an image for the user (in assets/)
  messagesContainer.appendChild(userMessageDiv);

  let botMessageDiv = document.createElement("div");     // Creates the div for the message
  let botMessageImg = document.createElement("img");     // Creates the image for the bot
  let botMessageText = document.createElement("span");   // Creates the span tag for the message content itself
  
  botMessageText.setAttribute("id", "msgSpan");
  botMessageDiv.id = "bot";
  botMessageImg.src = "assets/paul.jpg";    
  botMessageImg.className = "avatar";
  botMessageDiv.className = "bot response";
  botMessageText.innerText = "Thinking...";
  botMessageDiv.appendChild(botMessageText);
  botMessageDiv.appendChild(botMessageImg);
  messagesContainer.appendChild(botMessageDiv);          
  
  // Keep the most recent message at the bottom and pushes old ones up
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Dummy delay to make it appear like the bot is 'thinking'
  setTimeout(() => {
    botMessageText.innerText = `${product}`;
  }, 1000
  )

}

//A simple RNG that can be called for any function
//Min and Max inclusive
function RNG(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Takes in a string input and returns a time delay
function thinking(product) {
  textLength = product.textLength()
  //return (textLength * 10 + RNG(0, 1500))
  return 1000
}