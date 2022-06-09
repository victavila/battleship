const Ship = (length, name) => {
  const positions = new Array(length).fill(1);

  let direction = 'horizontal';

  const hit = () => {
    for (let i = 0; i < length; i += 1) {
      if (positions[i] !== 0) {
        positions[i] = 0;
        break;
      }
    }
  };

  const isSunk = () => {
    let sunk = false;
    if (positions.filter((x) => x === 0).length === length) {
      sunk = true;
    }
    return sunk;
  };

  const getDirection = () => direction;

  const rotateShip = () => {
    if (direction === 'horizontal') {
      direction = 'vertical';
    } else {
      direction = 'horizontal';
    }
  };

  return {
    length, name, positions, hit, isSunk, getDirection, rotateShip,
  };
};

export default Ship;
