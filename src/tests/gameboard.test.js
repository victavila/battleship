import Gameboard from '../modules/gameboard';
import Ship from '../modules/ship';

const Carrier = Ship(5, 'Carrier');
const Battleship = Ship(4, 'Battleship');
const game = Gameboard();

test('Place ship on gameboard at position (0, 0)', () => {
  game.placeShip(0, 0, Carrier);
  expect(game.board).toEqual([['Carrier', 'Carrier', 'Carrier', 'Carrier', 'Carrier', '', '', '', '', '']].concat(new Array(9).fill(new Array(10).fill(''))));
});

test('Cant place ship on occupied spaces', () => {
  game.placeShip(3, 0, Battleship);
  expect(game.board).toEqual([['Carrier', 'Carrier', 'Carrier', 'Carrier', 'Carrier', '', '', '', '', '']].concat(new Array(9).fill(new Array(10).fill(''))));
});

test('Cant place ship outside of board', () => {
  game.placeShip(9, 9, Battleship);
  expect(game.board).toEqual([['Carrier', 'Carrier', 'Carrier', 'Carrier', 'Carrier', '', '', '', '', '']].concat(new Array(9).fill(new Array(10).fill(''))));
});

test('Hit ship if at position (0, 0)', () => {
  expect(game.receiveAttack(0, 0)).toBe(true);
  expect(game.board).toEqual([['hit', 'Carrier', 'Carrier', 'Carrier', 'Carrier', '', '', '', '', '']].concat(new Array(9).fill(new Array(10).fill(''))));
});

test('Miss ship at empty position (5, 0)', () => {
  expect(game.receiveAttack(5, 0)).toBe(false);
  expect(game.board).toEqual([['hit', 'Carrier', 'Carrier', 'Carrier', 'Carrier', 'miss', '', '', '', '']].concat(new Array(9).fill(new Array(10).fill(''))));
});
