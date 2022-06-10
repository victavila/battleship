import loadGame from './game';

const playButton = document.querySelector('.play');
const rotateButton = document.querySelector('.rotate');

const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const gameLoop = () => {
  loadGame();

  playButton.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    rotateButton.style.display = 'block';
    removeAllChildNodes(playerBoard);
    removeAllChildNodes(computerBoard);
    loadGame();
  });
};

export default gameLoop;
