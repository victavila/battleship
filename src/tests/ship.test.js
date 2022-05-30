import Ship from '../modules/ship';

const newShip = Ship(2);

test('Hit at index 0', () => {
  newShip.hit(0);
  expect(newShip.positions[0]).toBe(0);
});

test('isSunk returns true for sunken ship', () => {
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(true);
});

test('Correct length is returned', () => {
  expect(newShip.length).toBe(2);
});
