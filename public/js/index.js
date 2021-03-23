/*
*   INDEX.JS
*   The applications entry point
*   This IDEALLY should be the only part of our app that directly
*   communicates with the front end for security reasons, granted
*   I don't believe we're all too concerned with that, as such this file
*   is kind of just whatever, things go here if they don't fit within
*   the other three files.
*
*/

// imports
import * as Bot from "/js/bot.js";
import * as Tools from "/js/tools.js";
import * as Input from "/js/input.js";

// Whenever the window loads, this function will run to automatically send an intro message from the bot.
window.onload = function () {
  let intro ="Greetings young disciple! I am ApostleAI, a simple conversation bot coded in Javascript. You can talk to me about things like 'the meaning of life', your 'purpose', or even ask me about me! If you need some talking points, click the link above!";
  Bot.sendMessage(intro, 0);
};