# ApostleAI

ApostleAI is a conversation bot modeled after Paul the Apostle, commonly known as Saint Paul, an apostle who spread the teachings of Jesus in the first-century world.

To run the this project on your local machine;
1. Install [`NodeJS`](https://nodejs.org/en/download/).
2. In your terminal, navigate to the project directory and hit it with a `npm install` which should install all dependencies, in this case the only one necessary should be [Express.js](https://github.com/expressjs/express).

Once the dependencies have been installed, to start the local server;
1. In your terminal type `npm run start` which will run the server and host the application.
2. Nagivate to `hostname:8080` to see the project live. In local environments hostname will be `localhost`.

> Note: Any updates saved to the files in your project folder will automatically be dispalyed on this server.
---
## Documentation
All functions require module import:  `import * as Name from 'dir'`.
### [Index.js](public/js/index.js)
Exists as applications entry point only contains the `window.onload` event.
### [Bot.js](public/js/bot.js)
All bot thinking is processed in this file.
 - `sendMessage(input, delay)`
	 - Sends the bots message to the front end message display.
	 - `input` is the message to display.
	 - `delay` is the delay in milliseconds between when the bot 'thinks' and when the message is appended to the display window.
 - `generateResponse(input)`
	 - Generates a response based on user input.
	 - `input` is the message that the bot is to interpret and generate a response to.
 - `pickReply(prompts, responses, userInput)`
	 - Communicates with the lexicon to select a reply based on the list of available responses.
	 - `prompts` a reference to the prompts export from lexicon.
	 - `responses` a reference to the responses export from lexicon.
	 - `userInput` is the userInput to interpret and pick a reply in response to.
### [Input.js](public/js/input.js)
All input handling exists in this file.
In addition to the following functions, this file also contains the `keyup eventListener` for the front end.
 - `sendUserMessage(input)`
	 - Sends user message to the front end message display.
	 - `input` the message to append to the front end display.

### [Tools.js](public/js/tools.js)
All utility functions exist in this file.
 - `RNG(min, max)`
	 - Generates a random number within the range [min, max].
	 - `min` minimum boundary for rng.
	 - `max` maximum boundary for rng.
### [SaveChat.js](public/js/saveChat.js)
Chat logging utilities exist in this file.
 - `saveChatLog(text)`
	 - Saves a single string parameter to the current instances chat log.
	 - `text` text to append to the chat log.

### [Lexicon.js](public/js/lexicon.js)
The list of available responses / queries for the bot to handle/use export list:
 - `prompts`
	 - Prompts that the user could type in.
 - `responses`
	 - Possible responses for the previous list.
 - `other`
	 - Error response handling / other responses.

---
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_Predication_of_Saint_Paul_LACMA_M.2000.179.24.jpg/800px-The_Predication_of_Saint_Paul_LACMA_M.2000.179.24.jpg)

### Happily brought to you by The Prophet-AI team 👁⃤
![alt text](https://avatars.githubusercontent.com/u/78770750?s=200&v=4)
