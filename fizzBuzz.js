const findnumber = (number) => {
  if (!(number % 5) && !(number % 3)) {
    return "fizzbuzz";
  } else if (!(number % 3)) {
    return "fizz";
  } else if (!(number % 5)) {
    return "buzz";
  } else {
    return number;
  }
};

module.exports = findnumber;
