const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  datePosted: {
    type: Date,
    default: Date.now,
  },
  postedBy: String,
  title: String,
  body: String,
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = { postModel };
