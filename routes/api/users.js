const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

/*---------- Public Routes ----------*/
router.post("/signup", usersCtrl.signup);
router.post("/login", usersCtrl.login);

/*---------- Protected Routes ----------*/
router.post("/saved", )
// const isAuthorized = (req, res, next) => {
//     return req.user ? next() : res.status(401).json({message: "not Authorized"})
// }

module.exports = router;
