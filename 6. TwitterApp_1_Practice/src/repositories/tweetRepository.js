import Tweet from "../schema/tweetSchema.js";

// CREATE TWEET REPO..............................
export async function createTweetRepo({ tweet }) {
  try {
    const response = await Tweet.create({ tweet });
    return response;
  } catch (error) {
    throw error;
  }
}

// GET ALL TWEETS REPO...................
export async function getTweetsRepo() {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
}

// GET TWEET BY ID...........................
export async function getTweetByIdRepo(tweetId) {
  try {
    const response = await Tweet.findById(tweetId);
    return response;
  } catch (error) {
    throw error;
  }
}
