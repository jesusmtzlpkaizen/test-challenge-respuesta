const { default: expect } = require("expect");
const factNumber = require("../factorial");

test("el factorial", () => {
  const result = factNumber(3);
  expect(result).toBe(6);
});
