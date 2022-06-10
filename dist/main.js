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
const playButton = document.querySelector('.play');

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
    rotateButton.style.display = 'none';
  };

  const showPlayButton = () => {
    playButton.style.visibility = 'visible';
  };

  return {
    computerOn,
    computerOff,
    playerOn,
    playerOff,
    removePlacement,
    resetWidths,
    hideButton,
    showPlayButton,
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
          _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].showPlayButton();
        }, 1500);
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
        _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].showPlayButton();
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGame);


/***/ }),

/***/ "./src/modules/gameLoop.js":
/*!*********************************!*\
  !*** ./src/modules/gameLoop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


const playButton = document.querySelector('.play');
const rotateButton = document.querySelector('.rotate');

const playerBoard = document.querySelector('.player-board');
const computerBoard = document.querySelector('.computer-board');

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const gameLoop = () => {
  (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();

  playButton.addEventListener('click', (e) => {
    e.target.style.visibility = 'hidden';
    rotateButton.style.display = 'block';
    removeAllChildNodes(playerBoard);
    removeAllChildNodes(computerBoard);
    (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLoop);


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
        playerDivs[id].style.width = `${25 * player1Ships[placement.length].length - 1}px`;
      } else if (player1Ships[placement.length].getDirection() === 'vertical') {
        const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
        playerDivs[id].style.height = `${25 * player1Ships[placement.length].length - 1}px`;
      }
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.className === 'p-square placement') {
      const id = +`${e.target.dataset.id[2]}${e.target.dataset.id[3]}`;
      playerDivs[id].style.width = '23px';
      playerDivs[id].style.height = '23px';
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
        playerDivs[count].textContent = '\u00d7';
        playerDivs[count].classList.add('hit');
      } else if (playerBoard[i][j] === 'miss') {
        playerDivs[count].textContent = '\u2022';
        playerDivs[count].classList.add('miss');
      }
      if (computerBoard[i][j] === 'hit') {
        computerDivs[count].textContent = '\u00d7';
        computerDivs[count].classList.add('hit');
      } else if (computerBoard[i][j] === 'miss') {
        computerDivs[count].textContent = '\u2022';
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
/* harmony import */ var _modules_gameLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameLoop */ "./src/modules/gameLoop.js");


