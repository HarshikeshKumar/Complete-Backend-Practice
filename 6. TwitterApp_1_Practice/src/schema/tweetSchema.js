import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  },
);

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
