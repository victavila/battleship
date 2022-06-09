const playerContainer = document.querySelector('.player-board');
const playerDivs = playerContainer.children;

const mouseEvents = (player1Ships, placement) => {
  document.addEventListener('mouseover', (e) => {
    if (e.target.className === 'p-square placement') {
      const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
      playerDivs[id].style.width = `${25 * player1Ships[placement.length].length}px`;
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.className === 'p-square placement') {
      const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
      playerDivs[id].style.width = '25px';
    }
  });
};

export default mouseEvents;
