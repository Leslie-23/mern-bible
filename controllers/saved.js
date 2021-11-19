const Saved = require("../models/saved");

const list = async(req, res) => {
  try {
    Saved.find()
  } catch(err) {

  }
}

const add = async (req, res) => {
  try {
    console.log(req.body, "<= req.body"); // working
    console.log(req.user, "<= req.user"); //working
    Saved.findOne({ user: req.user._id }, function (err, userSavedList) {
      console.log(userSavedList);
      // userSavedList.verses.push(req.body);
      // console.log(userSavedList);
      // userSavedList.save();
    });
    res.json({ status: 200 });
  } catch (err) {
    res.send(err);
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

const list = async (req, res) => {

}

module.exports = {
  list,
  add,
  remove,
};
