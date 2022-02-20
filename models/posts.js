const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    author:Number,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comments' }],
    datePosted:new Date(),
    topic: String,
    content:Number,
});

const postModel = mongoose.model("Posts", postSchema);

module.exports = { postModel };