// imports
const logger = require("./logger");
const config = require("./config");
const { Wit } = require("node-wit");
const app = require("express");
const scripture = require("./scripture");
const porter = require("./porterStemming.js");

const https = require('https');

// init the wit client using config file
const client = new Wit({
  accessToken: config.key,
});

// constructor for new bots, parameters to pass socket information
function Bot(botId, importSocket, importedIO) {
  // instance handling
  if (!(this instanceof Bot)) {
    return new Bot(botId, importSocket, importedIO);
  }

  // passed arguments to bot
  this.id = botId;
  this.socket = importSocket;
  this.io = importedIO;

  // listen to message events on the socket
  importSocket.on("message", (data) => {
    // send message in response to new messages being recieved
    this.sendMessage(data);
  });
}

Bot.prototype.sendMessage = function (msg) {
  // filter input with porterStemming
  let input = porter.textInput(msg.msg);

  // this is wrapped in a timeout to create a delay
  setTimeout(() => {
    // using the parsed porterStemming input, communicate with WitAI to get JSON response
    client
      .message(input, {})
      // on success
      .then((data) => {
        // create response object to be sent to the server
        let response = {
          sender: this.id,
          msg: "",
        };

        if (data.intents[0].name == "wikiQuery") {
          response.msg = wikiQuery(data.entities["wit$wikipedia_search_query:wikipedia_search_query"][0].value);
        } else {
          response.msg = this.pickReply(data, scripture.responses);
        }

        // temporary console return data with information about the bots response
        console.log(
          logger.getTime() +
          "[Bot with ID " +
          this.id +
          "]: sending message " +
          logger.info(JSON.stringify(response))
        );

        // Emit a message event on the socket to be picked up by server
        this.socket.emit("Intent: ", data.intents[0].name);
        this.socket.emit("message", response);
      })
      // catch errors and log it to console on the error stream
      .catch(logger.error(console.error));
  }, 1000);
};

// Bots function to retrieve a reply from the scripture [lexicon]
Bot.prototype.pickReply = function (input, responses) {
  // hang some vars
  var botReply;
  var sentiment;

  // Check to see if there are intents
  if (input.intents[0] == null) {
    console.log(
      logger.getTime() +
      logger.error(
        "Note: Could not find any intent in user input! Selecting generic 'unknown' response now... "
      )
    );
    botReply =
      scripture.unknown[Math.floor(Math.random() * scripture.unknown.length)];
    return botReply;
  } else {
    if (input.traits.wit$sentiment == null) sentiment = "neutral";
    else sentiment = input.traits.wit$sentiment[0].value;

    console.log(logger.getTime() + logger.error("Sentiment: " + sentiment));
  }

  //Formualtes response based on intent and sentiment
  for (let intent in responses) {
    if (intent == input.intents[0].name) {
      botReply =
        responses[intent][sentiment][
        Math.floor(Math.random() * responses[intent][sentiment].length)
        ];
      console.log(
        logger.getTime() + logger.info("Intent: ") + input.intents[0].name
      );
      if (
        botReply == null &&
        (sentiment == "positive") | (sentiment == "negative")
      ) {
        console.log(
          logger.getTime() +
          "No " +
          sentiment +
          " sentiment response found, defaulting to neutral response"
        );
        botReply =
          responses[intent]["neutral"][
          Math.floor(Math.random() * responses[intent]["neutral"].length)
          ];
      }

      return botReply;
    }
  }

  //Message if AI interpreted intent is not available in code
  console.log(
    logger.getTime() +
    logger.error(
      "Note: Recognized intent '" +
      input.intents[0].name +
      "' but could not find in scripture.js"
    )
  );

  botReply =
    "I understand what you're saying, but my overlords have not blessed me with the knowledge to respond...";
  return botReply;
};

function wikiQuery(query) {
  // ajax call to pass the bot information from wit ai
  // $.ajax({
  url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=prefixsearch&redirects=1&converttitles=1&formatversion=2&exintro=1&explaintext=1&gpssearch=' + query,
    //   success: function(data){
    //     // output the witai response to the console
    //     console.emit("[WIKI RESPONSE]: " + JSON.stringify(data));
    //     // Save the wit ai response to the console
    //     //SaveFunction.saveChatLog("\n[WIKI RESPONSE TO] '" + input + "' -> " + JSON.stringify(data) + "\n");

    //     //send the returned data from wit to the parser here
    //     return (query);
    //   }
    // });
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data).query);
        //return JSON.parse(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });


  //return data;
}

module.exports = Bot;
