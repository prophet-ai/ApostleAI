//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemmingTest = require("./porterStemming");
const { Wit, log } = require("node-wit");
const config = require('./config');
const logger = require('./logger');

test("Wit.AI Intent Test", () => {
  const client = new Wit({ accessToken: config.key });
  console.log(logger.getTime() + "Sending test message 'What is the weather in London?' to Wit.AI API now...");
  client.message("What is the weather in London?", {})
    .then((data) => {
      expect(data.intents[0].name).toMatch("wit$get_weather");
    })
    .catch(console.error);
});

test("Wit.AI Sentiment Test", () => {
    const client = new Wit({ accessToken: config.key });
    console.log(logger.getTime() + "Sending test message 'I feel sad' to Wit.AI API now...");
    client.message("I feel sad", {})
      .then((data) => {
        expect(data.traits.wit$sentiment[0].value).toMatch("negative");
      })
      .catch(console.error);
  });

//Tests if porter stemming is correcting words properly
test("Porter Stemming Test", () => {
  expect(porterStemmingTest.textInput("I like sceince")).toMatch(
    "I like science."
  );
  expect(porterStemmingTest.textInput("Testign")).toMatch("Testing.");
  expect(porterStemmingTest.textInput("collectoin")).toMatch("collection.");
  expect(porterStemmingTest.textInput("discoverign")).toMatch("discovering.");
  expect(porterStemmingTest.textInput("fractoin")).toMatch("fraction.");
});
