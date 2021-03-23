 "use strict";

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

} 

const phrases = [
  "To realize the truth, you have to cross the boundaries of all religions and prophets",
  "Ask me about life...",
  "A serious prophet upon predicting a flood should be the first man to climb a tree. This would demonstrate that he was indeed a seer",
  "I can give advice...",
  "The ink of the scholar is more sacred than the blood of the martyr",
  "Need motivation?",
  "I can control my passions and emotions if I can understand their nature",
  "I can help you...",
  "The mind is furnished with ideas by experience alone",
  "Do you need answers?",
  "Man is born free, but is everywhere in chains",
  "Want to know your purpose?",
  "I don\’t know why we are here, but I\’m pretty sure it is not in order to enjoy ourselves",
  "Need answers to hard questions?",
  "That man is wisest who, like Socrates, realizes that his wisdom is worthless",
  "Tell me what's on your mind...",
  "All that is necessary for the triumph of evil is that good men do nothing",
  "Thinking is hard, let me do it for you...",
  "He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or a god",
  "Tell me about it...",
  "Metaphysics is a dark ocean without shores or lighthouse, strewn with many a philosophic wreck",
  "I may not be human, or be able to feel empathy, but I can simulate it...",
  "Whether you take the doughnut hole as a blank space or as an entity unto itself is a purely metaphysical question and does not affect the taste of the doughnut one bit.",
  "Is there something you seek?",
  "The less you know, the more you will be known. The less you want, the more you will have. The less you are, the more you will be.",
  "Do you lack purpose? I can help you find it...",
  "Attention is the money of the universe; what you pay attention to is what you buy.",
  "Motivation is hard to find, just ask for it...",
  "Knowledge from the unknowable. Information offered by the void. There is nothing and then this, existence found in truth."
];

const el = document.querySelector(".textScramble");
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 6000);
  });
  counter = (counter + 1) % phrases.length;
};

next();