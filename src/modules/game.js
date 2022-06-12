import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';
import renderBoards from './renderBoards';
import updateBoards from './updateBoards';
import dom from './dom';
import setDisplay from './display';
import Events from './mouseEvents';

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

  dom.computerOn();

  // Place ships on respective boards
  document.addEventListener('click', (e) => {
    if (e.target.className === 'p-square placement') {
      const x = e.target.dataset.id[3];
      const y = e.target.dataset.id[2];
      for (let i = 0; i < 5; i += 1) {
        if (!placement.includes(player1Ships[i])) {
          if (playerGameboard.placementCheck(+x, +y, player1Ships[i])) {
            if (i < 4) {
              setDisplay.place(player1Ships[i + 1].name);
            }
            playerGameboard.placeShip(+x, +y, player1Ships[i]);
            placement.push(player1Ships[i]);
            updateBoards(playerGameboard.board, computerGameboard.board);
            if (i === 4) {
              setDisplay.startGame();
              dom.removePlacement();
              dom.resetWidths();
              dom.hideButton();
              dom.computerOff();
            }
            break;
          }
          break;
        }
      }
    }
  });

  Events(player1Ships, placement);

  for (let i = 0; i < 5; i += 1) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    const rotate = Math.round(Math.random());
    if (rotate === 1) {
      computerShips[i].rotateShip();
    }
    while (!computerGameboard.placementCheck(x, y, computerShips[i])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    computerGameboard.placeShip(x, y, computerShips[i]);
  }

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
        dom.computerOn();
        dom.playerOff();
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
        dom.computerOff();
      }, 1500);
      setTimeout(() => {
        dom.playerOn();
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
          dom.showPlayButton();
        }, 1500);
        setTimeout(() => {
          dom.computerOn();
        }, 1500);
        setTimeout(() => {
          dom.playerOn();
        }, 1500);
        setTimeout(() => {
          setDisplay.gameOver(computer.name);
        }, 1500);
      } else if (computerGameboard.gameOver()) {
        dom.showPlayButton();
        setTimeout(() => {
          dom.computerOn();
        }, 1500);
        setTimeout(() => {
          dom.playerOn();
        }, 1500);
        setTimeout(() => {
          setDisplay.gameOver(player1.name);
        }, 1500);
      }
    }
  });
};

export default loadGame;
