'use strict';

let playingNow = 'circle';
const btnField = document.querySelector('.playingField');
const playerIcon = document.querySelector('.kolecko');

btnField.addEventListener('click', (event) => {
  if (playingNow === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIcon.src = 'circle.svg';
    playingNow = 'cross';

    if (isWinningMove(event.target)) {
      setTimeout(function () {
        let winner = alert('tadáááá - 〇 vítězí');
      }, 200);
    }
  } else if (playingNow === 'cross') {
    event.target.classList.add('board__field--cross');
    playerIcon.src = 'cross.svg';
    playingNow = 'circle';

    if (isWinningMove(event.target)) {
      setTimeout(function () {
        let winner = alert('tadáááá - ✕ vítězí');
      }, 200);
    }
  }
  event.target.disabled = true;
});

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const boardSize = 10;
const fields = document.querySelectorAll('.playingField button');
const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  return false;
};
