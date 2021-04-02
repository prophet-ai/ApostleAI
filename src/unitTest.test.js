//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemmingTest = require('./porterStemming');
const Wit = require('node-wit').Wit;

const client = new Wit(token, actions, logger);

test('t', () =>{
    expect(client.message('Hello', (error, data) => {
        if (error) {
          console.log('Oops! Got an error: ' + error);
        } else {
          console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
        }
      })
      ).toMatch('hello');
});

//Tests if porter stemming is correcting words properly
test('Porter Stemming Test', () =>{
    expect(porterStemmingTest.textInput("I like sceince")).toMatch('I like science.');
    expect(porterStemmingTest.textInput("Testign")).toMatch('Testing.');
    expect(porterStemmingTest.textInput("collectoin")).toMatch('collection.');
    expect(porterStemmingTest.textInput("discoverign")).toMatch('discovering.');
    expect(porterStemmingTest.textInput("fractoin")).toMatch('fraction.');
});

//Tests if bot is ouputting something and not throwing errors
// test('Bot Output Test', () =>{
//     expect().toBeDefined();
// });

//
// test('', () =>{
//     expect().toBeDefined();
// });