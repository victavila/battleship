import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import renderBoards from './renderBoards';

const loadGame = () => {
  const player1 = Player('player1');
  const computer = Player('computer');

  const player1Ships = [];
  const computerShips = [];

  const Carrier1 = Ship(5);
  const Battleship1 = Ship(4);
  const Destroyer1 = Ship(3);
  const Submarine1 = Ship(3);
  const PatrolBoat1 = Ship(2);

  player1Ships.push(Carrier1, Battleship1, Destroyer1, Submarine1, PatrolBoat1);

  const Carrier2 = Ship(5);
  const Battleship2 = Ship(4);
  const Destroyer2 = Ship(3);
  const Submarine2 = Ship(3);
  const PatrolBoat2 = Ship(2);

  computerShips.push(Carrier2, Battleship2, Destroyer2, Submarine2, PatrolBoat2);

  const playerGameboard = Gameboard();
  const computerGameboard = Gameboard();

  // Render board
  renderBoards();

  // Render ships

  // Place ships on respective boards

  // Start game loop

  let continueGame = true;

  while (continueGame) {
    // Players attack each others boards

    // Send attacks(hit or miss) to gameboards

    // Render attacks(hit or miss) on boards

    // Check if any ships sunk and display result if so

    // Check if game is over
    continueGame = false;
  }
};

export default loadGame;
