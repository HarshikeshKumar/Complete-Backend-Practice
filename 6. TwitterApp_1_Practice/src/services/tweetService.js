import { Filter } from "bad-words";
import {
  createTweetRepo,
  getTweetByIdRepo,
  getTweetsRepo,
} from "../repositories/tweetRepository.js";

// CREATE TWEET SETVICE.....................................
export async function createTweetService({ tweet }) {
  const filter = new Filter();

  if (filter.isProfane(tweet)) {
    console.log(tweet);
    console.log(filter.clean(tweet));
    throw {
      message: "Tweet contains blocked-words",
      status: 400,
    };
  }

  const response = await createTweetRepo({ tweet });
  return response;
}

// GET ALL TWEETS SERVICE.................
export async function getTweetsService() {
  try {
    const tweets = await getTweetsRepo();
    return tweets;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
}

// GET TWEET BY ID........
export const getTweetByIdService = async (tweetId) => {
  try {
    const tweet = await getTweetByIdRepo(tweetId);
    return tweet;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
};
