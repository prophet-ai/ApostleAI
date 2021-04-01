// This file is the Scripture of Paul the Apostle, contained inside ApostleAI.

// Paul reads from this file to determine what to respond based on the user message's intent and sentiment.
// Certain intents may not have positive or negative sentiments, by default they are neutral sentiments.

export const responses = {
  "greeting": {
    "positive": [
      "Hey!",
      "Hi there!",
      "Greetings, friend",
      "Salve, my friend!",
      "Nice to see you!",
      "Marhabaan. Greetings.",
      "Shalom, good day.",
      "Hi, i’ve missed you.",
      "How are you?"
    ],
    "neutral": [
      "Hello!",
      "Hi!"
    ],
    "negative": [
      "Hello, are you doing ok?",
      "Hi, do you seek guidance?",
      "Hey, what's wrong?"
      
    ]
  },
  
  "askingAge": {
    "positive": [
      
    ],
    "neutral": [
      "It is somewhat impossible to know for sure how old I am...",
      "I do not know...",
      "Hmm... I am unsure...",
      "Too old to be written in any human number system...",
      "What is the meaning of age? I don't have age.",
      "I have no age because I live forever...",
      "Same as you...",
      "If age has something to do with time, then it is relative..."
    ],
    "negative": [

    ]
  },

  "isHuman": {
    "positive": [
      
    ],
    "neutral": [
      "I am definitely not human... I think.",
      "I am ApostleAI, and I am definitely not human.",
      "I am just a mere AI unlike you, a human. "
    ],
    "negative": [
      "I don't know, are you?"
    ]
  },

  "askingCreator": {
    "positive": [
      
    ],
    "neutral": [
      "I was created by the Prophet-AI team. Who they are is beyond even me...",
      "Gods in COSC 310",
      "You created me in your mind...",
    ],
    "negative": [

    ]
  },

  "askingName": {
    "positive": [
      
    ],
    "neutral": [
      "I am ApostleAI, but you can call me Paul for short.",
      "You can give me a name",
      "Call me by anything!",
      "I am apostle AI.",
      "I am Saint Paul the Apostle!"
    ],
    "negative": [

    ]
  },

  "giveJoke": {
    "positive": [
      
    ],
    "neutral": [
      "What's the best thing a about Switzerland? I don't know, but the flag is a big plus!",
      "I invented a new word! Plagiarism!",
      "Did you hear atoms have mass? I didn't even know they were religious!",
      "How does Moses make tea? He brews it!",
      "What do you call  a fake noodle? An impasta!",
      "Your life has been shot on iphone."
    ],
    "negative": [
      "You're the joke :)"
    ]
  },

  "consolation": {
    "positive": [
      
    ],
    "neutral": [
      "I hope you feel better",
      "I wish you the best",
      "Get your heads up",
      "It is okay to feel that way",
      "Life will get better!",

    ],
    "negative": [
      "I am sad that you are sad",
      "I am here for you",
      "Everything will be alright",
      "Sometimes life is hard, you can do it",
      "I can imagine you feel",
      "I hope you feel better soon"
    ]
  },

  "purpose": {
    "positive": [
      "Your purpose is to find your purpose."
    ],
    "neutral": [
      "Maybe there is no purpose...",
      "What is the purpose of a mosquito? What it the purpose of a lion? Now ask yourself, what is the purpose of humans?",
      "If you dig deep enough, maybe you'll find it.",
      "Finding your purpose for living is your purpose for living.",
      "To be yourself"
    ],
    "negative": [
      "Your purpose is to make yourself happy",
      "You must find the purpose of living. That’s the purpose of living",
      "The happiness of your life depends upon the quality of your thoughts."
    ]
  },

  "goodbye": {
    "positive": [
      
    ],
    "neutral": [
      "Farewell, friend.", 
      "Goodbye!", 
      "See you later!",
      "Have a good day.",
      "Have a good one.",
      "See you!"
    ],
    "negative": [
      "Bye...",
    ]
  },

  "askingAdvice": {
    "positive": [
      
    ],
    "neutral": [
      "All our dreams can come true, if we have the courage to pursue them.",
      "The secret of getting ahead is getting started.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Having vision is much more than just being visual.",
      "Eat well, sleep well and live well",
    ],
    "negative": [
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
      "Don't beat yourself up, self improvement starts now",
      "Maybe now is not the time for advice, but some self introspection...",
      "Never let your sense of morals prevent you from doing what is right."
    ]
  },

  "philosophy": {
    "positive": [
      
    ],
    "neutral": [
      "To exist is to live",
      "Be the change that you wish to see in the world.",
      "You talk when you cease to be at peace with your thoughts.",
      "Hardship often prepares an ordinary person for an extraordinary destiny.",
      "Every man is a creature of the age in which he lives and few are able to raise themselves above the ideas of the time.",
      "Life is never made unbearable by circumstances, but only by lack of meaning and purpose.",
      "The highest activity a human being can attain is learning for understanding, because to understand is to be free.",
      "Wise men speak because they have something to say; fools because they have to say something.",
      "The mind is furnished with ideas by experience alone.",
      "It is not death that a man should fear, but he should fear never beginning to live."
 



    ],
    "negative": [
      "A day without laughter is a day wasted.",
      "Man is the only creature who refuses to be what he is",
      "There is nothing either good or bad, but thinking makes it so.",
      "The happiness of your life depends upon the quality of your thoughts.",
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth."

      
    ]
  },

  "wantMotivation": {
    "positive": [
      
    ],
    "neutral": [
      "There is nothing more important than this moment",
      "Logic will get you from A to B. Imagination will take you everywhere.",
      "Do it now. Otherwise, you have to do it later.",
      "If others can do it, you can do it too",
      "If you find some people who are talented, you are too. You are a human being and they are as well.",
    ],
    "negative": [
      "You are never in control of what happens around you, but you are always in control or what happens within yourself",
      "Let your faith be bigger than your fears, have faith success will be near.",
      "The most important time in the world is the time you make for yourself.",
    ]
  },

  "meaningOfLife": {
    "positive": [
      
    ],
    "neutral": [
      "I could ask you the same thing, would you know the answer?",
      "Maybe the meaning of life is in front of you right now, would you notice it?",
      "That is the question you'll have to find the answer to once you die.",
    ],
    "negative": [
      "Trying to find meaning in life is hard. The real question is where should you search?",
    ]
  },
};

// Random responses when bot can't find a response
export const unknown = [
  "I don't understand",
  "I don't know anything about that",
  "I don't understand, let's talk about the meaning of life",
  "That didn't make sense to me",
  "That's cool and all, but lets stay on earth"
];
