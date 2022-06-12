/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
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

const dom = (() => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
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

  _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();

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
              _dom__WEBPACK_IMPORTED_MODULE_5__["default"].removePlacement();
              _dom__WEBPACK_IMPORTED_MODULE_5__["default"].resetWidths();
              _dom__WEBPACK_IMPORTED_MODULE_5__["default"].hideButton();
              _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOff();
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
        _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        _dom__WEBPACK_IMPORTED_MODULE_5__["default"].playerOff();
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
        _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOff();
      }, 1500);
      setTimeout(() => {
        _dom__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
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
          _dom__WEBPACK_IMPORTED_MODULE_5__["default"].showPlayButton();
        }, 1500);
        setTimeout(() => {
          _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        }, 1500);
        setTimeout(() => {
          _dom__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
        }, 1500);
        setTimeout(() => {
          _display__WEBPACK_IMPORTED_MODULE_6__["default"].gameOver(computer.name);
        }, 1500);
      } else if (computerGameboard.gameOver()) {
        _dom__WEBPACK_IMPORTED_MODULE_5__["default"].showPlayButton();
        setTimeout(() => {
          _dom__WEBPACK_IMPORTED_MODULE_5__["default"].computerOn();
        }, 1500);
        setTimeout(() => {
          _dom__WEBPACK_IMPORTED_MODULE_5__["default"].playerOn();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7VUNqQzVCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDLDZEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbW91c2VFdmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvcmVuZGVyQm9hcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy91cGRhdGVCb2FyZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXRleHQnKTtcblxuY29uc3Qgc2V0RGlzcGxheSA9ICgoKSA9PiB7XG4gIGNvbnN0IHBsYWNlID0gKHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGBQbGFjZSAke3NoaXBOYW1lfWA7XG4gIH07XG5cbiAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gIH07XG5cbiAgY29uc3QgcGxheWVyVHVybiA9ICgpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gJ1BsYXllclxcJ3MgdHVybic7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJUdXJuID0gKCkgPT4ge1xuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSAnQ29tcHV0ZXJcXCdzIHR1cm4nO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBTdW5rID0gKHBsYXllck5hbWUsIHNoaXBOYW1lKSA9PiB7XG4gICAgZGlzcGxheS50ZXh0Q29udGVudCA9IGAke3BsYXllck5hbWV9J3MgJHtzaGlwTmFtZX0gd2FzIHN1bmtgO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKG5hbWUpID0+IHtcbiAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gYCR7bmFtZX0gd2luc2A7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZSwgc3RhcnRHYW1lLCBwbGF5ZXJUdXJuLCBjb21wdXRlclR1cm4sIHNoaXBTdW5rLCBnYW1lT3ZlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNldERpc3BsYXk7XG4iLCJjb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuXG5jb25zdCBjb21wdXRlckRpdnMgPSBjb21wdXRlckNvbnRhaW5lci5jaGlsZHJlbjtcbmNvbnN0IHBsYXllckRpdnMgPSBwbGF5ZXJDb250YWluZXIuY2hpbGRyZW47XG5cbmNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUnKTtcbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheScpO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICBjb25zdCBjb21wdXRlck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyT2ZmID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIGNvbXB1dGVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBsYXllck9uID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICAgIHBsYXllckRpdnNbaV0uY2xhc3NMaXN0LmFkZCgnZGlzYWJsZScpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwbGF5ZXJPZmYgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkgKz0gMSkge1xuICAgICAgcGxheWVyRGl2c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlJyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBsYWNlbWVudCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlbWVudCcpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNldFdpZHRocyA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgICBwbGF5ZXJEaXZzW2ldLnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlQnV0dG9uID0gKCkgPT4ge1xuICAgIHJvdGF0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IHNob3dQbGF5QnV0dG9uID0gKCkgPT4ge1xuICAgIHBsYXlCdXR0b24uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvbXB1dGVyT24sXG4gICAgY29tcHV0ZXJPZmYsXG4gICAgcGxheWVyT24sXG4gICAgcGxheWVyT2ZmLFxuICAgIHJlbW92ZVBsYWNlbWVudCxcbiAgICByZXNldFdpZHRocyxcbiAgICBoaWRlQnV0dG9uLFxuICAgIHNob3dQbGF5QnV0dG9uLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgcmVuZGVyQm9hcmRzIGZyb20gJy4vcmVuZGVyQm9hcmRzJztcbmltcG9ydCB1cGRhdGVCb2FyZHMgZnJvbSAnLi91cGRhdGVCb2FyZHMnO1xuaW1wb3J0IGRvbSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgc2V0RGlzcGxheSBmcm9tICcuL2Rpc3BsYXknO1xuaW1wb3J0IEV2ZW50cyBmcm9tICcuL21vdXNlRXZlbnRzJztcblxuY29uc3QgbG9hZEdhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoJ1BsYXllcicpO1xuICBjb25zdCBjb21wdXRlciA9IFBsYXllcignQ29tcHV0ZXInKTtcblxuICBjb25zdCBwbGF5ZXIxU2hpcHMgPSBbXTtcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IFtdO1xuXG4gIGNvbnN0IHBsYWNlbWVudCA9IFtdO1xuXG4gIGNvbnN0IENhcnJpZXIxID0gU2hpcCg1LCAnQ2FycmllcicpO1xuICBjb25zdCBCYXR0bGVzaGlwMSA9IFNoaXAoNCwgJ0JhdHRsZXNoaXAnKTtcbiAgY29uc3QgRGVzdHJveWVyMSA9IFNoaXAoMywgJ0Rlc3Ryb3llcicpO1xuICBjb25zdCBTdWJtYXJpbmUxID0gU2hpcCgzLCAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IFBhdHJvbEJvYXQxID0gU2hpcCgyLCAnUGF0cm9sJyk7XG5cbiAgcGxheWVyMVNoaXBzLnB1c2goQ2FycmllcjEsIEJhdHRsZXNoaXAxLCBEZXN0cm95ZXIxLCBTdWJtYXJpbmUxLCBQYXRyb2xCb2F0MSk7XG5cbiAgY29uc3QgQ2FycmllcjIgPSBTaGlwKDUsICdDYXJyaWVyJyk7XG4gIGNvbnN0IEJhdHRsZXNoaXAyID0gU2hpcCg0LCAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBEZXN0cm95ZXIyID0gU2hpcCgzLCAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IFN1Ym1hcmluZTIgPSBTaGlwKDMsICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgUGF0cm9sQm9hdDIgPSBTaGlwKDIsICdQYXRyb2wnKTtcblxuICBjb21wdXRlclNoaXBzLnB1c2goQ2FycmllcjIsIEJhdHRsZXNoaXAyLCBEZXN0cm95ZXIyLCBTdWJtYXJpbmUyLCBQYXRyb2xCb2F0Mik7XG5cbiAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgcmVuZGVyQm9hcmRzKCk7XG5cbiAgc2V0RGlzcGxheS5wbGFjZShDYXJyaWVyMS5uYW1lKTtcblxuICBkb20uY29tcHV0ZXJPbigpO1xuXG4gIC8vIFBsYWNlIHNoaXBzIG9uIHJlc3BlY3RpdmUgYm9hcmRzXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncC1zcXVhcmUgcGxhY2VtZW50Jykge1xuICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRbM107XG4gICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC5pZFsyXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICAgIGlmICghcGxhY2VtZW50LmluY2x1ZGVzKHBsYXllcjFTaGlwc1tpXSkpIHtcbiAgICAgICAgICBpZiAocGxheWVyR2FtZWJvYXJkLnBsYWNlbWVudENoZWNrKCt4LCAreSwgcGxheWVyMVNoaXBzW2ldKSkge1xuICAgICAgICAgICAgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkucGxhY2UocGxheWVyMVNoaXBzW2kgKyAxXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoK3gsICt5LCBwbGF5ZXIxU2hpcHNbaV0pO1xuICAgICAgICAgICAgcGxhY2VtZW50LnB1c2gocGxheWVyMVNoaXBzW2ldKTtcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgICAgICAgIGlmIChpID09PSA0KSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkuc3RhcnRHYW1lKCk7XG4gICAgICAgICAgICAgIGRvbS5yZW1vdmVQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgZG9tLnJlc2V0V2lkdGhzKCk7XG4gICAgICAgICAgICAgIGRvbS5oaWRlQnV0dG9uKCk7XG4gICAgICAgICAgICAgIGRvbS5jb21wdXRlck9mZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBFdmVudHMocGxheWVyMVNoaXBzLCBwbGFjZW1lbnQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3Qgcm90YXRlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICBpZiAocm90YXRlID09PSAxKSB7XG4gICAgICBjb21wdXRlclNoaXBzW2ldLnJvdGF0ZVNoaXAoKTtcbiAgICB9XG4gICAgd2hpbGUgKCFjb21wdXRlckdhbWVib2FyZC5wbGFjZW1lbnRDaGVjayh4LCB5LCBjb21wdXRlclNoaXBzW2ldKSkge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuICAgIGNvbXB1dGVyR2FtZWJvYXJkLnBsYWNlU2hpcCh4LCB5LCBjb21wdXRlclNoaXBzW2ldKTtcbiAgfVxuXG4gIC8vIFJlbmRlciBib2FyZHNcbiAgdXBkYXRlQm9hcmRzKHBsYXllckdhbWVib2FyZC5ib2FyZCwgY29tcHV0ZXJHYW1lYm9hcmQuYm9hcmQpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnYy1zcXVhcmUnKSB7XG4gICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC5pZFszXTtcbiAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0LmlkWzJdO1xuICAgICAgY29uc3QgY29vcmQgPSBwbGF5ZXIxLmF0dGFjayh4LCB5LCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBpZiAoY29vcmQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjb21wdXRlckdhbWVib2FyZC5ib2FyZFtjb29yZFsxXV1bY29vcmRbMF1dO1xuICAgICAgICBjb21wdXRlckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkWzBdLCBjb29yZFsxXSk7XG4gICAgICAgIHVwZGF0ZUJvYXJkcyhwbGF5ZXJHYW1lYm9hcmQuYm9hcmQsIGNvbXB1dGVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgICAgZG9tLmNvbXB1dGVyT24oKTtcbiAgICAgICAgZG9tLnBsYXllck9mZigpO1xuICAgICAgICBzZXREaXNwbGF5LmNvbXB1dGVyVHVybigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoY29tcHV0ZXJTaGlwc1tpXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgY29tcHV0ZXJTaGlwc1tpXS5oaXQoKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlclNoaXBzW2ldLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsoY29tcHV0ZXIubmFtZSwgY29tcHV0ZXJTaGlwc1tpXS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCByYW5kQ29vcmQgPSBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyR2FtZWJvYXJkLmJvYXJkKTtcbiAgICAgIHdoaWxlIChyYW5kQ29vcmQgPT09IG51bGwpIHtcbiAgICAgICAgcmFuZENvb3JkID0gY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICB9XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IHBsYXllckdhbWVib2FyZC5ib2FyZFtyYW5kQ29vcmRbMV1dW3JhbmRDb29yZFswXV07XG4gICAgICBwbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kQ29vcmRbMF0sIHJhbmRDb29yZFsxXSk7XG4gICAgICB1cGRhdGVCb2FyZHMocGxheWVyR2FtZWJvYXJkLmJvYXJkLCBjb21wdXRlckdhbWVib2FyZC5ib2FyZCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9tLmNvbXB1dGVyT2ZmKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb20ucGxheWVyT24oKTtcbiAgICAgIH0sIDE1MDApO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldERpc3BsYXkucGxheWVyVHVybigpO1xuICAgICAgfSwgMTUwMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcjFTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAocGxheWVyMVNoaXBzW2ldLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMVNoaXBzW2ldLmhpdCgpO1xuICAgICAgICAgIGlmIChwbGF5ZXIxU2hpcHNbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgIHNldERpc3BsYXkuc2hpcFN1bmsocGxheWVyMS5uYW1lLCBwbGF5ZXIxU2hpcHNbaV0ubmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyR2FtZWJvYXJkLmdhbWVPdmVyKCkpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9tLnNob3dQbGF5QnV0dG9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb20uY29tcHV0ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9tLnBsYXllck9uKCk7XG4gICAgICAgIH0sIDE1MDApO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXREaXNwbGF5LmdhbWVPdmVyKGNvbXB1dGVyLm5hbWUpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXJHYW1lYm9hcmQuZ2FtZU92ZXIoKSkge1xuICAgICAgICBkb20uc2hvd1BsYXlCdXR0b24oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9tLmNvbXB1dGVyT24oKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvbS5wbGF5ZXJPbigpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0RGlzcGxheS5nYW1lT3ZlcihwbGF5ZXIxLm5hbWUpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEdhbWU7XG4iLCJpbXBvcnQgbG9hZEdhbWUgZnJvbSAnLi9nYW1lJztcblxuY29uc3QgcGxheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5Jyk7XG5jb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlJyk7XG5cbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuXG5jb25zdCByZW1vdmVBbGxDaGlsZE5vZGVzID0gKHBhcmVudCkgPT4ge1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgbG9hZEdhbWUoKTtcblxuICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgcm90YXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMocGxheWVyQm9hcmQpO1xuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoY29tcHV0ZXJCb2FyZCk7XG4gICAgbG9hZEdhbWUoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9vcDtcbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBBcnJheSgxMCkuZmlsbCgnJykubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG5cbiAgY29uc3Qgc2hpcHMgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbCddO1xuXG4gIGNvbnN0IGVtcHR5Q2hlY2sgPSAocG9zWCwgcG9zWSwgc2hpcCkgPT4ge1xuICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSBwb3NYOyBpIDwgc2hpcC5sZW5ndGggKyBwb3NYOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkW3Bvc1ldW2ldICE9PSAnJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgZm9yIChsZXQgaSA9IHBvc1k7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1k7IGkgKz0gMSkge1xuICAgICAgICBpZiAoYm9hcmRbaV1bcG9zWF0gIT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGJvdW5kc0NoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBpZiAocG9zWCArIHNoaXAubGVuZ3RoID4gMTAgfHwgcG9zWSA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGlmIChwb3NZICsgc2hpcC5sZW5ndGggPiAxMCB8fCBwb3NYID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlbWVudENoZWNrID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAoYm91bmRzQ2hlY2socG9zWCwgcG9zWSwgc2hpcCkpIHtcbiAgICAgIGlmIChlbXB0eUNoZWNrKHBvc1gsIHBvc1ksIHNoaXApKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHBvc1gsIHBvc1ksIHNoaXApID0+IHtcbiAgICBpZiAocGxhY2VtZW50Q2hlY2socG9zWCwgcG9zWSwgc2hpcCkpIHtcbiAgICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvc1g7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1g7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW3Bvc1ldW2ldID0gc2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvc1k7IGkgPCBzaGlwLmxlbmd0aCArIHBvc1k7IGkgKz0gMSkge1xuICAgICAgICAgIGJvYXJkW2ldW3Bvc1hdID0gc2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocG9zWCwgcG9zWSkgPT4ge1xuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSAhPT0gJycpIHtcbiAgICAgIGJvYXJkW3Bvc1ldW3Bvc1hdID0gJ2hpdCc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgYm9hcmRbcG9zWV1bcG9zWF0gPSAnbWlzcyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGlmIChzaGlwcy5pbmNsdWRlcyhib2FyZFtpXVtqXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZCwgcGxhY2VtZW50Q2hlY2ssIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgZ2FtZU92ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBwbGF5ZXJEaXZzID0gcGxheWVyQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5jb25zdCBFdmVudHMgPSAocGxheWVyMVNoaXBzLCBwbGFjZW1lbnQpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncC1zcXVhcmUgcGxhY2VtZW50Jykge1xuICAgICAgaWYgKHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5nZXREaXJlY3Rpb24oKSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGNvbnN0IGlkID0gK2Ake2UudGFyZ2V0LmRhdGFzZXQuaWRbMl19JHtlLnRhcmdldC5kYXRhc2V0LmlkWzNdfWA7XG4gICAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLndpZHRoID0gYCR7MjUgKiBwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0ubGVuZ3RoIC0gMX1weGA7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5nZXREaXJlY3Rpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBjb25zdCBpZCA9ICtgJHtlLnRhcmdldC5kYXRhc2V0LmlkWzJdfSR7ZS50YXJnZXQuZGF0YXNldC5pZFszXX1gO1xuICAgICAgICBwbGF5ZXJEaXZzW2lkXS5zdHlsZS5oZWlnaHQgPSBgJHsyNSAqIHBsYXllcjFTaGlwc1twbGFjZW1lbnQubGVuZ3RoXS5sZW5ndGggLSAxfXB4YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncC1zcXVhcmUgcGxhY2VtZW50Jykge1xuICAgICAgY29uc3QgaWQgPSArYCR7ZS50YXJnZXQuZGF0YXNldC5pZFsyXX0ke2UudGFyZ2V0LmRhdGFzZXQuaWRbM119YDtcbiAgICAgIHBsYXllckRpdnNbaWRdLnN0eWxlLndpZHRoID0gJzIzcHgnO1xuICAgICAgcGxheWVyRGl2c1tpZF0uc3R5bGUuaGVpZ2h0ID0gJzIzcHgnO1xuICAgIH1cbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdyb3RhdGUnKSB7XG4gICAgICBwbGF5ZXIxU2hpcHNbcGxhY2VtZW50Lmxlbmd0aF0ucm90YXRlU2hpcCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudHM7XG4iLCJjb25zdCBQbGF5ZXIgPSAobmFtZSkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0Rlc3Ryb3llcicsICdTdWJtYXJpbmUnLCAnUGF0cm9sJ107XG4gIGNvbnN0IGF0dGFjayA9IChwb3NYLCBwb3NZLCBib2FyZCkgPT4ge1xuICAgIGlmIChwb3NYID4gOSB8fCBwb3NZID4gOSkgeyByZXR1cm4gbnVsbDsgfVxuICAgIGlmIChib2FyZFtwb3NZXVtwb3NYXSA9PT0gJycgfHwgc2hpcHMuaW5jbHVkZXMoYm9hcmRbcG9zWV1bcG9zWF0pKSB7XG4gICAgICByZXR1cm4gW3Bvc1gsIHBvc1ldO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBjb25zdCByYW5kb21BdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBwb3NYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHBvc1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgaWYgKGJvYXJkW3Bvc1ldW3Bvc1hdID09PSAnJyB8fCBzaGlwcy5pbmNsdWRlcyhib2FyZFtwb3NZXVtwb3NYXSkpIHtcbiAgICAgIHJldHVybiBbcG9zWCwgcG9zWV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIGF0dGFjaywgcmFuZG9tQXR0YWNrIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWJvYXJkJyk7XG5jb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1ib2FyZCcpO1xuXG5jb25zdCByZW5kZXJCb2FyZHMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgcGxheWVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBwbGF5ZXJTcXVhcmUuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYFAtJHtpfSR7an1gKTtcbiAgICAgIHBsYXllclNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwLXNxdWFyZScpO1xuICAgICAgcGxheWVyU3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudCcpO1xuICAgICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllclNxdWFyZSk7XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVyU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb21wdXRlclNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgQy0ke2l9JHtqfWApO1xuICAgICAgY29tcHV0ZXJTcXVhcmUuY2xhc3NMaXN0LmFkZCgnYy1zcXVhcmUnKTtcbiAgICAgIGNvbXB1dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyU3F1YXJlKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckJvYXJkcztcbiIsImNvbnN0IFNoaXAgPSAobGVuZ3RoLCBuYW1lKSA9PiB7XG4gIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBBcnJheShsZW5ndGgpLmZpbGwoMSk7XG5cbiAgbGV0IGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHBvc2l0aW9uc1tpXSAhPT0gMCkge1xuICAgICAgICBwb3NpdGlvbnNbaV0gPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGxldCBzdW5rID0gZmFsc2U7XG4gICAgaWYgKHBvc2l0aW9ucy5maWx0ZXIoKHgpID0+IHggPT09IDApLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICBzdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4gZGlyZWN0aW9uO1xuXG4gIGNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLCBuYW1lLCBwb3NpdGlvbnMsIGhpdCwgaXNTdW5rLCBnZXREaXJlY3Rpb24sIHJvdGF0ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcHV0ZXItYm9hcmQnKTtcblxuY29uc3QgcGxheWVyRGl2cyA9IHBsYXllckNvbnRhaW5lci5jaGlsZHJlbjtcbmNvbnN0IGNvbXB1dGVyRGl2cyA9IGNvbXB1dGVyQ29udGFpbmVyLmNoaWxkcmVuO1xuXG5jb25zdCB1cGRhdGVCb2FyZHMgPSAocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQpID0+IHtcbiAgLy8gTWFrZSBzaGlwcyBvbiBwbGF5ZXIgYm9hcmQgdmlzaWJsZVxuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBzaGlwcyA9IFsnQ2FycmllcicsICdCYXR0bGVzaGlwJywgJ0Rlc3Ryb3llcicsICdTdWJtYXJpbmUnLCAnUGF0cm9sJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgaWYgKHNoaXBzLmluY2x1ZGVzKHBsYXllckJvYXJkW2ldW2pdKSkge1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdwdXJwbGUnKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIHBsYXllckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ1xcdTAwZDcnO1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyQm9hcmRbaV1bal0gPT09ICdtaXNzJykge1xuICAgICAgICBwbGF5ZXJEaXZzW2NvdW50XS50ZXh0Q29udGVudCA9ICdcXHUyMDIyJztcbiAgICAgICAgcGxheWVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXB1dGVyQm9hcmRbaV1bal0gPT09ICdoaXQnKSB7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0udGV4dENvbnRlbnQgPSAnXFx1MDBkNyc7XG4gICAgICAgIGNvbXB1dGVyRGl2c1tjb3VudF0uY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyQm9hcmRbaV1bal0gPT09ICdtaXNzJykge1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLnRleHRDb250ZW50ID0gJ1xcdTIwMjInO1xuICAgICAgICBjb21wdXRlckRpdnNbY291bnRdLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgIH1cbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVCb2FyZHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnYW1lTG9vcCBmcm9tICcuL21vZHVsZXMvZ2FtZUxvb3AnO1xuXG5nYW1lTG9vcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9