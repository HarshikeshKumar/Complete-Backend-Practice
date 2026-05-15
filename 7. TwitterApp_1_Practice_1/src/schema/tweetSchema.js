import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      trim: true,
      maxlength: 50,
      minlength: 1,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Tweetone = mongoose.model("Tweetone", tweetSchema);

export default Tweetone;
