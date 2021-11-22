const Saved = require("../models/saved");

const list = async (req, res) => {
  try {
    const userSavedList = await Saved.findOne({ user: req.user._id });
    // console.log(userSavedList.verses, "<= userSavedList.verses"); // working
    res.status(200).json({ verses: userSavedList.verses });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const add = async (req, res) => {
  try {
    const userSavedList = await Saved.findOne({ user: req.user._id });
    userSavedList.verses.push(req.body);
    await userSavedList.save();
    res.json({ status: 200 });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const remove = async (req, res) => {
  try {
    // console.log(req.user);
    const userSavedList = await Saved.findOne({ user: req.user._id });
    const verseToDelete = userSavedList.verses.find(
      ({ _id }) => String(_id) === req.params.id
    );
    const index = userSavedList.verses.indexOf(verseToDelete);
    userSavedList.verses.splice(index, 1);
    await userSavedList.save();
    res.json({ status: 200 });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
};

module.exports = {
  list,
  add,
  remove,
};
