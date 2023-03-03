const { default: expect } = require("expect");
const DNA = require("../dna");

test("nueva cadena", () => {
  let result = DNA("CAC");
  expect(result).toEqual(["A"]);
});
