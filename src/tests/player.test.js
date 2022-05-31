import Player from '../modules/player';

const player1 = Player('player1');

test('Return coordinates', () => {
  expect(player1.attack(1, 1)).toEqual([1, 1]);
});
