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
      if (placement.length === player1Ships.length) {
        _display__WEBPACK_IMPORTED_MODULE_6__["default"].startGame();
      }
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

  computerGameboard.placeShip(0, 0, Carrier2);
  computerGameboard.placeShip(0, 2, Battleship2);
  computerGameboard.placeShip(0, 4, Destroyer2);
  computerGameboard.placeShip(0, 6, Submarine2);
  computerGameboard.placeShip(0, 8, PatrolBoat2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekJwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUM3QjVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7O0FBRXRDLHlEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc2FibGVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlckJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXBkYXRlQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5jb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbmNvbnN0IGNvbXB1dGVyRGl2cyA9IGNvbXB1dGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3QgZGlzYWJsZUJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJPbiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb21wdXRlckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb21wdXRlck9mZiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBjb21wdXRlckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5ZXJPbiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheWVyT2ZmID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdwbGFjZW1lbnQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wdXRlck9uLCBjb21wdXRlck9mZiwgcGxheWVyT24sIHBsYXllck9mZiwgcmVtb3ZlUGxhY2VtZW50LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZUJvYXJkO1xuIiwiY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXRleHQnKTtcblxuY29uc3Qgc2V0RGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYWNlID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGBQbGFjZSAke3NoaXBOYW1lfWA7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJ1BsYXllclxcJ3MgdHVybic7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXJcXCdzIHR1cm4nO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBTdW5rID0gKHBsYXllck5hbWUsIHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgJHtzaGlwTmFtZX0gd2FzIHN1bmtgO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKG5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7bmFtZX0gd2luc2A7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZSwgc3RhcnRHYW1lLCBwbGF5ZXJUdXJuLCBjb21wdXRlclR1cm4sIHNoaXBTdW5rLCBnYW1lT3ZlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNldERpc3BsYXk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCByZW5kZXJCb2FyZHMgZnJvbSAnLi9yZW5kZXJCb2FyZHMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkcyBmcm9tICcuL3VwZGF0ZUJvYXJkcyc7XG5pbXBvcnQgZGlzYWJsZUJvYXJkIGZyb20gJy4vZGlzYWJsZUJvYXJkJztcbmltcG9ydCBzZXREaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5cbmNvbnN0IGxvYWRHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCdQbGF5ZXInKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XG5cbiAgY29uc3QgcGxheWVyMVNoaXBzID0gW107XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbXTtcblxuICBjb25zdCBwbGFjZW1lbnQgPSBbXTtcblxuICBjb25zdCBDYXJyaWVyMSA9IFNoaXAoNSwgJ0NhcnJpZXInKTtcbiAgY29uc3QgQmF0dGxlc2hpcDEgPSBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gIGNvbnN0IERlc3Ryb3llcjEgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgY29uc3QgU3VibWFyaW5lMSA9IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICBjb25zdCBQYXRyb2xCb2F0MSA9IFNoaXAoMiwgJ1BhdHJvbCcpO1xuXG4gIHBsYXllcjFTaGlwcy5wdXNoKENhcnJpZXIxLCBCYXR0bGVzaGlwMSwgRGVzdHJveWVyMSwgU3VibWFyaW5lMSwgUGF0cm9sQm9hdDEpO1xuXG4gIGNvbnN0IENhcnJpZXIyID0gU2hpcCg1LCAnQ2FycmllcicpO1xuICBjb25zdCBCYXR0bGVzaGlwMiA9IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgRGVzdHJveWVyMiA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBTdWJtYXJpbmUyID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IFBhdHJvbEJvYXQyID0gU2hpcCgyLCAnUGF0cm9sJyk7XG5cbiAgY29tcHV0ZXJTaGlwcy5wdXNoKENhcnJpZXIyLCBCYXR0bGVzaGlwMiwgRGVzdHJveWVyMiwgU3VibWFyaW5lMiwgUGF0cm9sQm9hdDIpO1xuXG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIHJlbmRlckJvYXJkcygpO1xuXG4gIHNldERpc3BsYXkucGxhY2UoQ2FycmllcjEubmFtZSk7XG5cbiAgLy8gUGxhY2Ugc2hpcHMgb24gcmVzcGVjdGl2ZSBib2FyZHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwLXNxdWFyZSBwbGFjZW1lbnQnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgaWYgKHBsYWNlbWVudC5sZW5ndGggPT09IHBsYXllcjFTaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgc2V0RGlzcGxheS5zdGFydEdhbWUoKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICAgIGlmICghcGxhY2VtZW50LmluY2x1ZGVzKHBsYXllcjFTaGlwc1tpXSkpIHtcbiAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgIHNldERpc3BsYXkucGxhY2UocGxheWVyMVNoaXBzW2kgKyAxXS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5wbGFjZW1lbnRDaGVjaygreCwgK3ksIHBsYXllcjFTaGlwc1tpXSkpIHtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoK3gsICt5LCBwbGF5ZXIxU2hpcHNbaV0pO1xuICAgICAgICAgICAgcGxhY2VtZW50LnB1c2gocGxheWVyMVNoaXBzW2ldKTtcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgICAgICAgIGlmIChpID09PSA0KSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAwLCBDYXJyaWVyMik7XG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCgwLCAyLCBCYXR0bGVzaGlwMik7XG4gIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCgwLCA0LCBEZXN0cm95ZXIyKTtcbiAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKDAsIDYsIFN1Ym1hcmluZTIpO1xuICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoMCwgOCwgUGF0cm9sQm9hdDIpO1xuXG4gIC8vIFJlbmRlciBib2FyZHNcbiAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYy1zcXVhcmUnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIxLmF0dGFjayh4LCB5LCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBpZiAoY29vcmQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjb21wdXRlckdhbWVib2FyZC5ib2FyZFtjb29yZFsxXV1bY29vcmRbMF1dO1xuICAgICAgICBjb21wdXRlckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgZGlzYWJsZUJvYXJkLnBsYXllck9mZigpO1xuICAgICAgICBzZXREaXNwbGF5LmNvbXB1dGVyVHVybigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgY29tcHV0ZXJTaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsoY29tcHV0ZXIubmFtZSwgY29tcHV0ZXJTaGlwc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCByYW5kQ29vcmQgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIHdoaWxlIChyYW5kQ29vcmQgPT09IG51bGwpIHtcbiAgICAgICAgcmFuZENvb3JkID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IHBsYXllckdhbWVib2FyZC5ib2FyZFtyYW5kQ29vcmRbMV1dW3JhbmRDb29yZFswXV07XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kQ29vcmRbMF0sIHJhbmRDb29yZFsxXSk7XG4gICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT2ZmKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXkucGxheWVyVHVybigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjFTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocGxheWVyMVNoaXBzW2ldLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMVNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgIGlmIChwbGF5ZXIxU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsocGxheWVyMS5uYW1lLCBwbGF5ZXIxU2hpcHNbaV0ubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3Zlcihjb21wdXRlci5uYW1lKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIxLm5hbWUpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIENvbXB1dGVyIHNlbmRzIHJhbmRvbSBhdHRhY2tcblxuICAvLyBSZW5kZXIgYXR0YWNrcyhoaXQgb3IgbWlzcykgb24gYm9hcmRzXG5cbiAgLy8gQ2hlY2sgaWYgYW55IHNoaXBzIHN1bmsgYW5kIGRpc3BsYXkgcmVzdWx0IGlmIHNvXG5cbiAgLy8gQ2hlY2sgaWYgZ2FtZSBpcyBvdmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkR2FtZTtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMCkuZmlsbCgnJykubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuXG4gIGNvbnN0IGVtcHR5Q2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSBwb3NYOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NYOyBpICs9IDEpIHtcbiAgICAgIGlmIChib2FyZFtwb3NZXVtpXSAhPT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBib3VuZHNDaGVjayA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHBvc1ggKyBzaGlwLmxlbmd0aCA+IDkgfHwgcG9zWSA+IDkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VtZW50Q2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChlbXB0eUNoZWNrKHBvc1gsIHBvc1ksIHNoaXApICYmIGJvdW5kc0NoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudENoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICBmb3IgKGxldCBpID0gcG9zWDsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWDsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW3Bvc1ldW2ldID0gc2hpcC5uYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHBvc1gsIHBvc1kpID0+IHtcbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gIT09ICcnKSB7XG4gICAgICBib2FyZFtwb3NZXVtwb3NYXSA9ICdoaXQnO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGJvYXJkW3Bvc1ldW3Bvc1hdID0gJ21pc3MnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoc2hpcHMuaW5jbHVkZXMoYm9hcmRbaV1bal0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsIHBsYWNlbWVudENoZWNrLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGdhbWVPdmVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuICBjb25zdCBhdHRhY2sgPSAocG9zWCwgcG9zWSwgYm9hcmQpID0+IHtcbiAgICBpZiAocG9zWCA+IDkgfHwgcG9zWSA+IDkpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gPT09ICcnIHx8IHNoaXBzLmluY2x1ZGVzKGJvYXJkW3Bvc1ldW3Bvc1hdKSkge1xuICAgICAgcmV0dXJuIFtwb3NYLCBwb3NZXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSA9PT0gJycgfHwgc2hpcHMuaW5jbHVkZXMoYm9hcmRbcG9zWV1bcG9zWF0pKSB7XG4gICAgICByZXR1cm4gW3Bvc1gsIHBvc1ldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhdHRhY2ssIHJhbmRvbUF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBQLSR7aX0ke2p9YCk7XG4gICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncC1zcXVhcmUnKTtcbiAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcbiAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuXG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tcHV0ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYEMtJHtpfSR7an1gKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Mtc3F1YXJlJyk7XG4gICAgICBjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNxdWFyZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJCb2FyZHM7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDEpO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocG9zaXRpb25zW2ldICE9PSAwKSB7XG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBpZiAocG9zaXRpb25zLmZpbHRlcigoeCkgPT4geCA9PT0gMCkubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgbmFtZSwgcG9zaXRpb25zLCBoaXQsIGlzU3VuayxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXJEaXZzID0gcGxheWVyQ29udGFpbmVyLmNoaWxkcmVuO1xuY29uc3QgY29tcHV0ZXJEaXZzID0gY29tcHV0ZXJDb250YWluZXIuY2hpbGRyZW47XG5cbmNvbnN0IHVwZGF0ZUJvYXJkcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAvLyBNYWtlIHNoaXBzIG9uIHBsYXllciBib2FyZCB2aXNpYmxlXG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBpZiAoc2hpcHMuaW5jbHVkZXMocGxheWVyQm9hcmRbaV1bal0pKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ3B1cnBsZScpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnbyc7XG4gICAgICB9XG4gICAgICBpZiAoY29tcHV0ZXJCb2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICd4JztcbiAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJCb2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnbyc7XG4gICAgICB9XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEdhbWUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xuXG5sb2FkR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9