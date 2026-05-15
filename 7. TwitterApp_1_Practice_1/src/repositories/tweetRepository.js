import Tweetone from "../schema/tweetSchema.js";

// CREATE A TWEET.............................
export const createTweetRepo = async (tweetBody) => {
  try {
    const response = await Tweetone.create(tweetBody);
    return response;
  } catch (error) {
    throw error;
  }
};

// GET ALL TWEETS........................
export const getAllTweetsRepo = async () => {
  try {
    const tweets = await Tweetone.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

// GET TWEET BY ID.......................
export const getTweetByIdRepo = async (tweetId) => {
  try {
    const tweet = await Tweetone.findById(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};
