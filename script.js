'use strict';

let diceRoll = Math.trunc(Math.random() * 6) + 1;
let prevImageDiceRoll = document.querySelector('.dice');
let currentPlayer = 0;

const chooseImage = function () {
  switch (diceRoll) {
    case 1:
      prevImageDiceRoll.src = 'dice-1.png';
      break;
    case 2:
      prevImageDiceRoll.src = 'dice-2.png';
      break;
    case 3:
      prevImageDiceRoll.src = 'dice-3.png';
      break;
    case 4:
      prevImageDiceRoll.src = 'dice-4.png';
      break;
    case 5:
      prevImageDiceRoll.src = 'dice-5.png';
      break;
    case 6:
      prevImageDiceRoll.src = 'dice-6.png';
      break;
  }
};

const addToCurrentScore = function () {
  let currentScore = getCurrentScoreElement();
  currentScore.textContent = Number(currentScore.textContent) + diceRoll;
};

const clearCurrentScore = function () {
  getCurrentScoreElement().textContent = 0;
};

const addToPlayerScore = function () {
  let currentScore = getCurrentScoreElement(),
    playerScore = getPlayerScoreElement();
  playerScore.textContent =
    Number(playerScore.textContent) + Number(currentScore.textContent);
  currentScore.textContent = 0;
};

const getPlayerScoreElement = function () {
  return document.querySelector(`#score--${currentPlayer}`);
};

const getCurrentScoreElement = function () {
  return document.querySelector(`#current--${currentPlayer}`);
};

const switchPlayer = function (currentPlayer) {
  return currentPlayer === 0 ? 1 : 0;
};

const setNewDiceRoll = function () {
  diceRoll = Math.trunc(Math.random() * 6) + 1;
};

const isOne = function (diceRoll) {
  return diceRoll !== 1 ? true : false;
};

document.querySelector('.btn--roll').addEventListener('click', function (e) {
  e.preventDefault();

  if (isOne(diceRoll)) {
    chooseImage();
    addToCurrentScore();
  } else {
    clearCurrentScore();
    currentPlayer = switchPlayer(currentPlayer);
    chooseImage();
  }

  setNewDiceRoll();
});

document.querySelector('.btn--hold').addEventListener('click', function (e) {
  e.preventDefault();

  addToPlayerScore();
  currentPlayer = switchPlayer(currentPlayer);
});
