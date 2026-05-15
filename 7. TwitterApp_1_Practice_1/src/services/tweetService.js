import {
  createTweetRepo,
  getAllTweetsRepo,
  getTweetByIdRepo,
} from "../repositories/tweetRepository.js";

export const createTweetService = async (tweetBody) => {
  try {
    const response = await createTweetRepo(tweetBody);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Service Error: ", error.message);
  }
};

// GET ALL TWEETS..........................
export const getAllTweetsService = async () => {
  try {
    const tweets = await getAllTweetsRepo();
    return tweets;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
};

// GET TWEET BY ID.................................
export const getTweetByIdService = async (tweetId) => {
  try {
    const tweet = await getTweetByIdRepo(tweetId);
    return tweet;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
};
