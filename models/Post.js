
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
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  totalSteps: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const Post = module.exports = mongoose.model("Post", PostSchema);

//  var obj =  Post.aggregate([
//   {
//       $group:
//       {
//           _id: { count: "$user" },
//           totalSteps: { $sum: "$count"},
//       }
//   }
// ])

  // .then(result => {
  //     console.log(JSON.stringify(result))
  // })
  // .catch(error => {
  //     console.log(error)
  // })

  var obj = Post.aggregate(
    [
        {
            $group: {
          _id: { count: "$user" },
          sum:{$sum:"$count"},
            }
        },
    ]
)
// console.log(obj)
  
  .then(result => {
    console.log((result[0].sum))
  })
  .catch(error => {
      console.log(error)
  })



