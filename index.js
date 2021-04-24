'use strict';

let playingNow = 'circle';
const btnField = document.querySelector('.playingField');
const playerIcon = document.querySelector('.kolecko');

btnField.addEventListener('click', (event) => {
  if (playingNow === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIcon.src = 'circle.svg';
    playingNow = 'cross';
  } else if (playingNow === 'cross') {
    event.target.classList.add('board__field--cross');
    playerIcon.src = 'cross.svg';
    playingNow = 'circle';
  }
  event.target.disabled = true;
});
