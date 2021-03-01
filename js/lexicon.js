
// This file is the Lexicon of Paul the Apostle, contained inside ApostleAI. 
// Paul reads from this file to determine how and what to send to the user in response to their message.

// Possible promopts the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order, to the prompts listed above

const responses = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to teach",
    "Can you guess?",
    "I don't know actually"
  ],
  ["It is somewhat impossible to know for sure how old I am.", "I do not know...", "Hmm... I am unsure."],
  ["I am ApostleAI, a simple conversation bot coded in Javascript. But, you can call me Paul."],
  ["I was created by the Prophet-AI team."],
  ["I am ApostleAi, but you can call me Paul for short."],
  ["Respond!"],
  ["Haha!","Good one!"]
]
