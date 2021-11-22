const express = require("express");
const router = express.Router();
const savedCtrl = require("../../controllers/saved");

router.delete("/:id", savedCtrl.remove);
router.get("/", savedCtrl.list);

module.exports = router;