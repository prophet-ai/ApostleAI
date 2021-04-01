// import * as porterStemmer from '/js/porterStemming.js';
const porterStemmer = require('./porterStemming');

test('I like sceince', () =>{
    expect(porterStemmer.porterStemmingTest('I like sceince')).toBe('I like science.');
});