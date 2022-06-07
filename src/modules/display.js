const display = document.querySelector('.display-text');

const setDisplay = (() => {
  const setUp = () => {
    display.textContent = 'Place ships';
  };

  const playerTurn = () => {
    display.textContent = 'Player\'s turn';
  };

  const computerTurn = () => {
    display.textContent = 'Computer\'s turn';
  };

  const shipSunk = (playerName, shipName) => {
    display.textContent = `${playerName}'s ${shipName} was sunk`;
  };

  const gameOver = (name) => {
    display.textContent = `${name} wins`;
  };

  return {
    setUp, playerTurn, computerTurn, shipSunk, gameOver,
  };
})();

export default setDisplay;
