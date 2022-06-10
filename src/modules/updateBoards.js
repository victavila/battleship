const playerContainer = document.querySelector('.player-board');
const computerContainer = document.querySelector('.computer-board');

const playerDivs = playerContainer.children;
const computerDivs = computerContainer.children;

const updateBoards = (playerBoard, computerBoard) => {
  // Make ships on player board visible
  let count = 0;
  const ships = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (ships.includes(playerBoard[i][j])) {
        playerDivs[count].classList.add('purple');
      } else if (playerBoard[i][j] === 'hit') {
        playerDivs[count].textContent = '\u00d7';
        playerDivs[count].classList.add('hit');
      } else if (playerBoard[i][j] === 'miss') {
        playerDivs[count].textContent = '\u2022';
        playerDivs[count].classList.add('miss');
      }
      if (computerBoard[i][j] === 'hit') {
        computerDivs[count].textContent = '\u00d7';
        computerDivs[count].classList.add('hit');
      } else if (computerBoard[i][j] === 'miss') {
        computerDivs[count].textContent = '\u2022';
        computerDivs[count].classList.add('miss');
      }
      count += 1;
    }
  }
};

export default updateBoards;
