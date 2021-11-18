const express = require("express");
const router = express.Router();
const savedCtrl = require("../../controllers/saved");

router.post("/:book/:chapter", savedCtrl.add)

module.exports = router;
