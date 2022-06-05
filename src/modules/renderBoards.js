const playerContainer = document.querySelector('.player-board');
const computerContainer = document.querySelector('.computer-board');

const renderBoards = () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const playerSquare = document.createElement('div');
      playerSquare.setAttribute('data-id', `P-${i}${j}`);
      playerSquare.classList.add('square');
      playerContainer.appendChild(playerSquare);

      const computerSquare = document.createElement('div');
      computerSquare.setAttribute('data-id', `C-${i}${j}`);
      computerSquare.classList.add('square');
      computerContainer.appendChild(computerSquare);
    }
  }
};

export default renderBoards;
