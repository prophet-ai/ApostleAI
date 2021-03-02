
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
  //Comedic
  ["haha","ha","lol","hehe","funny","joke"],
  //Life Questions
  ["what is life", "meaning of life", "what is my purpose"],
  //Purpose Questions
  ["what is my purpose", "purpose of life", "purpose of living"]
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
  ["It is somewhat impossible to know for sure how old I am.", "I do not know...", "Hmm... I am unsure.", "What is the meaning of age? I don't have age"],
  //What is Paul?
  ["I am ApostleAI, a simple conversation bot coded in Javascript. But, you can call me Paul."],
  //Makers
  ["I was created by the Prophet-AI team."],
  //Name
  ["I am ApostleAi, but you can call me Paul for short."],
  //Test
  ["Respond!"],
  //Comedic
  ["Haha!","Good one!"],
  //Life Questions
  ["I could ask you the same thing, would you know the answer?", "Trying to find meaning in life is hard. The real question is where should you search?", "Maybe the meaning of life is in front of you right now, would you notice it?"],
  //Purpose Questions
  ["Maybe there is no purpose...", "What is the purpose of a mosquito? What it the purpose of a lion? Now ask yourself, what is the purpose of humans?", "If you dig deep enough, maybe you'll find it."]
  
]
