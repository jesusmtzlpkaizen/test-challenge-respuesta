const { default: expect } = require("expect");
const findnumber = require("../fizzBuzz");

test("fizzbuzz", () => {
  const result = findnumber(17);
  expect(result).toBe(17);
});
