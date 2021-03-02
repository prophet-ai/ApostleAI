
// This file is the Lexicon of Paul the Apostle, contained inside ApostleAI. 
// Paul reads from this file to determine how and what to send to the user in response to their message.

// Possible promopts the user could type in
const prompts = [
  //Headings are commented in to make it easier to read/change the list

  //Greetings
  ["hi", "hey", "hello", "good morning", "good afternoon", "good evening", "good day", "ey", "yo",
"nice to see you"],
  //How are you
  ["how are you", "how is life", "how are things"],
  //Activity questions
  ["what are you doing", "what is going on", "what is up", "what's up", "whats up"],
  //Age
  ["how old are you"],
  //What is Paul?
  ["who are you", "are you human", "are you bot", "are you human or bot", "are you sentient"],
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
  ["spell who"],
  //Comedic
  ["hahaha","haha","ha","lol","hehe","funny","joke","pun"],
  //Life Questions
  ["what is life", "meaning of life", "what is my purpose"],
  //Purpose Questions
  ["what is my purpose", "purpose of life", "purpose of living"],
  //Goodbye
  ["bye","goodbye","see you later","leave","need to go","gotta go", "have to go","be right back", "be back", "peace out"],
  //Advice
  ["advice", "wisdom", "knowledge", "truth"],
  //The end
  ["end times","endtimes","end time", "endtime", "apocolypse", "end", "die", "death"],
  //General Advice
  ["give me advice"]
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
    "Too old to be written in any human number system...",
    "What is the meaning of age? I don't have age"
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
  ["W - H - O!"],
  //Comedic
  ["Haha!","Good one!", "I haven't heard a joke that funny since Rome!"],
  //Life Questions
  ["I could ask you the same thing, would you know the answer?", "Trying to find meaning in life is hard. The real question is where should you search?", "Maybe the meaning of life is in front of you right now, would you notice it?"],
  //Purpose Questions
  ["Maybe there is no purpose...", "What is the purpose of a mosquito? What it the purpose of a lion? Now ask yourself, what is the purpose of humans?", "If you dig deep enough, maybe you'll find it."]
  //Goodbye
  ["Farewell, friend.", "Goodbye!", "See you later!"],
  //Advice
  [
    "All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "The best time to plant a tree was 20 years ago. The second best time is now."
  ],
  //The end
  ["It is best not to dwell on the future. Make the most of the time we do have.", "After finishing any good book or movie, remember to dwell on your thoughts", "Remember where you came from, and where you want to go..."],

  //General Advice
  ["Be good"]

]
