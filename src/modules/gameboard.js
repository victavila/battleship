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
    if (posX + ship.length > 9 || posY > 9) {
      return false;
    }
    return true;
  };

  const placeShip = (posX, posY, ship) => {
    if (emptyCheck(posX, posY, ship) && boundsCheck(posX, posY, ship)) {
      for (let i = posX; i < ship.length + posX; i += 1) {
        board[posY][i] = ship.length;
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

  return { board, placeShip, receiveAttack };
};

export default Gameboard;
