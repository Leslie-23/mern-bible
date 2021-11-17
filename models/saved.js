const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema({
  book: String,
  chapter: Number,
  verseNo: String,
  text: String,
});

const savedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  verses: [verseSchema],
});

module.exports = mongoose.model("Saved", savedSchema);
