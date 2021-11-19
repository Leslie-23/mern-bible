const Saved = require("../models/saved");

const list = async (req, res) => {
  try {
    const userSavedList = await Saved.findOne({ user: req.user._id });
    console.log(userSavedList.verses, "<= userSavedList.verses");
    res.status(200).json({ verses: userSavedList.verses });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const add = async (req, res) => {
  try {
    const userSavedList = await Saved.findOne({ user: req.user._id });
    userSavedList.verses.push(req.body);
    userSavedList.save();
    res.json({ status: 200 });
  } catch (err) {
    res.status(200).json({ err });
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
  list,
  add,
  remove,
};
