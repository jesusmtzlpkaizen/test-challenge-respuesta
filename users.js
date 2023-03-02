// Imports small array of users
module.import { data} from "data.js";
const { data } = require("browserslist");
// Pretend it's an API request
const users = require("./data");

// Fetches all users
const getUsers = (id) => {
  return id;
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };
