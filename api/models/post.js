const mongoose = require("mongoose");

// A Schema defines the "shape" of entries in a collection. This is similar to
// defining the columns of an SQL Database.

const PostSchema = new mongoose.Schema({
  message: {type: String, required:true},
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
  image: {type: String},
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', default: [] }],
  comments: []
}, {timestamps: true});

// We use the Schema to create the Post model. Models are classes which we can
// use to construct entries in our Database.
const Post = mongoose.model("Post", PostSchema);

// These lines will create a test post every time the server starts.
// You can delete this once you are creating your own posts.
// const dateTimeString = new Date().toLocaleString("en-GB");
// new Post({ message: `Test message, created at ${dateTimeString}` }).save();



module.exports = Post;
