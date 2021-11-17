const mongoose = require("mongoose");

const verseSchema = new mongoose.Schema(
  {
    book: String,
    chapter: Number,
    verseNo: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const savedSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    verses: [verseSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Saved", savedSchema);
