/*
*   TOOLS.JS
*   All utility functions should go in this file.
*   Things that don't necessarily rely on the bot or the user
*   e.g: math, array utilities, processing... the list goes on.
*
*/

//A simple RNG that can be called for any function
//Min and Max inclusive
export function RNG(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Test function (scope testing)
export function test(){
    alert("Test");
}