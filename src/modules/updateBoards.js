const playerContainer = document.querySelector('.player-board');
const computerContainer = document.querySelector('.computer-board');

const playerDivs = playerContainer.children;

const updateBoards = (playerBoard, computerBoard) => {
  // Make ships on player board visible
  let count = 0;
  const ships = [2, 3, 4, 5];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (ships.includes(playerBoard[i][j])) {
        playerDivs[count].classList.add('purple');
      } else if (playerBoard[i][j] === 'hit') {
        playerDivs[count].textContent = 'x';
      } else if (playerBoard[i][j] === 'miss') {
        playerDivs[count].textContent = 'o';
      }
      count += 1;
    }
  }

  // Update hits or misses on boards
};

export default updateBoards;
