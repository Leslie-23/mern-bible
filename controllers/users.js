const User = require("../models/user");
const Saved = require("../models/saved");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

async function signup(req, res) {
  console.log(req.body, "<= req.body");
  const user = new User(req.body);
  console.log(user, "<= new user");
  const savedList = new Saved({user: user._id});
  console.log(savedList, "<= user's savedList");
  
  try {
    await user.save();
    await savedList.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    console.log(err, "<= error in controller");
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

const list = (req, res) => {
  console.log(req.user);
  return -1; //find saved list belonging to user
};

module.exports = {
  signup,
  login,
  list,
};

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: "24h" }
  );
}
