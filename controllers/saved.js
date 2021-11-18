const Saved = require("../models/saved");

const add = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
};

const remove = async (req, res) => {
  try {
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

module.exports = {
  add,
  remove,
};
