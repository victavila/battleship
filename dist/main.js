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

  _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();

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
              _disableBoard__WEBPACK_IMPORTED_MODULE_5__["default"].computerOff();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7OztVQ2pDNUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUMsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZGlzYWJsZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lTG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9tb3VzZUV2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9yZW5kZXJCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3VwZGF0ZUJvYXJkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuXG5jb25zdCBjb21wdXRlckRpdnMgPSBjb21wdXRlckNvbnRhaW5lci5jaGlsZHJlbjtcbmNvbnN0IHBsYXllckRpdnMgPSBwbGF5ZXJDb250YWluZXIuY2hpbGRyZW47XG5cbmNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuXG5jb25zdCBkaXNhYmxlQm9hcmQgPSAoKCkgPT4ge1xuICBjb25zdCBjb21wdXRlck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyT2ZmID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5ZXJPZmYgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldFdpZHRocyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJvdGF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dQbGF5QnV0dG9uID0gKCkgPT4ge1xuICAgIHBsYXlCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXB1dGVyT24sXG4gICAgY29tcHV0ZXJPZmYsXG4gICAgcGxheWVyT24sXG4gICAgcGxheWVyT2ZmLFxuICAgIHJlbW92ZVBsYWNlbWVudCxcbiAgICByZXNldFdpZHRocyxcbiAgICBoaWRlQnV0dG9uLFxuICAgIHNob3dQbGF5QnV0dG9uLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZUJvYXJkO1xuIiwiY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXRleHQnKTtcblxuY29uc3Qgc2V0RGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYWNlID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGBQbGFjZSAke3NoaXBOYW1lfWA7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJ1BsYXllclxcJ3MgdHVybic7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXJcXCdzIHR1cm4nO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBTdW5rID0gKHBsYXllck5hbWUsIHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgJHtzaGlwTmFtZX0gd2FzIHN1bmtgO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKG5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7bmFtZX0gd2luc2A7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZSwgc3RhcnRHYW1lLCBwbGF5ZXJUdXJuLCBjb21wdXRlclR1cm4sIHNoaXBTdW5rLCBnYW1lT3ZlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNldERpc3BsYXk7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCByZW5kZXJCb2FyZHMgZnJvbSAnLi9yZW5kZXJCb2FyZHMnO1xuaW1wb3J0IHVwZGF0ZUJvYXJkcyBmcm9tICcuL3VwZGF0ZUJvYXJkcyc7XG5pbXBvcnQgZGlzYWJsZUJvYXJkIGZyb20gJy4vZGlzYWJsZUJvYXJkJztcbmltcG9ydCBzZXREaXNwbGF5IGZyb20gJy4vZGlzcGxheSc7XG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vbW91c2VFdmVudHMnO1xuXG5jb25zdCBsb2FkR2FtZSA9ICgpID0+IHtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcignUGxheWVyJyk7XG4gIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKCdDb21wdXRlcicpO1xuXG4gIGNvbnN0IHBsYXllcjFTaGlwcyA9IFtdO1xuICBjb25zdCBjb21wdXRlclNoaXBzID0gW107XG5cbiAgY29uc3QgcGxhY2VtZW50ID0gW107XG5cbiAgY29uc3QgQ2FycmllcjEgPSBTaGlwKDUsICdDYXJyaWVyJyk7XG4gIGNvbnN0IEJhdHRsZXNoaXAxID0gU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBEZXN0cm95ZXIxID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IFN1Ym1hcmluZTEgPSBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgUGF0cm9sQm9hdDEgPSBTaGlwKDIsICdQYXRyb2wnKTtcblxuICBwbGF5ZXIxU2hpcHMucHVzaChDYXJyaWVyMSwgQmF0dGxlc2hpcDEsIERlc3Ryb3llcjEsIFN1Ym1hcmluZTEsIFBhdHJvbEJvYXQxKTtcblxuICBjb25zdCBDYXJyaWVyMiA9IFNoaXAoNSwgJ0NhcnJpZXInKTtcbiAgY29uc3QgQmF0dGxlc2hpcDIgPSBTaGlwKDQsICdCYXR0bGVzaGlwJyk7XG4gIGNvbnN0IERlc3Ryb3llcjIgPSBTaGlwKDMsICdEZXN0cm95ZXInKTtcbiAgY29uc3QgU3VibWFyaW5lMiA9IFNoaXAoMywgJ1N1Ym1hcmluZScpO1xuICBjb25zdCBQYXRyb2xCb2F0MiA9IFNoaXAoMiwgJ1BhdHJvbCcpO1xuXG4gIGNvbXB1dGVyU2hpcHMucHVzaChDYXJyaWVyMiwgQmF0dGxlc2hpcDIsIERlc3Ryb3llcjIsIFN1Ym1hcmluZTIsIFBhdHJvbEJvYXQyKTtcblxuICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICByZW5kZXJCb2FyZHMoKTtcblxuICBzZXREaXNwbGF5LnBsYWNlKENhcnJpZXIxLm5hbWUpO1xuXG4gIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG5cbiAgLy8gUGxhY2Ugc2hpcHMgb24gcmVzcGVjdGl2ZSBib2FyZHNcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwLXNxdWFyZSBwbGFjZW1lbnQnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgICAgaWYgKCFwbGFjZW1lbnQuaW5jbHVkZXMocGxheWVyMVNoaXBzW2ldKSkge1xuICAgICAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQucGxhY2VtZW50Q2hlY2soK3gsICt5LCBwbGF5ZXIxU2hpcHNbaV0pKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheS5wbGFjZShwbGF5ZXIxU2hpcHNbaSArIDFdLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLnBsYWNlU2hpcCgreCwgK3ksIHBsYXllcjFTaGlwc1tpXSk7XG4gICAgICAgICAgICBwbGFjZW1lbnQucHVzaChwbGF5ZXIxU2hpcHNbaV0pO1xuICAgICAgICAgICAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDQpIHtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgICAgZGlzYWJsZUJvYXJkLnJlbW92ZVBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICBkaXNhYmxlQm9hcmQucmVzZXRXaWR0aHMoKTtcbiAgICAgICAgICAgICAgZGlzYWJsZUJvYXJkLmhpZGVCdXR0b24oKTtcbiAgICAgICAgICAgICAgZGlzYWJsZUJvYXJkLmNvbXB1dGVyT2ZmKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIEV2ZW50cyhwbGF5ZXIxU2hpcHMsIHBsYWNlbWVudCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCByb3RhdGUgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgIGlmIChyb3RhdGUgPT09IDEpIHtcbiAgICAgIGNvbXB1dGVyU2hpcHNbaV0ucm90YXRlU2hpcCgpO1xuICAgIH1cbiAgICB3aGlsZSAoIWNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlbWVudENoZWNrKHgsIHksIGNvbXB1dGVyU2hpcHNbaV0pKSB7XG4gICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQucGxhY2VTaGlwKHgsIHksIGNvbXB1dGVyU2hpcHNbaV0pO1xuICB9XG5cbiAgLy8gUmVuZGVyIGJvYXJkc1xuICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjLXNxdWFyZScpIHtcbiAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0LmlkWzNdO1xuICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbMl07XG4gICAgICBjb25zdCBjb29yZCA9IHBsYXllcjEuYXR0YWNrKHgsIHksIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIGlmIChjb29yZCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkW2Nvb3JkWzFdXVtjb29yZFswXV07XG4gICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRbMF0sIGNvb3JkWzFdKTtcbiAgICAgICAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgICBkaXNhYmxlQm9hcmQuY29tcHV0ZXJPbigpO1xuICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT2ZmKCk7XG4gICAgICAgIHNldERpc3BsYXkuY29tcHV0ZXJUdXJuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcHV0ZXJTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzW2ldLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICBjb21wdXRlclNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgICAgaWYgKGNvbXB1dGVyU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgc2V0RGlzcGxheS5zaGlwU3Vuayhjb21wdXRlci5uYW1lLCBjb21wdXRlclNoaXBzW2ldLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHJhbmRDb29yZCA9IGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQpO1xuICAgICAgd2hpbGUgKHJhbmRDb29yZCA9PT0gbnVsbCkge1xuICAgICAgICByYW5kQ29vcmQgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gcGxheWVyR2FtZWJvYXJkLmJvYXJkW3JhbmRDb29yZFsxXV1bcmFuZENvb3JkWzBdXTtcbiAgICAgIHBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRDb29yZFswXSwgcmFuZENvb3JkWzFdKTtcbiAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkaXNhYmxlQm9hcmQuY29tcHV0ZXJPZmYoKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRpc2FibGVCb2FyZC5wbGF5ZXJPbigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0RGlzcGxheS5wbGF5ZXJUdXJuKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyMVNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChwbGF5ZXIxU2hpcHNbaV0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxU2hpcHNbaV0uaGl0KCk7XG4gICAgICAgICAgaWYgKHBsYXllcjFTaGlwc1tpXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgc2V0RGlzcGxheS5zaGlwU3VuayhwbGF5ZXIxLm5hbWUsIHBsYXllcjFTaGlwc1tpXS5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXJHYW1lYm9hcmQuZ2FtZU92ZXIoKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQuc2hvd1BsYXlCdXR0b24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRpc2FibGVCb2FyZC5jb21wdXRlck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQucGxheWVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldERpc3BsYXkuZ2FtZU92ZXIoY29tcHV0ZXIubmFtZSk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlckdhbWVib2FyZC5nYW1lT3ZlcigpKSB7XG4gICAgICAgIGRpc2FibGVCb2FyZC5zaG93UGxheUJ1dHRvbigpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkaXNhYmxlQm9hcmQuY29tcHV0ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZGlzYWJsZUJvYXJkLnBsYXllck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXREaXNwbGF5LmdhbWVPdmVyKHBsYXllcjEubmFtZSk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkR2FtZTtcbiIsImltcG9ydCBsb2FkR2FtZSBmcm9tICcuL2dhbWUnO1xuXG5jb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbmNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcblxuY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbmNvbnN0IHJlbW92ZUFsbENoaWxkTm9kZXMgPSAocGFyZW50KSA9PiB7XG4gIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn07XG5cbmNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xuICBsb2FkR2FtZSgpO1xuXG4gIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICByb3RhdGVCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2RlcyhwbGF5ZXJCb2FyZCk7XG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb21wdXRlckJvYXJkKTtcbiAgICBsb2FkR2FtZSgpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb29wO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IEFycmF5KDEwKS5maWxsKCcnKS5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwoJycpKTtcblxuICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0Rlc3Ryb3llcicsICdTdWJtYXJpbmUnLCAnUGF0cm9sJ107XG5cbiAgY29uc3QgZW1wdHlDaGVjayA9IChwb3NYLCBwb3NZLCBzaGlwKSA9PiB7XG4gICAgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHBvc1g7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1g7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbcG9zWV1baV0gIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gcG9zWTsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtwb3NYXSAhPT0gJycpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYm91bmRzQ2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmIChwb3NYICsgc2hpcC5sZW5ndGggPiAxMCB8fCBwb3NZID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgaWYgKHBvc1kgKyBzaGlwLmxlbmd0aCA+IDEwIHx8IHBvc1ggPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VtZW50Q2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChib3VuZHNDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSkge1xuICAgICAgaWYgKGVtcHR5Q2hlY2socG9zWCwgcG9zWSwgc2hpcCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChwbGFjZW1lbnRDaGVjayhwb3NYLCBwb3NZLCBzaGlwKSkge1xuICAgICAgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gcG9zWDsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWDsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbcG9zWV1baV0gPSBzaGlwLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gcG9zWTsgaSA8IHNoaXAubGVuZ3RoICsgcG9zWTsgaSArPSAxKSB7XG4gICAgICAgICAgYm9hcmRbaV1bcG9zWF0gPSBzaGlwLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NYLCBwb3NZKSA9PiB7XG4gICAgaWYgKGJvYXJkW3Bvc1ldW3Bvc1hdICE9PSAnJykge1xuICAgICAgYm9hcmRbcG9zWV1bcG9zWF0gPSAnaGl0JztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBib2FyZFtwb3NZXVtwb3NYXSA9ICdtaXNzJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgICAgaWYgKHNoaXBzLmluY2x1ZGVzKGJvYXJkW2ldW2pdKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkLCBwbGFjZW1lbnRDaGVjaywgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBnYW1lT3ZlcixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IHBsYXllckRpdnMgPSBwbGF5ZXJDb250YWluZXIuY2hpbGRyZW47XG5cbmNvbnN0IEV2ZW50cyA9IChwbGF5ZXIxU2hpcHMsIHBsYWNlbWVudCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwLXNxdWFyZSBwbGFjZW1lbnQnKSB7XG4gICAgICBpZiAocGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgY29uc3QgaWQgPSArYCR7ZS50YXJnZXQuZGF0YXNldC5pZFsyXX0ke2UudGFyZ2V0LmRhdGFzZXQuaWRbM119YDtcbiAgICAgICAgcGxheWVyRGl2c1tpZF0uc3R5bGUud2lkdGggPSBgJHsyNSAqIHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5sZW5ndGggLSAxfXB4YDtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmdldERpcmVjdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLmhlaWdodCA9IGAkezI1ICogcGxheWVyMVNoaXBzW3BsYWNlbWVudC5sZW5ndGhdLmxlbmd0aCAtIDF9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwLXNxdWFyZSBwbGFjZW1lbnQnKSB7XG4gICAgICBjb25zdCBpZCA9ICtgJHtlLnRhcmdldC5kYXRhc2V0LmlkWzJdfSR7ZS50YXJnZXQuZGF0YXNldC5pZFszXX1gO1xuICAgICAgcGxheWVyRGl2c1tpZF0uc3R5bGUud2lkdGggPSAnMjNweCc7XG4gICAgICBwbGF5ZXJEaXZzW2lkXS5zdHlsZS5oZWlnaHQgPSAnMjNweCc7XG4gICAgfVxuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3JvdGF0ZScpIHtcbiAgICAgIHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5yb3RhdGVTaGlwKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsImNvbnN0IFBsYXllciA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcbiAgY29uc3QgYXR0YWNrID0gKHBvc1gsIHBvc1ksIGJvYXJkKSA9PiB7XG4gICAgaWYgKHBvc1ggPiA5IHx8IHBvc1kgPiA5KSB7IHJldHVybiBudWxsOyB9XG4gICAgaWYgKGJvYXJkW3Bvc1ldW3Bvc1hdID09PSAnJyB8fCBzaGlwcy5pbmNsdWRlcyhib2FyZFtwb3NZXVtwb3NYXSkpIHtcbiAgICAgIHJldHVybiBbcG9zWCwgcG9zWV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IHJhbmRvbUF0dGFjayA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IHBvc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgcG9zWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBpZiAoYm9hcmRbcG9zWV1bcG9zWF0gPT09ICcnIHx8IHNoaXBzLmluY2x1ZGVzKGJvYXJkW3Bvc1ldW3Bvc1hdKSkge1xuICAgICAgcmV0dXJuIFtwb3NYLCBwb3NZXTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgYXR0YWNrLCByYW5kb21BdHRhY2sgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyLWJvYXJkJyk7XG5cbmNvbnN0IHJlbmRlckJvYXJkcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBwbGF5ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHBsYXllclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgUC0ke2l9JHtqfWApO1xuICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3Atc3F1YXJlJyk7XG4gICAgICBwbGF5ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50Jyk7XG4gICAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyU3F1YXJlKTtcblxuICAgICAgY29uc3QgY29tcHV0ZXJTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbXB1dGVyU3F1YXJlLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBDLSR7aX0ke2p9YCk7XG4gICAgICBjb21wdXRlclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjLXNxdWFyZScpO1xuICAgICAgY29tcHV0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTcXVhcmUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQm9hcmRzO1xuIiwiY29uc3QgU2hpcCA9IChsZW5ndGgsIG5hbWUpID0+IHtcbiAgY29uc3QgcG9zaXRpb25zID0gbmV3IEFycmF5KGxlbmd0aCkuZmlsbCgxKTtcblxuICBsZXQgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAocG9zaXRpb25zW2ldICE9PSAwKSB7XG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBpZiAocG9zaXRpb25zLmZpbHRlcigoeCkgPT4geCA9PT0gMCkubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiBkaXJlY3Rpb247XG5cbiAgY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsIG5hbWUsIHBvc2l0aW9ucywgaGl0LCBpc1N1bmssIGdldERpcmVjdGlvbiwgcm90YXRlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuXG5jb25zdCBwbGF5ZXJEaXZzID0gcGxheWVyQ29udGFpbmVyLmNoaWxkcmVuO1xuY29uc3QgY29tcHV0ZXJEaXZzID0gY29tcHV0ZXJDb250YWluZXIuY2hpbGRyZW47XG5cbmNvbnN0IHVwZGF0ZUJvYXJkcyA9IChwbGF5ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZCkgPT4ge1xuICAvLyBNYWtlIHNoaXBzIG9uIHBsYXllciBib2FyZCB2aXNpYmxlXG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IHNoaXBzID0gWydDYXJyaWVyJywgJ0JhdHRsZXNoaXAnLCAnRGVzdHJveWVyJywgJ1N1Ym1hcmluZScsICdQYXRyb2wnXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBpZiAoc2hpcHMuaW5jbHVkZXMocGxheWVyQm9hcmRbaV1bal0pKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ3B1cnBsZScpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnXFx1MDBkNyc7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXJCb2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ1xcdTIwMjInO1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcHV0ZXJCb2FyZFtpXVtqXSA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICdcXHUwMGQ3JztcbiAgICAgICAgY29tcHV0ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJCb2FyZFtpXVtqXSA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnXFx1MjAyMic7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfVxuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZUJvYXJkcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdhbWVMb29wIGZyb20gJy4vbW9kdWxlcy9nYW1lTG9vcCc7XG5cbmdhbWVMb29wKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=