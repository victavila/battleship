/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/disableBoard.js":
/*!*************************************!*\
  !*** ./src/modules/disableBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const computerContainer = document.querySelector('.computer-board');
const playerContainer = document.querySelector('.player-board');

const computerDivs = computerContainer.children;
const playerDivs = playerContainer.children;

const rotateButton = document.querySelector('.rotate');

const disableBoard = (() => {
  const computerOn = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.add('disable');
    }
  };

  const computerOff = () => {
    for (let i = 0; i < 100; i += 1) {
      computerDivs[i].classList.remove('disable');
    }
  };

  const playerOn = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.add('disable');
    }
  };

  const playerOff = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.remove('disable');
    }
  };

  const removePlacement = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].classList.remove('placement');
    }
  };

  const resetWidths = () => {
    for (let i = 0; i < 100; i += 1) {
      playerDivs[i].style.width = '25px';
    }
  };

  const hideButton = () => {
    rotateButton.style.visibility = 'hidden';
  };

  return {
    computerOn, computerOff, playerOn, playerOff, removePlacement, resetWidths, hideButton,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disableBoard);


/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = document.querySelector('.display-text');

const setDisplay = (() => {
  const place = (shipName) => {
    display.textContent = `Place ${shipName}`;
  };

  const startGame = () => {
    display.textContent = 'Start Game';
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
    place, startGame, playerTurn, computerTurn, shipSunk, gameOver,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setDisplay);


/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* harmony import */ var _renderBoards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderBoards */ "./src/modules/renderBoards.js");
/* harmony import */ var _updateBoards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateBoards */ "./src/modules/updateBoards.js");
/* harmony import */ var _disableBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disableBoard */ "./src/modules/disableBoard.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display */ "./src/modules/display.js");
/* harmony import */ var _mouseEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mouseEvents */ "./src/modules/mouseEvents.js");









