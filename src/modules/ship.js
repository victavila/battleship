const ship = (length) => {
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

  return { positions, hit, isSunk };
};

export default ship;