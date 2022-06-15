'use strict';

let diceRoll = Math.trunc(Math.random() * 6) + 1;
let prevImageDiceRoll = document.querySelector('.dice');
prevImageDiceRoll.classList.add('hidden');

let currentPlayer = 0,
  currentScore = 0;

const scores = [0, 0]; // use later

const chooseImage = function () {
  prevImageDiceRoll.src = `dice-${diceRoll}.png`;
};

const addToCurrentScore = function () {
  currentScore += diceRoll;
  getCurrentScoreElement().textContent = currentScore;
};

const clearCurrentScore = function () {
  getCurrentScoreElement().textContent = currentScore = 0;
};

const addToPlayerScore = function () {
  let score = getCurrentScoreElement(),
    playerScore = getCurrentPlayerScoreElement();
  playerScore.textContent =
    Number(playerScore.textContent) + Number(score.textContent);
  score.textContent = currentScore = 0;
};

const clearPlayersScore = function () {
  getCurrentScoreElement().textContent = currentScore = 0;
  getCurrentPlayerScoreElement().textContent = 0;
  getCurrentPlayerElement().classList.remove('player--winner');
  currentPlayer = switchPlayer();
  getCurrentScoreElement().textContent = 0;
  getCurrentPlayerScoreElement().textContent = 0;
  getCurrentPlayerElement().classList.remove('player--winner');
  currentPlayer = 1;
  deleteActiveClassOfPlayer();
};

const getCurrentPlayerScoreElement = function () {
  return document.querySelector(`#score--${currentPlayer}`);
};

const getCurrentScoreElement = function () {
  return document.querySelector(`#current--${currentPlayer}`);
};

const getCurrentPlayerElement = function () {
  return document.querySelector(`.player--${currentPlayer}`);
};

const deleteActiveClassOfPlayer = function () {
  getCurrentPlayerElement().classList.remove('player--active');
  currentPlayer = switchPlayer();
  getCurrentPlayerElement().classList.add('player--active');
};

const switchPlayer = function () {
  return currentPlayer !== 0 ? 0 : 1;
};

const setNewDiceRoll = function () {
  diceRoll = Math.trunc(Math.random() * 6) + 1;
};

const isNotOne = function (diceRoll) {
  return diceRoll !== 1 ? true : false;
};

const isWin = function () {
  return getCurrentPlayerScoreElement().textContent >= 100;
};

clearPlayersScore();

document.querySelector('.btn--roll').addEventListener('click', function (e) {
  e.preventDefault();

  prevImageDiceRoll.classList.contains('hidden')
    ? prevImageDiceRoll.classList.remove('hidden')
    : 0;

  if (!isWin()) {
    if (isNotOne(diceRoll)) {
      chooseImage();
      addToCurrentScore();
    } else {
      clearCurrentScore();
      deleteActiveClassOfPlayer();
      chooseImage();
    }

    setNewDiceRoll();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function (e) {
  e.preventDefault();

  prevImageDiceRoll.classList.contains('hidden')
    ? prevImageDiceRoll.classList.remove('hidden')
    : 0;

  if (!isWin()) {
    addToPlayerScore();
    if (!isWin()) {
      deleteActiveClassOfPlayer();
    } else {
      getCurrentPlayerElement().classList.add('player--winner');
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function (e) {
  e.preventDefault();

  clearPlayersScore();

  prevImageDiceRoll.classList.contains('hidden')
    ? 0
    : prevImageDiceRoll.classList.add('hidden');
});