(0,_modules_gameLoop__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3BCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7O1VDakM1QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQyw2REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNhYmxlQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVMb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL21vdXNlRXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3JlbmRlckJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvdXBkYXRlQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5jb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5cbmNvbnN0IGNvbXB1dGVyRGl2cyA9IGNvbXB1dGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jyk7XG5cbmNvbnN0IGRpc2FibGVCb2FyZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyT24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29tcHV0ZXJEaXZzW2ldLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJPZmYgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgY29tcHV0ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGxheWVyT24gPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9mZiA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGxhY2VtZW50ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgncGxhY2VtZW50Jyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0V2lkdGhzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uc3R5bGUud2lkdGggPSAnMjVweCc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhpZGVCdXR0b24gPSAoKSA9PiB7XG4gICAgcm90YXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3Qgc2hvd1BsYXlCdXR0b24gPSAoKSA9PiB7XG4gICAgcGxheUJ1dHRvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY29tcHV0ZXJPbixcbiAgICBjb21wdXRlck9mZixcbiAgICBwbGF5ZXJPbixcbiAgICBwbGF5ZXJPZmYsXG4gICAgcmVtb3ZlUGxhY2VtZW50LFxuICAgIHJlc2V0V2lkdGhzLFxuICAgIGhpZGVCdXR0b24sXG4gICAgc2hvd1BsYXlCdXR0b24sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlQm9hcmQ7XG4iLCJjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXktdGV4dCcpO1xuXG5jb25zdCBzZXREaXNwbGF5ID0gKCgpID0+IHtcbiAgY29uc3QgcGxhY2UgPSAoc2hpcE5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYFBsYWNlICR7c2hpcE5hbWV9YDtcbiAgfTtcblxuICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcbiAgfTtcblxuICBjb25zdCBwbGF5ZXJUdXJuID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnUGxheWVyXFwncyB0dXJuJztcbiAgfTtcblxuICBjb25zdCBjb21wdXRlclR1cm4gPSAoKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9ICdDb21wdXRlclxcJ3MgdHVybic7XG4gIH07XG5cbiAgY29uc3Qgc2hpcFN1bmsgPSAocGxheWVyTmFtZSwgc2hpcE5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7cGxheWVyTmFtZX0ncyAke3NoaXBOYW1lfSB3YXMgc3Vua2A7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAobmFtZSkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSBgJHtuYW1lfSB3aW5zYDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHBsYWNlLCBzdGFydEdhbWUsIHBsYXllclR1cm4sIGNvbXB1dGVyVHVybiwgc2hpcFN1bmssIGdhbWVPdmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0RGlzcGxheTtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHJlbmRlckJvYXJkcyBmcm9tICcuL3JlbmRlckJvYXJkcyc7XG5pbXBvcnQgdXBkYXRlQm9hcmRzIGZyb20gJy4vdXBkYXRlQm9hcmRzJztcbmltcG9ydCBkaXNhYmxlQm9hcmQgZnJvbSAnLi9kaXNhYmxlQm9hcmQnO1xuaW1wb3J0IHNldERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9tb3VzZUV2ZW50cyc7XG5cbmNvbnN0IGxvYWRHYW1lID0gKCkgPT4ge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKCdQbGF5ZXInKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBQbGF5ZXIoJ0NvbXB1dGVyJyk7XG5cbiAgY29uc3QgcGxheWVyMVNoaXBzID0gW107XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBbXTtcblxuICBjb25zdCBwbGFjZW1lbnQgPSBbXTtcblxuICBjb25zdCBDYXJyaWVyMSA9IFNoaXAoNSwgJ0NhcnJpZXInKTtcbiAgY29uc3QgQmF0dGxlc2hpcDEgPSBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gIGNvbnN0IERlc3Ryb3llcjEgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgY29uc3QgU3VibWFyaW5lMSA9IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICBjb25zdCBQYXRyb2xCb2F0MSA9IFNoaXAoMiwgJ1BhdHJvbCcpO1xuXG4gIHBsYXllcjFTaGlwcy5wdXNoKENhcnJpZXIxLCBCYXR0bGVzaGlwMSwgRGVzdHJveWVyMSwgU3VibWFyaW5lMSwgUGF0cm9sQm9hdDEpO1xuXG4gIGNvbnN0IENhcnJpZXIyID0gU2hpcCg1LCAnQ2FycmllcicpO1xuICBjb25zdCBCYXR0bGVzaGlwMiA9IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgRGVzdHJveWVyMiA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBTdWJtYXJpbmUyID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IFBhdHJvbEJvYXQyID0gU2hpcCgyLCAnUGF0cm9sJyk7XG5cbiAgY29tcHV0ZXJTaGlwcy5wdXNoKENhcnJpZXIyLCBCYXR0bGVzaGlwMiwgRGVzdHJveWVyMiwgU3VibWFyaW5lMiwgUGF0cm9sQm9hdDIpO1xuXG4gIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIHJlbmRlckJvYXJkcygpO1xuXG4gIHNldERpc3BsYXkucGxhY2UoQ2FycmllcjEubmFtZSk7XG5cbiAgLy8gUGxhY2Ugc2hpcHMgb24gcmVzcGVjdGl2ZSBib2FyZHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwLXNxdWFyZSBwbGFjZW1lbnQnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFwbGFjZW1lbnQuaW5jbHVkZXMocGxheWVyMVNoaXBzW2ldKSkge1xuICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQucGxhY2VtZW50Q2hlY2soK3gsICt5LCBwbGF5ZXIxU2hpcHNbaV0pKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheS5wbGFjZShwbGF5ZXIxU2hpcHNbaSArIDFdLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCgreCwgK3ksIHBsYXllcjFTaGlwc1tpXSk7XG4gICAgICAgICAgICBwbGFjZW1lbnQucHVzaChwbGF5ZXIxU2hpcHNbaV0pO1xuICAgICAgICAgICAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgZGlzYWJsZUJvYXJkLnJlbW92ZVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICBkaXNhYmxlQm9hcmQucmVzZXRXaWR0aHMoKTtcbiAgICAgICAgICAgICAgZGlzYWJsZUJvYXJkLmhpZGVCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgRXZlbnRzKHBsYXllcjFTaGlwcywgcGxhY2VtZW50KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHJvdGF0ZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgaWYgKHJvdGF0ZSA9PT0gMSkge1xuICAgICAgY29tcHV0ZXJTaGlwc1tpXS5yb3RhdGVTaGlwKCk7XG4gICAgfVxuICAgIHdoaWxlICghY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VtZW50Q2hlY2soeCwgeSwgY29tcHV0ZXJTaGlwc1tpXSkpIHtcbiAgICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cbiAgICBjb21wdXRlckdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgY29tcHV0ZXJTaGlwc1tpXSk7XG4gIH1cblxuICAvLyBSZW5kZXIgYm9hcmRzXG4gIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2Mtc3F1YXJlJykge1xuICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbM107XG4gICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC5pZFsyXTtcbiAgICAgIGNvbnN0IGNvb3JkID0gcGxheWVyMS5hdHRhY2soeCwgeSwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgaWYgKGNvb3JkICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmRbY29vcmRbMV1dW2Nvb3JkWzBdXTtcbiAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZFswXSwgY29vcmRbMV0pO1xuICAgICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPZmYoKTtcbiAgICAgICAgc2V0RGlzcGxheS5jb21wdXRlclR1cm4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wdXRlclNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGNvbXB1dGVyU2hpcHNbaV0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgIGNvbXB1dGVyU2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICBzZXREaXNwbGF5LnNoaXBTdW5rKGNvbXB1dGVyLm5hbWUsIGNvbXB1dGVyU2hpcHNbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgcmFuZENvb3JkID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICB3aGlsZSAocmFuZENvb3JkID09PSBudWxsKSB7XG4gICAgICAgIHJhbmRDb29yZCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBwbGF5ZXJHYW1lYm9hcmQuYm9hcmRbcmFuZENvb3JkWzFdXVtyYW5kQ29vcmRbMF1dO1xuICAgICAgcGxheWVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socmFuZENvb3JkWzBdLCByYW5kQ29vcmRbMV0pO1xuICAgICAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9mZigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZGlzYWJsZUJvYXJkLnBsYXllck9uKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXREaXNwbGF5LnBsYXllclR1cm4oKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIxU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHBsYXllcjFTaGlwc1tpXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjFTaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICBpZiAocGxheWVyMVNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBzZXREaXNwbGF5LnNoaXBTdW5rKHBsYXllcjEubmFtZSwgcGxheWVyMVNoaXBzW2ldLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBsYXllckdhbWVib2FyZC5nYW1lT3ZlcigpKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5zaG93UGxheUJ1dHRvbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3Zlcihjb21wdXRlci5uYW1lKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgZGlzYWJsZUJvYXJkLnNob3dQbGF5QnV0dG9uKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERpc3BsYXkuZ2FtZU92ZXIocGxheWVyMS5uYW1lKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRHYW1lO1xuIiwiaW1wb3J0IGxvYWRHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZScpO1xuXG5jb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcmVtb3ZlQWxsQ2hpbGROb2RlcyA9IChwYXJlbnQpID0+IHtcbiAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gIGxvYWRHYW1lKCk7XG5cbiAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHJvdGF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKHBsYXllckJvYXJkKTtcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbXB1dGVyQm9hcmQpO1xuICAgIGxvYWRHYW1lKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvb3A7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoMTApLmZpbGwoJycpLm1hcCgoKSA9PiBBcnJheSgxMCkuZmlsbCgnJykpO1xuXG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcblxuICBjb25zdCBlbXB0eUNoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gcG9zWDsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFtwb3NZXVtpXSAhPT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NZOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NZOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW3Bvc1hdICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBib3VuZHNDaGVjayA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHBvc1ggKyBzaGlwLmxlbmd0aCA+IDEwIHx8IHBvc1kgPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICBpZiAocG9zWSArIHNoaXAubGVuZ3RoID4gMTAgfHwgcG9zWCA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZW1lbnRDaGVjayA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKGJvdW5kc0NoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICBpZiAoZW1wdHlDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHBsYWNlbWVudENoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwb3NYOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NYOyBpICs9IDEpIHtcbiAgICAgICAgICBib2FyZFtwb3NZXVtpXSA9IHNoaXAubmFtZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBwb3NZOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NZOyBpICs9IDEpIHtcbiAgICAgICAgICBib2FyZFtpXVtwb3NYXSA9IHNoaXAubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHBvc1gsIHBvc1kpID0+IHtcbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gIT09ICcnKSB7XG4gICAgICBib2FyZFtwb3NZXVtwb3NYXSA9ICdoaXQnO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGJvYXJkW3Bvc1ldW3Bvc1hdID0gJ21pc3MnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnYW1lT3ZlciA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgICBpZiAoc2hpcHMuaW5jbHVkZXMoYm9hcmRbaV1bal0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQsIHBsYWNlbWVudENoZWNrLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGdhbWVPdmVyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3QgRXZlbnRzID0gKHBsYXllcjFTaGlwcywgcGxhY2VtZW50KSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Atc3F1YXJlIHBsYWNlbWVudCcpIHtcbiAgICAgIGlmIChwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0uZ2V0RGlyZWN0aW9uKCkgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBjb25zdCBpZCA9ICtgJHtlLnRhcmdldC5kYXRhc2V0LmlkWzJdfSR7ZS50YXJnZXQuZGF0YXNldC5pZFszXX1gO1xuICAgICAgICBwbGF5ZXJEaXZzW2lkXS5zdHlsZS53aWR0aCA9IGAkezI1ICogcGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmxlbmd0aCAtIDF9cHhgO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0uZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgY29uc3QgaWQgPSArYCR7ZS50YXJnZXQuZGF0YXNldC5pZFsyXX0ke2UudGFyZ2V0LmRhdGFzZXQuaWRbM119YDtcbiAgICAgICAgcGxheWVyRGl2c1tpZF0uc3R5bGUuaGVpZ2h0ID0gYCR7MjUgKiBwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0ubGVuZ3RoIC0gMX1weGA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Atc3F1YXJlIHBsYWNlbWVudCcpIHtcbiAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICBwbGF5ZXJEaXZzW2lkXS5zdHlsZS53aWR0aCA9ICcyM3B4JztcbiAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLmhlaWdodCA9ICcyM3B4JztcbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncm90YXRlJykge1xuICAgICAgcGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLnJvdGF0ZVNoaXAoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIiwiY29uc3QgUGxheWVyID0gKG5hbWUpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuICBjb25zdCBhdHRhY2sgPSAocG9zWCwgcG9zWSwgYm9hcmQpID0+IHtcbiAgICBpZiAocG9zWCA+IDkgfHwgcG9zWSA+IDkpIHsgcmV0dXJuIG51bGw7IH1cbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gPT09ICcnIHx8IHNoaXBzLmluY2x1ZGVzKGJvYXJkW3Bvc1ldW3Bvc1hdKSkge1xuICAgICAgcmV0dXJuIFtwb3NYLCBwb3NZXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY29uc3QgcmFuZG9tQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgcG9zWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBwb3NZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSA9PT0gJycgfHwgc2hpcHMuaW5jbHVkZXMoYm9hcmRbcG9zWV1bcG9zWF0pKSB7XG4gICAgICByZXR1cm4gW3Bvc1gsIHBvc1ldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBhdHRhY2ssIHJhbmRvbUF0dGFjayB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcmVuZGVyQm9hcmRzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHBsYXllclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcGxheWVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBQLSR7aX0ke2p9YCk7XG4gICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncC1zcXVhcmUnKTtcbiAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQnKTtcbiAgICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTcXVhcmUpO1xuXG4gICAgICBjb25zdCBjb21wdXRlclNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29tcHV0ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYEMtJHtpfSR7an1gKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2Mtc3F1YXJlJyk7XG4gICAgICBjb21wdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlclNxdWFyZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJCb2FyZHM7XG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCwgbmFtZSkgPT4ge1xuICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgQXJyYXkobGVuZ3RoKS5maWxsKDEpO1xuXG4gIGxldCBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChwb3NpdGlvbnNbaV0gIT09IDApIHtcbiAgICAgICAgcG9zaXRpb25zW2ldID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3VuayA9IGZhbHNlO1xuICAgIGlmIChwb3NpdGlvbnMuZmlsdGVyKCh4KSA9PiB4ID09PSAwKS5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IGRpcmVjdGlvbjtcblxuICBjb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgbmFtZSwgcG9zaXRpb25zLCBoaXQsIGlzU3VuaywgZ2V0RGlyZWN0aW9uLCByb3RhdGVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbmNvbnN0IHBsYXllckRpdnMgPSBwbGF5ZXJDb250YWluZXIuY2hpbGRyZW47XG5jb25zdCBjb21wdXRlckRpdnMgPSBjb21wdXRlckNvbnRhaW5lci5jaGlsZHJlbjtcblxuY29uc3QgdXBkYXRlQm9hcmRzID0gKHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkKSA9PiB7XG4gIC8vIE1ha2Ugc2hpcHMgb24gcGxheWVyIGJvYXJkIHZpc2libGVcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGlmIChzaGlwcy5pbmNsdWRlcyhwbGF5ZXJCb2FyZFtpXVtqXSkpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgncHVycGxlJyk7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICdcXHUwMGQ3JztcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllckJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnXFx1MjAyMic7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb21wdXRlckJvYXJkW2ldW2pdID09PSAnaGl0Jykge1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ1xcdTAwZDcnO1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlckJvYXJkW2ldW2pdID09PSAnbWlzcycpIHtcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICdcXHUyMDIyJztcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlQm9hcmRzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2FtZUxvb3AgZnJvbSAnLi9tb2R1bGVzL2dhbWVMb29wJztcblxuZ2FtZUxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==