const loadGame = () => {
  const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Player');
  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])('Computer');

  const player1Ships = [];
  const computerShips = [];

  const placement = [];

  const Carrier1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 'Carrier');
  const Battleship1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 'Battleship');
  const Destroyer1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Destroyer');
  const Submarine1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Submarine');
  const PatrolBoat1 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'Patrol');

  player1Ships.push(Carrier1, Battleship1, Destroyer1, Submarine1, PatrolBoat1);

  const Carrier2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5, 'Carrier');
  const Battleship2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4, 'Battleship');
  const Destroyer2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Destroyer');
  const Submarine2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3, 'Submarine');
  const PatrolBoat2 = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2, 'Patrol');

  computerShips.push(Carrier2, Battleship2, Destroyer2, Submarine2, PatrolBoat2);

  const playerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();

  (0,_renderBoards__WEBPACK_IMPORTED_MODULE_3__["default"])();

  _display__WEBPACK_IMPORTED_MODULE_6__["default"].place(Carrier1.name);

  // Place ships on respective boards
  document.addEventListener('click', (e) => {
    if (e.target.className === 'p-square placement') {
      const x = e.target.dataset.id[3];
      const y = e.target.dataset.id[2];
      for (let i = 0; i < 5; i += 1) {
        if (!placement.includes(player1Ships[i])) {
          if (playerGameboard.placementCheck(+x, +y, player1Ships[i])) {
            if (i < 4) {
              _display__WEBPACK_IMPORTED_MODULE_6__["default"].place(player1Ships[i + 1].name);
            }
            playerGameboard.placeShip(+x, +y, player1Ships[i]);
            placement.push(player1Ships[i]);
            (0,_updateBoards__WEBPACK_IMPORTED_MODULE_4__["default"])(playerGameboard.board, computerGameboard.board);
            if (i === 4) {
              _display__WEBPACK_IMPORTED_MODULE_6__["default"].startGame();
              _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].removePlacement();
              _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].resetWidths();
              _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].hideButton();
            }
            break;
          }
          break;
        }
      }
    }
  });

  (0,_mouseEvents__WEBPACK_IMPORTED_MODULE_7__["default"])(player1Ships, placement);

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
  (0,_updateBoards__WEBPACK_IMPORTED_MODULE_4__["default"])(playerGameboard.board, computerGameboard.board);

  document.addEventListener('click', (e) => {
    if (e.target.className === 'c-square') {
      const x = e.target.dataset.id[3];
      const y = e.target.dataset.id[2];
      const coord = player1.attack(x, y, computerGameboard.board);
      if (coord !== null) {
        const shipName = computerGameboard.board[coord[1]][coord[0]];
        computerGameboard.receiveAttack(coord[0], coord[1]);
        (0,_updateBoards__WEBPACK_IMPORTED_MODULE_4__["default"])(playerGameboard.board, computerGameboard.board);
        _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].playerOff();
        _display__WEBPACK_IMPORTED_MODULE_6__["default"].computerTurn();
        for (let i = 0; i < computerShips.length; i += 1) {
          if (computerShips[i].name === shipName) {
            computerShips[i].hit();
            if (computerShips[i].isSunk()) {
              _display__WEBPACK_IMPORTED_MODULE_6__["default"].shipSunk(computer.name, computerShips[i].name);
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
      (0,_updateBoards__WEBPACK_IMPORTED_MODULE_4__["default"])(playerGameboard.board, computerGameboard.board);
      setTimeout(() => {
        _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOff();
      }, 1500);
      setTimeout(() => {
        _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
      }, 1500);
      setTimeout(() => {
        _display__WEBPACK_IMPORTED_MODULE_6__["default"].playerTurn();
      }, 1500);
      for (let i = 0; i < player1Ships.length; i += 1) {
        if (player1Ships[i].name === shipName) {
          player1Ships[i].hit();
          if (player1Ships[i].isSunk()) {
            _display__WEBPACK_IMPORTED_MODULE_6__["default"].shipSunk(player1.name, player1Ships[i].name);
          }
        }
      }
      if (playerGameboard.gameOver()) {
        setTimeout(() => {
          _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        }, 1500);
        setTimeout(() => {
          _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
        }, 1500);
        setTimeout(() => {
          _display__WEBPACK_IMPORTED_MODULE_6__["default"].gameOver(computer.name);
        }, 1500);
      } else if (computerGameboard.gameOver()) {
        setTimeout(() => {
          _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        }, 1500);
        setTimeout(() => {
          _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
        }, 1500);
        setTimeout(() => {
          _display__WEBPACK_IMPORTED_MODULE_6__["default"].gameOver(player1.name);
        }, 1500);
      }
    }
  });

  // Computer sends random attack

  // Render attacks(hit or miss) on boards

  // Check if any ships sunk and display result if so

  // Check if game is over
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGame);


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/modules/mouseEvents.js":
/*!************************************!*\
  !*** ./src/modules/mouseEvents.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playerContainer = document.querySelector('.player-board');
const playerDivs = playerContainer.children;

const Events = (player1Ships, placement) => {
  document.addEventListener('mouseover', (e) => {
    if (e.target.className === 'p-square placement') {
      if (player1Ships[placement.length].getDirection() === 'horizontal') {
        const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
        playerDivs[id].style.width = `${25 * player1Ships[placement.length].length}px`;
      } else if (player1Ships[placement.length].getDirection() === 'vertical') {
        const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
        playerDivs[id].style.height = `${25 * player1Ships[placement.length].length}px`;
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.className === 'p-square placement') {
      const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
      playerDivs[id].style.width = '25px';
      playerDivs[id].style.height = '25px';
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.className === 'rotate') {
      player1Ships[placement.length].rotateShip();
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);


/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Player = (name) => {
  const ships = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];
  const attack = (posX, posY, board) => {
    if (posX > 9 || posY > 9) { return null; }
    if (board[posY][posX] === '' || ships.includes(board[posY][posX])) {
      return [posX, posY];
    }
    return null;
  };

  const randomAttack = (board) => {
    const posX = Math.floor(Math.random() * 10);
    const posY = Math.floor(Math.random() * 10);
    if (board[posY][posX] === '' || ships.includes(board[posY][posX])) {
      return [posX, posY];
    }
    return null;
  };

  return { name, attack, randomAttack };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/renderBoards.js":
/*!*************************************!*\
  !*** ./src/modules/renderBoards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playerContainer = document.querySelector('.player-board');
const computerContainer = document.querySelector('.computer-board');

const renderBoards = () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const playerSquare = document.createElement('div');
      playerSquare.setAttribute('data-id', `P-${i}${j}`);
      playerSquare.classList.add('p-square');
      playerSquare.classList.add('placement');
      playerContainer.appendChild(playerSquare);

      const computerSquare = document.createElement('div');
      computerSquare.setAttribute('data-id', `C-${i}${j}`);
      computerSquare.classList.add('c-square');
      computerContainer.appendChild(computerSquare);
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoards);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/modules/updateBoards.js":
/*!*************************************!*\
  !*** ./src/modules/updateBoards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const playerContainer = document.querySelector('.player-board');
const computerContainer = document.querySelector('.computer-board');

const playerDivs = playerContainer.children;
const computerDivs = computerContainer.children;

const updateBoards = (playerBoard, computerBoard) => {
  // Make ships on player board visible
  let count = 0;
  const ships = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrol'];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (ships.includes(playerBoard[i][j])) {
        playerDivs[count].classList.add('purple');
      } else if (playerBoard[i][j] === 'hit') {
        playerDivs[count].textContent = 'x';
        playerDivs[count].classList.add('hit');
      } else if (playerBoard[i][j] === 'miss') {
        playerDivs[count].textContent = 'o';
        playerDivs[count].classList.add('miss');
      }
      if (computerBoard[i][j] === 'hit') {
        computerDivs[count].textContent = 'x';
        computerDivs[count].classList.add('hit');
      } else if (computerBoard[i][j] === 'miss') {
        computerDivs[count].textContent = 'o';
        computerDivs[count].classList.add('miss');
      }
      count += 1;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateBoards);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");


(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ2pDNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMseURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzYWJsZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL21vdXNlRXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlckJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXBkYXRlQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5jb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbmNvbnN0IGNvbXB1dGVyRGl2cyA9IGNvbXB1dGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuXG5jb25zdCBkaXNhYmxlQm9hcmQgPSAoKCkgPT4ge1xuICBjb25zdCBjb21wdXRlck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyT2ZmID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5ZXJPZmYgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldFdpZHRocyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJvdGF0ZUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wdXRlck9uLCBjb21wdXRlck9mZiwgcGxheWVyT24sIHBsYXllck9mZiwgcmVtb3ZlUGxhY2VtZW50LCByZXNldFdpZHRocywgaGlkZUJ1dHRvbixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVCb2FyZDtcbiIsImNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS10ZXh0Jyk7XG5cbmNvbnN0IHNldERpc3BsYXkgPSAoKCkgPT4ge1xuICBjb25zdCBwbGFjZSA9IChzaGlwTmFtZSkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgUGxhY2UgJHtzaGlwTmFtZX1gO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xuICB9O1xuXG4gIGNvbnN0IHBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICdQbGF5ZXJcXCdzIHR1cm4nO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyVHVybiA9ICgpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJ0NvbXB1dGVyXFwncyB0dXJuJztcbiAgfTtcblxuICBjb25zdCBzaGlwU3VuayA9IChwbGF5ZXJOYW1lLCBzaGlwTmFtZSkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJOYW1lfSdzICR7c2hpcE5hbWV9IHdhcyBzdW5rYDtcbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9IChuYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGAke25hbWV9IHdpbnNgO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2UsIHN0YXJ0R2FtZSwgcGxheWVyVHVybiwgY29tcHV0ZXJUdXJuLCBzaGlwU3VuaywgZ2FtZU92ZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzZXREaXNwbGF5O1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgcmVuZGVyQm9hcmRzIGZyb20gJy4vcmVuZGVyQm9hcmRzJztcbmltcG9ydCB1cGRhdGVCb2FyZHMgZnJvbSAnLi91cGRhdGVCb2FyZHMnO1xuaW1wb3J0IGRpc2FibGVCb2FyZCBmcm9tICcuL2Rpc2FibGVCb2FyZCc7XG5pbXBvcnQgc2V0RGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL21vdXNlRXZlbnRzJztcblxuY29uc3QgbG9hZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcicpO1xuICBjb25zdCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKTtcblxuICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBbXTtcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlbWVudCA9IFtdO1xuXG4gIGNvbnN0IENhcnJpZXIxID0gU2hpcCg1LCAnQ2FycmllcicpO1xuICBjb25zdCBCYXR0bGVzaGlwMSA9IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgRGVzdHJveWVyMSA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBTdWJtYXJpbmUxID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IFBhdHJvbEJvYXQxID0gU2hpcCgyLCAnUGF0cm9sJyk7XG5cbiAgcGxheWVyMVNoaXBzLnB1c2goQ2FycmllcjEsIEJhdHRsZXNoaXAxLCBEZXN0cm95ZXIxLCBTdWJtYXJpbmUxLCBQYXRyb2xCb2F0MSk7XG5cbiAgY29uc3QgQ2FycmllcjIgPSBTaGlwKDUsICdDYXJyaWVyJyk7XG4gIGNvbnN0IEJhdHRsZXNoaXAyID0gU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBEZXN0cm95ZXIyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IFN1Ym1hcmluZTIgPSBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgUGF0cm9sQm9hdDIgPSBTaGlwKDIsICdQYXRyb2wnKTtcblxuICBjb21wdXRlclNoaXBzLnB1c2goQ2FycmllcjIsIEJhdHRsZXNoaXAyLCBEZXN0cm95ZXIyLCBTdWJtYXJpbmUyLCBQYXRyb2xCb2F0Mik7XG5cbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmVuZGVyQm9hcmRzKCk7XG5cbiAgc2V0RGlzcGxheS5wbGFjZShDYXJyaWVyMS5uYW1lKTtcblxuICAvLyBQbGFjZSBzaGlwcyBvbiByZXNwZWN0aXZlIGJvYXJkc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Atc3F1YXJlIHBsYWNlbWVudCcpIHtcbiAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0LmlkWzNdO1xuICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbMl07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIXBsYWNlbWVudC5pbmNsdWRlcyhwbGF5ZXIxU2hpcHNbaV0pKSB7XG4gICAgICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5wbGFjZW1lbnRDaGVjaygreCwgK3ksIHBsYXllcjFTaGlwc1tpXSkpIHtcbiAgICAgICAgICAgIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgICBzZXREaXNwbGF5LnBsYWNlKHBsYXllcjFTaGlwc1tpICsgMV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKCt4LCAreSwgcGxheWVyMVNoaXBzW2ldKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5wdXNoKHBsYXllcjFTaGlwc1tpXSk7XG4gICAgICAgICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgICAgICAgICBzZXREaXNwbGF5LnN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgICBkaXNhYmxlQm9hcmQucmVtb3ZlUGxhY2VtZW50KCk7XG4gICAgICAgICAgICAgIGRpc2FibGVCb2FyZC5yZXNldFdpZHRocygpO1xuICAgICAgICAgICAgICBkaXNhYmxlQm9hcmQuaGlkZUJ1dHRvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBFdmVudHMocGxheWVyMVNoaXBzLCBwbGFjZW1lbnQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3Qgcm90YXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICBpZiAocm90YXRlID09PSAxKSB7XG4gICAgICBjb21wdXRlclNoaXBzW2ldLnJvdGF0ZVNoaXAoKTtcbiAgICB9XG4gICAgd2hpbGUgKCFjb21wdXRlckdhbWVib2FyZC5wbGFjZW1lbnRDaGVjayh4LCB5LCBjb21wdXRlclNoaXBzW2ldKSkge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCBjb21wdXRlclNoaXBzW2ldKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBib2FyZHNcbiAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYy1zcXVhcmUnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIxLmF0dGFjayh4LCB5LCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBpZiAoY29vcmQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjb21wdXRlckdhbWVib2FyZC5ib2FyZFtjb29yZFsxXV1bY29vcmRbMF1dO1xuICAgICAgICBjb21wdXRlckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgZGlzYWJsZUJvYXJkLnBsYXllck9mZigpO1xuICAgICAgICBzZXREaXNwbGF5LmNvbXB1dGVyVHVybigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgY29tcHV0ZXJTaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsoY29tcHV0ZXIubmFtZSwgY29tcHV0ZXJTaGlwc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCByYW5kQ29vcmQgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIHdoaWxlIChyYW5kQ29vcmQgPT09IG51bGwpIHtcbiAgICAgICAgcmFuZENvb3JkID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IHBsYXllckdhbWVib2FyZC5ib2FyZFtyYW5kQ29vcmRbMV1dW3JhbmRDb29yZFswXV07XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kQ29vcmRbMF0sIHJhbmRDb29yZFsxXSk7XG4gICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT2ZmKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXkucGxheWVyVHVybigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjFTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocGxheWVyMVNoaXBzW2ldLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMVNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgIGlmIChwbGF5ZXIxU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsocGxheWVyMS5uYW1lLCBwbGF5ZXIxU2hpcHNbaV0ubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3Zlcihjb21wdXRlci5uYW1lKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIxLm5hbWUpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIENvbXB1dGVyIHNlbmRzIHJhbmRvbSBhdHRhY2tcblxuICAvLyBSZW5kZXIgYXR0YWNrcyhoaXQgb3IgbWlzcykgb24gYm9hcmRzXG5cbiAgLy8gQ2hlY2sgaWYgYW55IHNoaXBzIHN1bmsgYW5kIGRpc3BsYXkgcmVzdWx0IGlmIHNvXG5cbiAgLy8gQ2hlY2sgaWYgZ2FtZSBpcyBvdmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkR2FtZTtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMCkuZmlsbCgnJykubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuXG4gIGNvbnN0IGVtcHR5Q2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NYOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NYOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3Bvc1ldW2ldICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHBvc1k7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1k7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbaV1bcG9zWF0gIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGJvdW5kc0NoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAocG9zWCArIHNoaXAubGVuZ3RoID4gMTAgfHwgcG9zWSA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChwb3NZICsgc2hpcC5sZW5ndGggPiAxMCB8fCBwb3NYID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoYm91bmRzQ2hlY2socG9zWCwgcG9zWSwgc2hpcCkpIHtcbiAgICAgIGlmIChlbXB0eUNoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAocGxhY2VtZW50Q2hlY2socG9zWCwgcG9zWSwgc2hpcCkpIHtcbiAgICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvc1g7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1g7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3Bvc1ldW2ldID0gc2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvc1k7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1k7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2ldW3Bvc1hdID0gc2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocG9zWCwgcG9zWSkgPT4ge1xuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSAhPT0gJycpIHtcbiAgICAgIGJvYXJkW3Bvc1ldW3Bvc1hdID0gJ2hpdCc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYm9hcmRbcG9zWV1bcG9zWF0gPSAnbWlzcyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChzaGlwcy5pbmNsdWRlcyhib2FyZFtpXVtqXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCwgcGxhY2VtZW50Q2hlY2ssIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgZ2FtZU92ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBwbGF5ZXJEaXZzID0gcGxheWVyQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5jb25zdCBFdmVudHMgPSAocGxheWVyMVNoaXBzLCBwbGFjZW1lbnQpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncC1zcXVhcmUgcGxhY2VtZW50Jykge1xuICAgICAgaWYgKHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLndpZHRoID0gYCR7MjUgKiBwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0ubGVuZ3RofXB4YDtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmdldERpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLmhlaWdodCA9IGAkezI1ICogcGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmxlbmd0aH1weGA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Atc3F1YXJlIHBsYWNlbWVudCcpIHtcbiAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICBwbGF5ZXJEaXZzW2lkXS5zdHlsZS53aWR0aCA9ICcyNXB4JztcbiAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLmhlaWdodCA9ICcyNXB4JztcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncm90YXRlJykge1xuICAgICAgcGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLnJvdGF0ZVNoaXAoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuICBjb25zdCBhdHRhY2sgPSAocG9zWCwgcG9zWSwgYm9hcmQpID0+IHtcbiAgICBpZiAocG9zWCA+IDkgfHwgcG9zWSA+IDkpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gPT09ICcnIHx8IHNoaXBzLmluY2x1ZGVzKGJvYXJkW3Bvc1ldW3Bvc1hdKSkge1xuICAgICAgcmV0dXJuIFtwb3NYLCBwb3NZXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSA9PT0gJycgfHwgc2hpcHMuaW5jbHVkZXMoYm9hcmRbcG9zWV1bcG9zWF0pKSB7XG4gICAgICByZXR1cm4gW3Bvc1gsIHBvc1ldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhdHRhY2ssIHJhbmRvbUF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBQLSR7aX0ke2p9YCk7XG4gICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncC1zcXVhcmUnKTtcbiAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcbiAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuXG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tcHV0ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYEMtJHtpfSR7an1gKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Mtc3F1YXJlJyk7XG4gICAgICBjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNxdWFyZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJCb2FyZHM7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDEpO1xuXG4gIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChwb3NpdGlvbnNbaV0gIT09IDApIHtcbiAgICAgICAgcG9zaXRpb25zW2ldID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbnMuZmlsdGVyKCh4KSA9PiB4ID09PSAwKS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IGRpcmVjdGlvbjtcblxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgbmFtZSwgcG9zaXRpb25zLCBoaXQsIGlzU3VuaywgZ2V0RGlyZWN0aW9uLCByb3RhdGVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllckRpdnMgPSBwbGF5ZXJDb250YWluZXIuY2hpbGRyZW47XG5jb25zdCBjb21wdXRlckRpdnMgPSBjb21wdXRlckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3QgdXBkYXRlQm9hcmRzID0gKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKSA9PiB7XG4gIC8vIE1ha2Ugc2hpcHMgb24gcGxheWVyIGJvYXJkIHZpc2libGVcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGlmIChzaGlwcy5pbmNsdWRlcyhwbGF5ZXJCb2FyZFtpXVtqXSkpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgncHVycGxlJyk7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnbyc7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb21wdXRlckJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ3gnO1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlckJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICdvJztcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5sb2FkR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9