const express = require("express");
const router = express.Router();
const savedCtrl = require("../../controllers/saved");

router.post("/", savedCtrl.add);

module.exports = router;
