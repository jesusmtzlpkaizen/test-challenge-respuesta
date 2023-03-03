const { default: expect } = require("expect");

const calculator = require("../calculator");

test("adds a + b", () => {
  const result = calculator.sum(1, 1);
  expect(result).toBe(2);
});

test("substracts a - b", () => {
  const result = calculator.substract(1, 1);
  expect(result).toBe(0);
});

test("multiplies a * b", () => {
  const result = calculator.multiply(1, 1);
  expect(result).toBe(1);
});

test("divides a / b", () => {
  const result = calculator.divide(1, 1);
  expect(result).toBe(1);
});

test("Raises to power a ^ b", () => {
  const result = calculator.power(1, 1);
  expect(result).toBe(1);
});
