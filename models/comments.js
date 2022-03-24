const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  author: String,
  datePosted: { type: Date, default: Date.now },

  content: String,
  post: { type: Schema.Types.ObjectId, ref: "Post" },
});

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = { commentModel };
