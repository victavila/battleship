import Ship from '../modules/ship';

const newShip = Ship(2, 'Patrol');

test('Hit at index 0', () => {
  newShip.hit();
  expect(newShip.positions[0]).toBe(0);
});

test('isSunk returns true for sunken ship', () => {
  newShip.hit();
  expect(newShip.isSunk()).toBe(true);
});

test('Correct length is returned', () => {
  expect(newShip.length).toBe(2);
});

test('Ship name is returned', () => {
  expect(newShip.name).toBe('Patrol');
});
