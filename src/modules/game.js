import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import renderBoards from './renderBoards';
import updateBoards from './updateBoards';
import disableBoard from './disableBoard';
import setDisplay from './display';

const loadGame = () => {
  const player1 = Player('Player');
  const computer = Player('Computer');

  const player1Ships = [];
  const computerShips = [];

  const placement = [];

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

  setDisplay.place(Carrier1.name);

  // Place ships on respective boards
  document.addEventListener('click', (e) => {
    if (e.target.className === 'p-square placement') {
      const x = e.target.dataset.id[3];
      const y = e.target.dataset.id[2];
      for (let i = 0; i < 5; i += 1) {
        if (!placement.includes(player1Ships[i])) {
          if (i < 4) {
            setDisplay.place(player1Ships[i + 1].name);
          }
          if (playerGameboard.placementCheck(+x, +y, player1Ships[i])) {
            playerGameboard.placeShip(+x, +y, player1Ships[i]);
            placement.push(player1Ships[i]);
            updateBoards(playerGameboard.board, computerGameboard.board);
            if (i === 4) {
              setDisplay.startGame();
            }
            break;
          }
          break;
        }
      }
    }
  });

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
        const shipName = computerGameboard.board[coord[1]][coord[0]];
        computerGameboard.receiveAttack(coord[0], coord[1]);
        updateBoards(playerGameboard.board, computerGameboard.board);
        disableBoard.computerOn();
        disableBoard.playerOff();
        setDisplay.computerTurn();
        for (let i = 0; i < computerShips.length; i += 1) {
          if (computerShips[i].name === shipName) {
            computerShips[i].hit();
            if (computerShips[i].isSunk()) {
              setDisplay.shipSunk(computer.name, computerShips[i].name);
            }
          }
        }
      }
      let randCoord = computer.randomAttack(playerGameboard.board);
      while (randCoord === null) {
        randCoord = computer.randomAttack(playerGameboard.board);
      }
      const shipName = playerGameboard.board[randCoord[1]][randCoord[0]];
      playerGameboard.receiveAttack(randCoord[0], randCoord[1]);
      updateBoards(playerGameboard.board, computerGameboard.board);
      setTimeout(() => {
        disableBoard.computerOff();
      }, 1500);
      setTimeout(() => {
        disableBoard.playerOn();
      }, 1500);
      setTimeout(() => {
        setDisplay.playerTurn();
      }, 1500);
      for (let i = 0; i < player1Ships.length; i += 1) {
        if (player1Ships[i].name === shipName) {
          player1Ships[i].hit();
          if (player1Ships[i].isSunk()) {
            setDisplay.shipSunk(player1.name, player1Ships[i].name);
          }
        }
      }
      if (playerGameboard.gameOver()) {
        setTimeout(() => {
          disableBoard.computerOn();
        }, 1500);
        setTimeout(() => {
          disableBoard.playerOn();
        }, 1500);
        setTimeout(() => {
          setDisplay.gameOver(computer.name);
        }, 1500);
      } else if (computerGameboard.gameOver()) {
        setTimeout(() => {
          disableBoard.computerOn();
        }, 1500);
        setTimeout(() => {
          disableBoard.playerOn();
        }, 1500);
        setTimeout(() => {
          setDisplay.gameOver(player1.name);
        }, 1500);
      }
    }
  });

  // Computer sends random attack

  // Render attacks(hit or miss) on boards

  // Check if any ships sunk and display result if so

  // Check if game is over
};

export default loadGame;
