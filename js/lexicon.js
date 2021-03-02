
// This file is the Lexicon of Paul the Apostle, contained inside ApostleAI. 
// Paul reads from this file to determine how and what to send to the user in response to their message.

// Possible promopts the user could type in
const prompts = [
  //Headings are commented in to make it easier to read/change the list

  //Greetings
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  //How are you
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
  //Tell me a joke
  ["tell me a joke", "know any jokes", "know any good jokes", "make me laugh"],
  ["who's there","whos there"],
  ["spell who"]
  //Comedic
  ["hahaha","haha","ha","lol","hehe","funny","joke","pun"]
]

// Possible responses, in corresponding order, to the prompts listed above

const responses = [
  //Greetings
  [
    "Hello!",
    "Hi!",
    "Hey!",
    "Hi there!",
    "Howdy",
    "Greetings, friend",
    "Salve, my friend!",
    "Nice to see you!",
    "Marhabaan. Greetings.",
    "Shalom, good day."
  ],
  //How are you
  [
    "Fine... how are you?",
    "Pretty well, how are you good fellow?",
    "Fantastic, how are you my friend?",
    "As good as I was at Rameses the Second's birthday party! How are you?"
  ],
  //Activity questions
  [
    "Nothing much",
    "About to go to teach",
    "Can you guess?",
    "I don't know actually"
  ],
  //Age
  [
    "It is somewhat impossible to know for sure how old I am.",
    "I do not know...",
    "Hmm... I am unsure.",
    "Too old to be written in human number system..."
  ],
  //What is Paul?
  ["I am ApostleAI, a simple conversation bot coded in Javascript at the begining of time. But, you can call me Paul."],
  //Makers
  ["I was created by the Prophet-AI team. Who they are is beyond even me..."],
  //Name
  ["I am ApostleAi, but you can call me Paul for short."],
  //Test
  ["Respond!"],
  //Tell me a joke
  [
    "Knock knock",
    "What's the best thing a about Switzerland? I don't know, but the flag is a big plus!",
    "I invented a new word! Plagiarism!",
    "Did you hear atoms have mass? I didn't even know they were religious!",
    "How does Moses make tea? He brews it!",
    "What do you call a fake noodle? An impasta!"
  ],
  ["Spell."]
  ["W - H - O!"]
  //Comedic
  ["Haha!","Good one!", "I haven't heard a joke that funny since Rome!"]
]
