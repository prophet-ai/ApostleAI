//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemmingTest = require("./porterStemming");
const {Wit, log} = require('node-wit');
const config = require('./config');

test("Wit.AI Test", () => {
  const client = new Wit({ accessToken: config.key });
  client.message("what is the weather in London?", {})
    .then((data) => {
      expect(data.intents[0].name).toMatch("wit$get_weather");
      console.log(inp);
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

//Tests if bot is ouputting something and not throwing errors
// test('Bot Output Test', () =>{
//     expect().toBeDefined();
// });

//
// test('', () =>{
//     expect().toBeDefined();
// });
