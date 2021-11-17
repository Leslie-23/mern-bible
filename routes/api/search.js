const express = require("express");
const router = express.Router();
const searchCtrl = require("../../controllers/search");

router.post("/", searchCtrl.add);

module.exports = router;
