const computerContainer = document.querySelector('.computer-board');
const playerContainer = document.querySelector('.player-board');

const computerDivs = computerContainer.children;
const playerDivs = playerContainer.children;

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

  return {
    computerOn, computerOff, playerOn, playerOff, removePlacement,
  };
})();

export default disableBoard;
