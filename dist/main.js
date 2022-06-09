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

  return {
    computerOn, computerOff, playerOn, playerOff, removePlacement,
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
          if (i < 4) {
            _display__WEBPACK_IMPORTED_MODULE_6__["default"].place(player1Ships[i + 1].name);
          }
          if (playerGameboard.placementCheck(+x, +y, player1Ships[i])) {
            playerGameboard.placeShip(+x, +y, player1Ships[i]);
            placement.push(player1Ships[i]);
            (0,_updateBoards__WEBPACK_IMPORTED_MODULE_4__["default"])(playerGameboard.board, computerGameboard.board);
            if (i === 4) {
              _display__WEBPACK_IMPORTED_MODULE_6__["default"].startGame();
            }
            break;
          }
          break;
        }
      }
    }
  });

  for (let i = 0; i < 5; i += 1) {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
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

  const placementCheck = (posX, posY, ship) => {
    if (emptyCheck(posX, posY, ship) && boundsCheck(posX, posY, ship)) {
      return true;
    }
    return false;
  };

  const placeShip = (posX, posY, ship) => {
    if (placementCheck(posX, posY, ship)) {
      for (let i = posX; i < ship.length + posX; i += 1) {
        board[posY][i] = ship.name;
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

  return {
    length, name, positions, hit, isSunk,
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
      } else if (playerBoard[i][j] === 'miss') {
        playerDivs[count].textContent = 'o';
      }
      if (computerBoard[i][j] === 'hit') {
        computerDivs[count].textContent = 'x';
      } else if (computerBoard[i][j] === 'miss') {
        computerDivs[count].textContent = 'o';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QnBCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQzdCNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEMseURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzYWJsZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcmVuZGVyQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy91cGRhdGVCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcbmNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcblxuY29uc3QgY29tcHV0ZXJEaXZzID0gY29tcHV0ZXJDb250YWluZXIuY2hpbGRyZW47XG5jb25zdCBwbGF5ZXJEaXZzID0gcGxheWVyQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5jb25zdCBkaXNhYmxlQm9hcmQgPSAoKCkgPT4ge1xuICBjb25zdCBjb21wdXRlck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyT2ZmID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5ZXJPZmYgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXB1dGVyT24sIGNvbXB1dGVyT2ZmLCBwbGF5ZXJPbiwgcGxheWVyT2ZmLCByZW1vdmVQbGFjZW1lbnQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlQm9hcmQ7XG4iLCJjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktdGV4dCcpO1xuXG5jb25zdCBzZXREaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcGxhY2UgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYFBsYWNlICR7c2hpcE5hbWV9YDtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnUGxheWVyXFwncyB0dXJuJztcbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICdDb21wdXRlclxcJ3MgdHVybic7XG4gIH07XG5cbiAgY29uc3Qgc2hpcFN1bmsgPSAocGxheWVyTmFtZSwgc2hpcE5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyAke3NoaXBOYW1lfSB3YXMgc3Vua2A7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAobmFtZSkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtuYW1lfSB3aW5zYDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlLCBzdGFydEdhbWUsIHBsYXllclR1cm4sIGNvbXB1dGVyVHVybiwgc2hpcFN1bmssIGdhbWVPdmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0RGlzcGxheTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHJlbmRlckJvYXJkcyBmcm9tICcuL3JlbmRlckJvYXJkcyc7XG5pbXBvcnQgdXBkYXRlQm9hcmRzIGZyb20gJy4vdXBkYXRlQm9hcmRzJztcbmltcG9ydCBkaXNhYmxlQm9hcmQgZnJvbSAnLi9kaXNhYmxlQm9hcmQnO1xuaW1wb3J0IHNldERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgbG9hZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcicpO1xuICBjb25zdCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKTtcblxuICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBbXTtcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlbWVudCA9IFtdO1xuXG4gIGNvbnN0IENhcnJpZXIxID0gU2hpcCg1LCAnQ2FycmllcicpO1xuICBjb25zdCBCYXR0bGVzaGlwMSA9IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgRGVzdHJveWVyMSA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBTdWJtYXJpbmUxID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IFBhdHJvbEJvYXQxID0gU2hpcCgyLCAnUGF0cm9sJyk7XG5cbiAgcGxheWVyMVNoaXBzLnB1c2goQ2FycmllcjEsIEJhdHRsZXNoaXAxLCBEZXN0cm95ZXIxLCBTdWJtYXJpbmUxLCBQYXRyb2xCb2F0MSk7XG5cbiAgY29uc3QgQ2FycmllcjIgPSBTaGlwKDUsICdDYXJyaWVyJyk7XG4gIGNvbnN0IEJhdHRsZXNoaXAyID0gU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBEZXN0cm95ZXIyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IFN1Ym1hcmluZTIgPSBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgUGF0cm9sQm9hdDIgPSBTaGlwKDIsICdQYXRyb2wnKTtcblxuICBjb21wdXRlclNoaXBzLnB1c2goQ2FycmllcjIsIEJhdHRsZXNoaXAyLCBEZXN0cm95ZXIyLCBTdWJtYXJpbmUyLCBQYXRyb2xCb2F0Mik7XG5cbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmVuZGVyQm9hcmRzKCk7XG5cbiAgc2V0RGlzcGxheS5wbGFjZShDYXJyaWVyMS5uYW1lKTtcblxuICAvLyBQbGFjZSBzaGlwcyBvbiByZXNwZWN0aXZlIGJvYXJkc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Atc3F1YXJlIHBsYWNlbWVudCcpIHtcbiAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0LmlkWzNdO1xuICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbMl07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgICAgICBpZiAoIXBsYWNlbWVudC5pbmNsdWRlcyhwbGF5ZXIxU2hpcHNbaV0pKSB7XG4gICAgICAgICAgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5LnBsYWNlKHBsYXllcjFTaGlwc1tpICsgMV0ubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQucGxhY2VtZW50Q2hlY2soK3gsICt5LCBwbGF5ZXIxU2hpcHNbaV0pKSB7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQucGxhY2VTaGlwKCt4LCAreSwgcGxheWVyMVNoaXBzW2ldKTtcbiAgICAgICAgICAgIHBsYWNlbWVudC5wdXNoKHBsYXllcjFTaGlwc1tpXSk7XG4gICAgICAgICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNCkge1xuICAgICAgICAgICAgICBzZXREaXNwbGF5LnN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHdoaWxlICghY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VtZW50Q2hlY2soeCwgeSwgY29tcHV0ZXJTaGlwc1tpXSkpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgY29tcHV0ZXJTaGlwc1tpXSk7XG4gIH1cblxuICAvLyBSZW5kZXIgYm9hcmRzXG4gIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Mtc3F1YXJlJykge1xuICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbM107XG4gICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC5pZFsyXTtcbiAgICAgIGNvbnN0IGNvb3JkID0gcGxheWVyMS5hdHRhY2soeCwgeSwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgaWYgKGNvb3JkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmRbY29vcmRbMV1dW2Nvb3JkWzBdXTtcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPZmYoKTtcbiAgICAgICAgc2V0RGlzcGxheS5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlclNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGNvbXB1dGVyU2hpcHNbaV0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyU2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBzZXREaXNwbGF5LnNoaXBTdW5rKGNvbXB1dGVyLm5hbWUsIGNvbXB1dGVyU2hpcHNbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgcmFuZENvb3JkID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICB3aGlsZSAocmFuZENvb3JkID09PSBudWxsKSB7XG4gICAgICAgIHJhbmRDb29yZCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbcmFuZENvb3JkWzFdXVtyYW5kQ29vcmRbMF1dO1xuICAgICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZENvb3JkWzBdLCByYW5kQ29vcmRbMV0pO1xuICAgICAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9mZigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzYWJsZUJvYXJkLnBsYXllck9uKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXREaXNwbGF5LnBsYXllclR1cm4oKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBsYXllcjFTaGlwc1tpXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjFTaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICBpZiAocGxheWVyMVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5LnNoaXBTdW5rKHBsYXllcjEubmFtZSwgcGxheWVyMVNoaXBzW2ldLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5nYW1lT3ZlcigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERpc3BsYXkuZ2FtZU92ZXIoY29tcHV0ZXIubmFtZSk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlckdhbWVib2FyZC5nYW1lT3ZlcigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERpc3BsYXkuZ2FtZU92ZXIocGxheWVyMS5uYW1lKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBDb21wdXRlciBzZW5kcyByYW5kb20gYXR0YWNrXG5cbiAgLy8gUmVuZGVyIGF0dGFja3MoaGl0IG9yIG1pc3MpIG9uIGJvYXJkc1xuXG4gIC8vIENoZWNrIGlmIGFueSBzaGlwcyBzdW5rIGFuZCBkaXNwbGF5IHJlc3VsdCBpZiBzb1xuXG4gIC8vIENoZWNrIGlmIGdhbWUgaXMgb3ZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEdhbWU7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApLmZpbGwoJycpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgnJykpO1xuXG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcblxuICBjb25zdCBlbXB0eUNoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBmb3IgKGxldCBpID0gcG9zWDsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWDsgaSArPSAxKSB7XG4gICAgICBpZiAoYm9hcmRbcG9zWV1baV0gIT09ICcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYm91bmRzQ2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChwb3NYICsgc2hpcC5sZW5ndGggPiA5IHx8IHBvc1kgPiA5KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoZW1wdHlDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSAmJiBib3VuZHNDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnRDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSkge1xuICAgICAgZm9yIChsZXQgaSA9IHBvc1g7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1g7IGkgKz0gMSkge1xuICAgICAgICBib2FyZFtwb3NZXVtpXSA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NYLCBwb3NZKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Bvc1ldW3Bvc1hdICE9PSAnJykge1xuICAgICAgYm9hcmRbcG9zWV1bcG9zWF0gPSAnaGl0JztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBib2FyZFtwb3NZXVtwb3NYXSA9ICdtaXNzJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHNoaXBzLmluY2x1ZGVzKGJvYXJkW2ldW2pdKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLCBwbGFjZW1lbnRDaGVjaywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnYW1lT3ZlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcbiAgY29uc3QgYXR0YWNrID0gKHBvc1gsIHBvc1ksIGJvYXJkKSA9PiB7XG4gICAgaWYgKHBvc1ggPiA5IHx8IHBvc1kgPiA5KSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKGJvYXJkW3Bvc1ldW3Bvc1hdID09PSAnJyB8fCBzaGlwcy5pbmNsdWRlcyhib2FyZFtwb3NZXVtwb3NYXSkpIHtcbiAgICAgIHJldHVybiBbcG9zWCwgcG9zWV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgcG9zWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gPT09ICcnIHx8IHNoaXBzLmluY2x1ZGVzKGJvYXJkW3Bvc1ldW3Bvc1hdKSkge1xuICAgICAgcmV0dXJuIFtwb3NYLCBwb3NZXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYXR0YWNrLCByYW5kb21BdHRhY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgUC0ke2l9JHtqfWApO1xuICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3Atc3F1YXJlJyk7XG4gICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50Jyk7XG4gICAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcblxuICAgICAgY29uc3QgY29tcHV0ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBDLSR7aX0ke2p9YCk7XG4gICAgICBjb21wdXRlclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjLXNxdWFyZScpO1xuICAgICAgY29tcHV0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTcXVhcmUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQm9hcmRzO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIG5hbWUpID0+IHtcbiAgY29uc3QgcG9zaXRpb25zID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgxKTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHBvc2l0aW9uc1tpXSAhPT0gMCkge1xuICAgICAgICBwb3NpdGlvbnNbaV0gPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9ucy5maWx0ZXIoKHgpID0+IHggPT09IDApLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsIG5hbWUsIHBvc2l0aW9ucywgaGl0LCBpc1N1bmssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcbmNvbnN0IGNvbXB1dGVyRGl2cyA9IGNvbXB1dGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5jb25zdCB1cGRhdGVCb2FyZHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgLy8gTWFrZSBzaGlwcyBvbiBwbGF5ZXIgYm9hcmQgdmlzaWJsZVxuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0Rlc3Ryb3llcicsICdTdWJtYXJpbmUnLCAnUGF0cm9sJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgaWYgKHNoaXBzLmluY2x1ZGVzKHBsYXllckJvYXJkW2ldW2pdKSkge1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdwdXJwbGUnKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ3gnO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ28nO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXB1dGVyQm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmRbaV1bal0gPT09ICdtaXNzJykge1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ28nO1xuICAgICAgfVxuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRHYW1lIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcblxubG9hZEdhbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==