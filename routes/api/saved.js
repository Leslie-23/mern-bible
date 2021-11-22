const express = require("express");
const router = express.Router();
const savedCtrl = require("../../controllers/saved");

router.delete("/:id", savedCtrl.remove);

module.exports = router;