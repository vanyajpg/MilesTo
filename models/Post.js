const mongoose = require("mongoose");
// const User = require('./User');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: 'Steps Walked',
  },
  count: {
    type: Number,
    required: true,
  },
//   image: {
//     type: String,
//     require: true,
//   },
//   cloudinaryId: {
//     type: String,
//     require: true,
//   },
  caption: {
    type: String,
    required: true,
  },
//   likes: {
//     type: Number,
//     required: true,
//   },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", PostSchema);