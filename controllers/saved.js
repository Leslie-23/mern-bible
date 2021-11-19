const Saved = require("../models/saved");

const add = async (req, res) => {
  try {
    console.log(req.body, req.headers)
    res.json({status: 200});
    // console.log(req.user);
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
