'use strict';

let diceRoll = Math.trunc(Math.random() * 6) + 1;
let prevImageDiceRoll = document.querySelector('.dice');
prevImageDiceRoll.classList.add('hidden');

let currentPlayer = 0,
  currentScore = 0,
  playing = true;

const scores = [0, 0];

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
  scores[currentPlayer] += currentScore;
  getCurrentPlayerScoreElement().textContent = scores[currentPlayer];
};

const clearPlayersScore = function () {
  scores[currentPlayer] = 0;
  clearCurrentScore();
  getCurrentPlayerScoreElement().textContent = 0;
  getCurrentPlayerElement().classList.remove('player--winner');
  currentPlayer = currentPlayer !== 0 ? 0 : 1;

  scores[currentPlayer] = 0;
  clearCurrentScore();
  getCurrentPlayerScoreElement().textContent = 0;

  currentPlayer = 1;
  playing = true;
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
  currentPlayer = currentPlayer !== 0 ? 0 : 1;
  getCurrentPlayerElement().classList.add('player--active');
};

const switchPlayer = function () {
  clearCurrentScore();
  deleteActiveClassOfPlayer();
};

const setNewDiceRoll = function () {
  diceRoll = Math.trunc(Math.random() * 6) + 1;
};

const isNotOne = function (diceRoll) {
  return diceRoll !== 1 ? true : false;
};

const isNotWin = function () {
  playing = scores[currentPlayer] < 100 ? true : false;
  return playing;
};

const isPlaying = function () {
  return playing;
};

clearPlayersScore();

document.querySelector('.btn--roll').addEventListener('click', function (e) {
  e.preventDefault();

  if (isPlaying()) {
    prevImageDiceRoll.classList.contains('hidden')
      ? prevImageDiceRoll.classList.remove('hidden')
      : 0;

    if (isNotOne(diceRoll)) {
      chooseImage();
      addToCurrentScore();
    } else {
      switchPlayer();
      chooseImage();
    }

    setNewDiceRoll();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function (e) {
  e.preventDefault();

  if (isPlaying()) {
    prevImageDiceRoll.classList.contains('hidden')
      ? prevImageDiceRoll.classList.remove('hidden')
      : 0;

    addToPlayerScore();
    if (isNotWin()) {
      switchPlayer();
    } else {
      getCurrentPlayerElement().classList.add('player--winner');
      getCurrentPlayerElement().classList.remove('player--active');
      prevImageDiceRoll.classList.contains('hidden')
        ? 0
        : prevImageDiceRoll.classList.add('hidden');
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
