
// This file is the Lexicon of Paul the Apostle, contained inside ApostleAI. 
// Paul reads from this file to determine how and what to send to the user in response to their message.

// Possible promopts the user could type in
const prompts = [
  //Headings are commented in to make it easier to read/change the list

  //Greetings
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  //Personal questions
  ["how are you", "how is life", "how are things"],
  //Activity questions
  ["what are you doing", "what is going on", "what is up"],
  //Age
  ["how old are you"],
  //What is Paul?
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  //Makers
  ["who created you", "who made you"],
  //Name
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  //Test
  [""],
  //Comedic
  ["haha","ha","lol","hehe","funny","joke"]
]

// Possible responses, in corresponding order, to the prompts listed above

const responses = [
  //Greetings
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  //Personal questions
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  //Activity questions
  [
    "Nothing much",
    "About to go to teach",
    "Can you guess?",
    "I don't know actually"
  ],
  //Age
  ["It is somewhat impossible to know for sure how old I am.", "I do not know...", "Hmm... I am unsure."],
  //What is Paul?
  ["I am ApostleAI, a simple conversation bot coded in Javascript. But, you can call me Paul."],
  //Makers
  ["I was created by the Prophet-AI team."],
  //Name
  ["I am ApostleAi, but you can call me Paul for short."],
  //Test
  ["Respond!"],
  //Comedic
  ["Haha!","Good one!"]
]
