'use strict';

let randomnumber = Math.floor(Math.random() * 20 + 1);

let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputnumber = Number(document.querySelector('.guess').value);
  console.log(inputnumber);

  var score = Number(document.querySelector('.score').textContent);
  if (score <= 1) {
    document.querySelector('.score').textContent = 0;
    displaymessage('💥You Lost the game');
  } else {
    if (!inputnumber) {
      displaymessage('⛔ No number');
    } else if (randomnumber > inputnumber) {
      displaymessage('👇too low');
    } else if (randomnumber < inputnumber) {
      displaymessage('☝too high');
    } else if (randomnumber == inputnumber) {
      displaymessage('✅Correct answer');
      if (highscore < score) {
        highscore = score;
      }
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = randomnumber;
      document.body.style.background = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      return;
    }
    document.querySelector('.score').textContent = score - 1;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.body.style.background = '#222';
  randomnumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomnumber);
  document.querySelector('.number').style.width = '15rem';
  let score = 20;
  document.querySelector('.score').textContent = score;

  displaymessage('Start guessing...');

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
