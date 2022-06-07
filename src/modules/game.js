import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import renderBoards from './renderBoards';
import updateBoards from './updateBoards';
import disableBoard from './disableBoard';

const loadGame = () => {
  const player1 = Player('player1');
  const computer = Player('computer');

  const player1Ships = [];
  const computerShips = [];

  const Carrier1 = Ship(5, 'Carrier');
  const Battleship1 = Ship(4, 'Battleship');
  const Destroyer1 = Ship(3, 'Destroyer');
  const Submarine1 = Ship(3, 'Submarine');
  const PatrolBoat1 = Ship(2, 'Patrol');

  player1Ships.push(Carrier1, Battleship1, Destroyer1, Submarine1, PatrolBoat1);

  const Carrier2 = Ship(5, 'Carrier');
  const Battleship2 = Ship(4, 'Battleship');
  const Destroyer2 = Ship(3, 'Destroyer');
  const Submarine2 = Ship(3, 'Submarine');
  const PatrolBoat2 = Ship(2, 'Patrol');

  computerShips.push(Carrier2, Battleship2, Destroyer2, Submarine2, PatrolBoat2);

  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  renderBoards();

  // Place ships on respective boards
  playerGameboard.placeShip(0, 0, Carrier1);
  playerGameboard.placeShip(0, 2, Battleship1);
  playerGameboard.placeShip(0, 4, Destroyer1);
  playerGameboard.placeShip(0, 6, Submarine1);
  playerGameboard.placeShip(0, 8, PatrolBoat1);

  computerGameboard.placeShip(0, 0, Carrier2);
  computerGameboard.placeShip(0, 2, Battleship2);
  computerGameboard.placeShip(0, 4, Destroyer2);
  computerGameboard.placeShip(0, 6, Submarine2);
  computerGameboard.placeShip(0, 8, PatrolBoat2);

  // Render boards
  updateBoards(playerGameboard.board, computerGameboard.board);

  document.addEventListener('click', (e) => {
    if (e.target.className === 'c-square') {
      const x = e.target.dataset.id[3];
      const y = e.target.dataset.id[2];
      const coord = player1.attack(x, y, computerGameboard.board);
      if (coord !== null) {
        computerGameboard.receiveAttack(coord[0], coord[1]);
        updateBoards(playerGameboard.board, computerGameboard.board);
        disableBoard.on();
      }
      let randCoord = computer.randomAttack(playerGameboard.board);
      while (randCoord === null) {
        randCoord = computer.randomAttack(playerGameboard.board);
      }
      playerGameboard.receiveAttack(randCoord[0], randCoord[1]);
      setTimeout(updateBoards(playerGameboard.board, computerGameboard.board), 5000);
      disableBoard.off();
      if (playerGameboard.gameOver() || computerGameboard.gameOver()) {
        disableBoard.on();
      }
    }
  });

  // Computer sends random attack

  // Render attacks(hit or miss) on boards

  // Check if any ships sunk and display result if so

  // Check if game is over
};

export default loadGame;
