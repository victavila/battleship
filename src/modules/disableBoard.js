const computerContainer = document.querySelector('.computer-board');
const computerDivs = computerContainer.children;

const disableBoard = (() => {
  const on = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.add('disable');
    }
  };

  const off = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.remove('disable');
    }
  };
  return { on, off };
})();

export default disableBoard;
