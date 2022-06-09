const computerContainer = document.querySelector('.computer-board');
const playerContainer = document.querySelector('.player-board');

const computerDivs = computerContainer.children;
const playerDivs = playerContainer.children;

const rotateButton = document.querySelector('.rotate');

const disableBoard = (() => {
  const computerOn = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.add('disable');
    }
  };

  const computerOff = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.remove('disable');
    }
  };

  const playerOn = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.add('disable');
    }
  };

  const playerOff = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.remove('disable');
    }
  };

  const removePlacement = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.remove('placement');
    }
  };

  const resetWidths = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].style.width = '25px';
    }
  };

  const hideButton = () => {
    rotateButton.style.visibility = 'hidden';
  };

  return {
    computerOn, computerOff, playerOn, playerOff, removePlacement, resetWidths, hideButton,
  };
})();

export default disableBoard;
