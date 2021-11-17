const express = require("express");
const router = express.Router();
const searchCtrl = require("../../controllers/search");

router.post("/", searchCtrl.find);
// router.post("/:book/:chapter", searchCtrl.add);

module.exports = router;
