
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  // image: {
  //   type: String,
  //   require: false,
  // },
  // cloudinaryId: {
  //   type: String,
  //   require: false,
  // },
  count: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);