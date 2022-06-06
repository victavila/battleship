const Ship = (length, name) => {
  const positions = new Array(length).fill(1);

  const hit = (num) => {
    positions[num] = 0;
  };

  const isSunk = () => {
    let sunk = false;
    if (positions.filter((x) => x === 0).length === length) {
      sunk = true;
    }
    return sunk;
  };

  return {
    length, name, positions, hit, isSunk,
  };
};

export default Ship;
