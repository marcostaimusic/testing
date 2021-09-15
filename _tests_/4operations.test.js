const { sum, subtract, mult, divide} = require('../app/4operations');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1)
})

test('multiply 3 * 2 to equal 6', () => {
    expect(mult(3, 2)).toBe(6)
})

test('divide 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2)
})