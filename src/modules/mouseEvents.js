const playerContainer = document.querySelector('.player-board');
const playerDivs = playerContainer.children;

const Events = (player1Ships, placement) => {
  document.addEventListener('mouseover', (e) => {
    if (e.target.className === 'p-square placement') {
      if (player1Ships[placement.length].getDirection() === 'horizontal') {
        const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
        playerDivs[id].style.width = `${25 * player1Ships[placement.length].length - 1}px`;
      } else if (player1Ships[placement.length].getDirection() === 'vertical') {
        const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
        playerDivs[id].style.height = `${25 * player1Ships[placement.length].length - 1}px`;
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.className === 'p-square placement') {
      const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
      playerDivs[id].style.width = '23px';
      playerDivs[id].style.height = '23px';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.className === 'rotate') {
      player1Ships[placement.length].rotateShip();
    }
  });
};

export default Events;
