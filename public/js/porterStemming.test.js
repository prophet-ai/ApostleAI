//import * as porterStemmingTest from "/js/porterStemming.js";
const porterStemmingTest = require('./porterStemming');

test('I like sceince', () =>{
    expect(porterStemmingTest("I like sceince")).toMatch('I like science.');
});