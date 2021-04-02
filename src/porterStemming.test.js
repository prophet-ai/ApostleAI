//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemmingTest = require('./porterStemming');

//Tests if porter stemming is correcting words properly
test('Porter Stemming Test', () =>{
    expect(porterStemmingTest("I like sceince")).toMatch('I like science.');
    expect(porterStemmingTest("Testign")).toMatch('Testing.');
    expect(porterStemmingTest("collectoin")).toMatch('collection.');
    expect(porterStemmingTest("discoverign")).toMatch('discovering.');
    expect(porterStemmingTest("fractoin")).toMatch('fraction.');
});

//Tests if bot is ouputting something and not throwing errors
// test('Bot Output Test', () =>{
//     expect().toBeDefined();
// });

//
// test('', () =>{
//     expect().toBeDefined();
// });