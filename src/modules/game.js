import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import renderBoards from './renderBoards';
import updateBoards from './updateBoards';

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

  // Start game loop
  let continueGame = true;

  while (continueGame) {
    // Players attack each others boards

    // Send attacks(hit or miss) to gameboards
    playerGameboard.receiveAttack(0, 0);
    playerGameboard.receiveAttack(0, 1);

    // Render attacks(hit or miss) on boards
    updateBoards(playerGameboard.board, computerGameboard.board);

    // Check if any ships sunk and display result if so

    // Check if game is over
    continueGame = false;
  }
};

export default loadGame;
