import Tweetone from "../schema/tweetSchema.js";

export const createTweetRepo = async (tweetBody) => {
  try {
    const response = await Tweetone.create(tweetBody);
    return response;
  } catch (error) {
    throw error;
  }
};
