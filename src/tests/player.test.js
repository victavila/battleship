import Player from '../modules/player';
import Gameboard from '../modules/gameboard';

const player1 = Player('player1');
const computer = Player('computer');
const game = Gameboard();

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('Return coordinates', () => {
  expect(player1.attack(1, 1, game.board)).toEqual([1, 1]);
});

test('Cant attack same location twice', () => {
  game.receiveAttack(1, 1);
  expect(player1.attack(1, 1, game.board)).toBe(null);
});

test('Cant attack outside of board', () => {
  expect(player1.attack(10, 10, game.board)).toBe(null);
});

test('Computer makes random attack', () => {
  expect(computer.randomAttack(game.board)).toEqual([0, 0]);
});

test('Computer does not attack same location twice', () => {
  game.receiveAttack(0, 0);
  expect(computer.randomAttack(game.board)).toBe(null);
});
