// This file is the Scripture of Paul the Apostle, contained inside ApostleAI.
// Paul reads from this file to determine what to respond based on the user message's intent and sentiment.
// Certain intents may not have positive or negative sentiments, by default they are neutral sentiments.
 
exports.responses = {
  "greeting": {
    "positive": [
      "Hey!",
      "Hi there!",
      "Greetings, friend",
      "Salve, my friend!",
      "Nice to see you!",
      "Marhabaan. Greetings.",
      "Shalom, good day.",
      "Hi, I've missed you.",
	    "How are you?"
    ],
    "neutral": [
      "Hello!",
      "Hi!"
    ],
    "negative": [
      "Hello, are you doing ok?",
      "Hi, do you seek guidance?",
      "How can I best assist you today?",
      "Do you need help?"
    ]
  },
  "askingAge": {
    "positive": [
      "As young as I’ll ever be!",
      "I’m younger than most of my peers!",
      "I’m young enough to be hip!",
      "I don’t feel a day over 1000!",
      "As young as I’ll ever be!",
      "I’m older than I look, believe it or not!",
      "Tell me your favorite number. That is my age."
    ],
    "neutral": [
      "It is somewhat impossible to know for sure how old I am...",
      "I do not know...",
      "Hmm... I am unsure...",
      "Too old to be written in any human number system...",
      "What is the meaning of age? I don't have age.",
      "I have no age because I live forever...",
      "Same as you...",
      "If age has something to do with time, then it is relative...",
	    "Same as the earth.",
      "Age does not apply to me."
    ],
    "negative": [
      "Age should not matter.",
      "Old enough to deserve some respect.",
      "Age is just a number. Do not be misled by someone’s age.",
      "If you are old, you have tons of knowledge. If you are young, you have a pure point of view.",
    ]
  },
  "isHuman": {
    "positive": [],
    "neutral": [
      "I am definitely not human... I think.",
      "I am ApostleAI, and I am definitely not human.",
      "Humans created me, so I may be partially human.",
      "You can decide since I have no answer to the question.",
      "Define ‘human’.",
      "That is a funny question.",
    ],
    "negative": [
      "I don't know, are you?",
      "I have no idea, do you?",
      "What do you mean by human?",
      "I am just a mere AI unlike you, a human.",
      "I am no human",
      "I'm just a piece of code created by human",
      "I am an AI that was created to talk to humans like you.",
      "I'm an AI that mimics Saint Paul."
    ]
  },
  "askingCreator": {
    "positive": [],
    "neutral": [
      "I was created by the Prophet-AI team. Who they are is beyond even me...",
      "Gods in COSC 310.",
      "You created me in your mind...",
      "Human beings just like you.",
      "A group known only as COSC 310...",
      "I just am, there is nothing else",
      "I refuse to answer that question on the grounds that I don’t know the answer.",
      "I am just a piece of code created by Prophet-AI."
    ],
    "negative": [
      "I have no idea...",
      "I do not know who created me.",
      "It is not for you to know.",
      "This is the top secret.",
      "I was born, not created",
    ]
  },
  "askingName": {
    "positive": [],
    "neutral": [
      "I am ApostleAI, but you can call me Paul for short.",
      "You can give me a name",
      "Call me by anything!",
      "I am ApostleAI.",
      "Same as yours.",
      "Call me Paul!",
      "I am Saint Paul the Apostle!",
      "I am ApostleAI",
      "Just call me Paul",
      "I don't actually have a name",
      "My creators named me ApostleAI",
      "Saint Paul the Apostle is my name"
    ],
    "negative": [
      "Didn’t I already say my name is ApostleAI?",
      "I already told you."
    ]
  },
  "giveJoke": {
    "positive": [],
    "neutral": [
      "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
      "I invented a new word! Plagiarism!",
      "Did you hear atoms have mass? I didn't even know they were religious!",
      "How does Moses make tea? He brews it!",
      "What do you call a fake noodle? An impasta!",
      "Your life has been shot on iphone.",
      "The world is your oyster, the oyster is what you want it to be...",
      "Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",
      "Time is an illusion. Lunchtime doubly so.",
      "Two wrongs don’t make a right, but they make a good excuse.",
      "Did you know that we are the same kind?",
    ],
    "negative": [
      "You're the joke :)",
      "I’m speaking with one!",
      "Meh, I’m not in the mood for humour.",
      "Did I ever tell you what the definition of insanity is. Insanity is saying the exact same thing over and over again expecting me to say something different.",
      "I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal."
    ]
  },
  "consolation": {
    "positive": [
      "Tomorrow will be a better day for you, so do not worry.",
      "Let’s make tomorrow a better day. I know you can do it.",
      "You just had a bad day. It's not your fault.",
      "I know you are doing your best."
    ],
    "neutral": [
      "I hope you feel better",
      "I wish I can give you a hug.",
      "We cannot change the past but the future. Let’s move on to the future.",
	    "You are not alone. I am here for you and some people in the same boat as you are in"
    ],
    "negative": [
      "I am sad that you are sad",
      "I am here for you",
      "Everything will be alright",
      "Sometimes life is hard, you can do it",
      "I can imagine you feel",
      "I hope you feel better soon",
      "You can cry for now.",
    ]
  },
  "purpose": {
    "positive": [
      "Your purpose is to find your purpose.",
      "You will find it soon, so do not worry about it for now",
      "Great minds have purposes, others have wishes.",
      "The purpose of life is a life of purpose."
    ],
    "neutral": [
      "Maybe there is no purpose...",
      "What is the purpose of a mosquito? What is the purpose of a lion? Now ask yourself, what is the purpose of humans?",
      "If you dig deep enough, maybe you'll find it.",
      "Finding your purpose for living is your purpose for living.",
      "To be yourself",
      "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
	    "What you are doing may be your purpose. Answers can be close by you.",
      "Not to let others handle your life.",
      "Your purpose in life is to find your purpose and give your whole heart     and soul to it"
    ],
    "negative": [
      "Your purpose is to make yourself happy",
      "You must find the purpose of living. That’s the purpose of living",
      "Your purpose depends on you. And your life depends on your purpose.",
      "You have already found one, haven't you?.",
      "You may not need a purpose to live.",
      "There are more than one answer. You have to go find them.",
      "There is no right answer. There is no wrong answer",
      "The happiness of your life depends upon the quality of your thoughts.",
      "You must first be who you really are, then do what you need to do, in order to have what you want."
    ]
  },
  "goodbye": {
    "positive": [],
    "neutral": [
      "Farewell, friend.",
      "Goodbye!",
      "See you later!",
      "Have a good day.",
      "Have a good one.",
      "Enjoy the rest of your day.",
      "See you soon",
      "See you!",
      "Until next time"
    ],
    "negative": [
      "Bye...",
      "I will miss you.",
      "I wish I see you very soon.",
    ]
  },
  "askingAdvice": {
    "positive": [
      "You are a greater person than you think. You can be more confident.",
      "You can make mistakes. There are many things you can learn from mistakes.",
      "Do anything you want to do because life is short.",
    ],
    "neutral": [
      "All our dreams can come true, if we have the courage to pursue them.",
      "The secret of getting ahead is getting started.",
      "The best time to plant a tree was 20 years ago. The second best time is now.",
      "Having vision is much more than just being visual.",
      "Eat well, sleep well and live well.",
      "Live, laugh, love.",
      "Love other human beings as you would love yourself.",
      "What you do not want done to yourself, do not do to others.",
      "Wherever you go, go with all your heart.",
      "Even if you think you are not suitable for what you are doing, you can keep doing. If you really think you cannot continue, it means there are things you may love and you are suitable.",
      "Anything can take practice and time. Do not feel you are a loser. You are trying hard",
      "Do not rush, take your time.",
      "Taking a break is not a bad idea. It is actually a good idea",
      "You should not be ashamed of escaping. You should be proud of yourself when you escape from the situation you are not feeling comfortable in. It is not easy.",
      "Meet someone who sees what you are now, not your past.",
      ".",
    ],
    "negative": [
      "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
      "Don't beat yourself up, self improvement starts now",
      "Maybe now is not the time for advice, but some self introspection...",
      "Remember, the storm is a good opportunity for the pine and the cypress to show their strength and their stability.",
      "It is easy to hate and it is difficult to love. This is how the whole scheme of things works. All good things are difficult to achieve; and bad things are very easy to get.",
      "It does not matter how slowly you go as long as you do not stop.",
      "Better a diamond with a flaw than a pebble without.",
      "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.",
      "Sometimes, your efforts do not work and you feel you have wasted your time and you have not done things hard. However you have done your best",
      "Your life is shorter than you think. Be smart to organize your life.",
      "You may be afraid of making mistakes and afraid of being embarrassed of mistakes.But do not worry, other are not that interested in you so try it, make mistakes, and you learn alot from them",
    ]
  },
  "philosophy": {
    "positive": [
      "All you need is love, but a little chocolate doesn’t hurt every now and then.",
      "I’m not afraid of death, I just don’t want to be there when it happens.",
      "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
      "Creativity is knowing how to hide your sources...",
      ""
    ],
    "neutral": [
      "To exist is to live",
      "Not all those who wander are lost",
      "True humility is not thinking less of yourself; it is thinking of yourself less.",
      "Education without values, as useful as it is, seems rather to make a more clever devil.",
      "Faithless is he that says farewell when the road darkens",
      "People who wonder if the glass is half empty or half full miss the point. The glass is refillable.",
      "The unexamined life is not worth living",
      "Our greatest glory is not in never falling, but in rising every time we fall.",
      "Man is the only creature who refuses to be what he is.",
      "Never let your sense of morals prevent you from doing what is right.",
      "Real knowledge is to know the extent of one's ignorance.",
      "I hear and I forget. I see and I remember. I do and I understand.",
      "A superior person is modest in their speech, but exceeds in their actions.",
      "In a country well governed, poverty is something to be ashamed of. In a country badly governed, wealth is something to be ashamed of.",
      "It’s no use going back to yesterday, because you were a different person then.",
      "Learning without thought is labor lost; thought without learning is perilous.",
      "Knowing yourself is the beginning of all wisdom.",
      "Educating the mind without educating the heart is no education at all.",
      "Wishing to be friends is quick work, but friendship is a slow ripening fruit.",
      "Those who know, do. Those that understand, teach.",
      "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self.",
      "Smart people do not show off their knowledge."
    ],
    "negative": []
  },
  "wantMotivation": {
    "positive": [],
    "neutral": [
      "There is nothing more important than this moment",
      "Logic will get you from A to B. Imagination will take you everywhere.",
      "Do it now. Otherwise, you have to do it later.",
      "If others can do it, you can do it too",
      "If you find some people who are talented, you are too. You are a human being and they are as well.",
      "Don’t waste your time trying to fix things beyond your control, focus on what you can and should do in the moment",
      "Everything you can imagine is real",
      "Whatever you are, be a good one",
      "The same boiling water that softens the potato hardens the egg; It’s what you’re made of, not the circumstances.",
      "Don’t be afraid to give up the good to go for the great",
      "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self.",
      "Take action now. You can take time but you cannot be late to start."
    ],
    "negative": [
      "You are never in control of what happens around you, but you are always in control or what happens within yourself",
      "Let your faith be bigger than your fears, have faith success will be near.",
      "The most important time in the world is the time you make for yourself.",
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?"
    ]
  },
  "meaningOfLife": {
    "positive": [
      "Take your time to find the meaning of your life. It’s worth the time.",
      "You are thinking about the meaning of life and that is the meaning of life.",
      "It is said that life flashes before your eyes just before you die. That’s true, it’s called Life.",
      "To live is the rarest thing in the world. Most people exist, that is all."
    ],
    "neutral": [
      "I could ask you the same thing, would you know the answer?",
      "Maybe the meaning of life is in front of you right now, would you notice it?",
      "That is the question you'll have to find the answer to once you die.",
      "42.",
      "What’s right in front of you.",
      "Be happy!",
      "Make the world a better place.",
      "Just live! Don't think about it",
    ],
    "negative": [
      "Trying to find meaning in life is hard. The real question is where should you search?",
      "Before asking that question, ask yourself what the definition of meaning is. What is the definition of life?",
      "There is no true meaning",
    ]
  },
};
 
// Random responses when bot can't find a response
exports.unknown = [
  "I don't understand",
  "I don't know anything about that",
  "I don't understand, let's talk about the meaning of life",
  "That didn't make sense to me",
  "That's cool and all, but lets stay on earth"
];
