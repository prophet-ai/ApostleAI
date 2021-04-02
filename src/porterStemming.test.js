//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemming = require('./porterStemming');

//Tests if porter stemming is correcting words properly
test('Porter Stemming Test', () =>{
    expect(porterStemming("I like sceince")).toMatch('I like science.');
    expect(porterStemming("Testign")).toMatch('Testing.');
    expect(porterStemming("collectoin")).toMatch('collection.');
    expect(porterStemming("discoverign")).toMatch('discovering.');
    expect(porterStemming("fractoin")).toMatch('fraction.');
});

//Tests if bot is ouputting something and not throwing errors
// test('Bot Output Test', () =>{
//     expect().toBeDefined();
// });

//
// test('', () =>{
//     expect().toBeDefined();
// });