const Gameboard = () => {
  const board = Array(10).fill('').map(() => Array(10).fill(''));

  const emptyCheck = (posX, posY, ship) => {
    for (let i = posX; i < ship.length + posX; i += 1) {
      if (board[posY][i] !== '') {
        return false;
      }
    }
    return true;
  };

  const boundsCheck = (posX, posY, ship) => {
    if (posX + ship.length > 9 || posY + ship.length > 9) {
      return false;
    }
    return true;
  };

  const placeShip = (posX, posY, ship) => {
    if (emptyCheck(posX, posY, ship) && boundsCheck(posX, posY, ship)) {
      for (let i = posX; i < ship.length + posX; i += 1) {
        board[posY][i] = 1;
      }
    }
  };

  return { board, placeShip };
};

export default Gameboard;
