'use strict';

// scores
let score = 20;
let highscore = 0;

// Elements
const scoreEL = document.querySelector('.score');
const numberEL = document.querySelector('.number');
const highScoreEL = document.querySelector('.highscore');
const checkBtnEL = document.querySelector('.check');
const againBtnEL = document.querySelector('.again');
const messageEL = document.querySelector('.message');
const bodyEL = document.querySelector('body');

//Generate random number (Secret number)
let secretNumber = Math.floor(Math.random() * 20) + 1;

checkBtnEL.addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);

  if (!guessNum) {
    messageEL.textContent = '⛔ Please input a number! ';
    // when player wins!
  } else if (guessNum === secretNumber) {
    messageEL.textContent = '🎉 Correct Number!!';
    bodyEL.style.backgroundColor = '#60b347';
    numberEL.style.width = '30rem';
    numberEL.textContent = secretNumber;

    // when player break highscore record
    if (score > highscore) {
      highscore = score;
      highScoreEL.textContent = highscore;
    }
  } else if (guessNum > secretNumber) {
    if (score > 1) {
      messageEL.textContent = 'Too High! 📈';
      score--;
      scoreEL.textContent = score;
    } else {
      score = 0;
      messageEL.textContent = 'Game Over!';
    }
  } else if (guessNum < secretNumber) {
    if (score > 1) {
      messageEL.textContent = 'Too Low! 📉';
      score--;
      scoreEL.textContent = score;
    } else {
      score = 0;
      messageEL.textContent = 'Game Over!';
    }
  }
});

//reset button
againBtnEL.addEventListener('click', function () {
  score = 20;
  scoreEL.textContent = score;

  messageEL.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  //reset number
  secretNumber = Math.floor(Math.random() * 20) + 1;
  numberEL.textContent = '?';

  //reset CSS box & background color
  bodyEL.style.backgroundColor = '#222';
  numberEL.style.width = '15rem';
});
