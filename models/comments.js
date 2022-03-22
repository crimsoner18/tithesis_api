const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  author: Number,
  datePosted: Date,
  topic: String,
  content: Number,
});

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = { commentModel };
