const Gameboard = () => {
  const board = Array(10).fill('').map(() => Array(10).fill(''));

  const ships = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];

  const emptyCheck = (posX, posY, ship) => {
    if (ship.getDirection() === 'horizontal') {
      for (let i = posX; i < ship.length + posX; i += 1) {
        if (board[posY][i] !== '') {
          return false;
        }
      }
    } else if (ship.getDirection() === 'vertical') {
      for (let i = posY; i < ship.length + posY; i += 1) {
        if (board[i][posX] !== '') {
          return false;
        }
      }
    }
    return true;
  };

  const boundsCheck = (posX, posY, ship) => {
    if (ship.getDirection() === 'horizontal') {
      if (posX + ship.length > 10 || posY > 9) {
        return false;
      }
    } if (ship.getDirection() === 'vertical') {
      if (posY + ship.length > 10 || posX > 9) {
        return false;
      }
    }
    return true;
  };

  const placementCheck = (posX, posY, ship) => {
    if (boundsCheck(posX, posY, ship)) {
      if (emptyCheck(posX, posY, ship)) {
        return true;
      }
    }
    return false;
  };

  const placeShip = (posX, posY, ship) => {
    if (placementCheck(posX, posY, ship)) {
      if (ship.getDirection() === 'horizontal') {
        for (let i = posX; i < ship.length + posX; i += 1) {
          board[posY][i] = ship.name;
        }
      } else if (ship.getDirection() === 'vertical') {
        for (let i = posY; i < ship.length + posY; i += 1) {
          board[i][posX] = ship.name;
        }
      }
    }
  };

  const receiveAttack = (posX, posY) => {
    if (board[posY][posX] !== '') {
      board[posY][posX] = 'hit';
      return true;
    }
    board[posY][posX] = 'miss';
    return false;
  };

  const gameOver = () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (ships.includes(board[i][j])) {
          return false;
        }
      }
    }
    return true;
  };

  return {
    board, placementCheck, placeShip, receiveAttack, gameOver,
  };
};

export default Gameboard;
