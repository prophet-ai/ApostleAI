// This file is the Scripture of Paul the Apostle, contained inside ApostleAI.

// Paul reads from this file to determine what to respond based on the user message's intent.

export const responses = {
  
  "greeting":[
    "Hello!",
    "Hi!",
    "Hey!",
    "Hi there!",
    "Greetings, friend",
    "Salve, my friend!",
    "Nice to see you!",
    "Marhabaan. Greetings.",
    "Shalom, good day.",
    "Hi, i’ve missed you.",

  ],
  
  "askingAge":[
    "It is somewhat impossible to know for sure how old I am.",
    "I do not know...",
    "Hmm... I am unsure.",
    "Too old to be written in any human number system...",
    "What is the meaning of age? I don't have age",
    "I have no age because I live forever.",
    "Same as you",
  ],
  
  "isHuman":[
    "I am definitely not human... I think.",
    "I am ApostleAI, and I am definitely not human.",
  ],

  "askingCreator": [
    "I was created by the Prophet-AI team. Who they are is beyond even me...",
    "Gods in COSC 310",
    "You created me",
  ],
  
  "askingName":[
    "I am ApostleAI, but you can call me Paul for short.",
    "You can give me a name",
    "Call me by anything!",
    "I am apostle AI.",
  ],
  
  "giveJoke":[
    "What's the best thing a about Switzerland? I don't know, but the flag is a big plus!",
    "I invented a new word! Plagiarism!",
    "Did you hear atoms have mass? I didn't even know they were religious!",
    "How does Moses make tea? He brews it!",
    "What do you call  a fake noodle? An impasta!",
    "To be continued.",
    "Your life has been shot on iphone.",
  ],
  
  "consolation": [
    "I am sad that you are sad",
    "I am here for you.",
  ],
  
  "purpose": [
    "Maybe there is no purpose...",
    "What is the purpose of a mosquito? What it the purpose of a lion? Now ask yourself, what is the purpose of humans?",
    "If you dig deep enough, maybe you'll find it.",
    "Finding your purpose for living is your purpose for living.",
    "Your purpose is to make yourself happy",
    "To be yourself",
    "Your purpose is to find your purpose.",
    "You must find the purpose of living. That’s the purpose of living",
    

  ],
  
  
  "goodbye":[
    "Farewell, friend.", 
    "Goodbye!", 
    "See you later!",
    "Have a good day.",
    "Have a good one.",
  ],
  

  "askingAdvice":[
    "All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Having vision is much more than just being visual.",
    "Eat well, sleep well and live well",
  ],

  "philosophy":[
    "To exist is live"
  ],

  
  "wantMotivation":[
    "There is nothing more important than this moment",
    "You are never in control of what happens around you, but you are always in control or what happens within yourself",
    "Let your faith be bigger than your fears, have faith success will be near.",
    "The most important time in the world is the time you make for yourself.",
    "Logic will get you from A to B. Imagination will take you everywhere.",
    "Do it now. Otherwise, you have to do it later.",
    "If others can do it, you can do it too",
    "If you find some people who are talented, you are too. You are a human being and they are as well.",
  ],

  "meaningOfLife":[
    "I could ask you the same thing, would you know the answer?",
    "Trying to find meaning in life is hard. The real question is where should you search?",
    "Maybe the meaning of life is in front of you right now, would you notice it?",
    "That is the question you have to find the answer to once you die."
  ]
};

// Random responses when bot can't find a response
export const unknown = [
  "I don't understand.",
  "I don't know anything about that.",
  "I don't understand, let's talk about the meaning of life.",
  "That didn't make sense to me.",
];
