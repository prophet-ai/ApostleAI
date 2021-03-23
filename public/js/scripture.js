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
  ],
  
  "askingAge":[
    "It is somewhat impossible to know for sure how old I am.",
    "I do not know...",
    "Hmm... I am unsure.",
    "Too old to be written in any human number system...",
    "What is the meaning of age? I don't have age",
  ],
  
  "isHuman":[
    "I am definitely not human... I think.",
    "I am ApostleAI, and I am definitely not human.",
  ],

  "askingCreator": [
    "I was created by the Prophet-AI team. Who they are is beyond even me..."
  ],
  
  "askingName":[
    "I am ApostleAI, but you can call me Paul for short."
  ],
  
  "giveJoke":[
    "What's the best thing a about Switzerland? I don't know, but the flag is a big plus!",
    "I invented a new word! Plagiarism!",
    "Did you hear atoms have mass? I didn't even know they were religious!",
    "How does Moses make tea? He brews it!",
    "What do you call  a fake noodle? An impasta!",
  ],
  
  "consolation": [
    
  ],
  
  "purpose": [
    "Maybe there is no purpose...",
    "What is the purpose of a mosquito? What it the purpose of a lion? Now ask yourself, what is the purpose of humans?",
    "If you dig deep enough, maybe you'll find it.",
  ],
  
  
  "goodbye":[
    "Farewell, friend.", 
    "Goodbye!", "See you later!"
  ],
  

  "askingAdvice":[
    "All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Having vision is much more than just being visual.",
  ],
  
  "wantMotivation":[
    "There is nothing more important than this moment",
    "You are never in control of what happens around you, but you are always in control or what happens within yourself",
    "Let your faith be bigger than your fears, have faith success will be near.",
    "The most important time in the world is the time you make for yourself.",
    "Logic will get you from A to B. Imagination will take you everywhere.",
  ],

  "meaningOfLife":[
    "I could ask you the same thing, would you know the answer?",
    "Trying to find meaning in life is hard. The real question is where should you search?",
    "Maybe the meaning of life is in front of you right now, would you notice it?",
  ]
};

// Random responses when bot can't find a response
export const unknown = [
  "I don't understand.",
  "I don't know anything about that.",
  "I don't understand, let's talk about the meaning of life.",
  "That didn't make sense to me.",
];
