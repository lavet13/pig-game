'use strict';

let diceRoll = Math.trunc(Math.random() * 6) + 1;
let imageDiceRoll = document.createElement('img');

const chooseImage = function (dice) {
  switch (dice) {
    case 1:
      imageDiceRoll.src = 'dice-1.png';
      break;
    case 2:
      imageDiceRoll.src = 'dice-2.png';
      break;
    case 3:
      imageDiceRoll.src = 'dice-3.png';
      break;
    case 4:
      imageDiceRoll.src = 'dice-4.png';
      break;
    case 5:
      imageDiceRoll.src = 'dice-5.png';
      break;
    case 6:
      imageDiceRoll.src = 'dice-6.png';
      break;
  }
};

chooseImage(diceRoll);
