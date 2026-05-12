import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: true,
      maxlength: 30,
    },
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
