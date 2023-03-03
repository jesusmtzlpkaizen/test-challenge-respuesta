const factNumber = (number) => {
  if (number == 0) return 1;
  else return number * factNumber(number - 1);
};

module.exports = factNumber;
