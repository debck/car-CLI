const car = require('../lib/car.js');

test('true argument', () => {
	expect(car.car("in")).toBe("Hindustan Ambassador");
});

test('for random input', () => {
	expect(car.carRandom()).not.toBeNull();
});