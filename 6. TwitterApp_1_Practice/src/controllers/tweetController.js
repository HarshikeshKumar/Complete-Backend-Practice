import {
  createTweetService,
  getTweetByIdService,
  getTweetsService,
} from "../services/tweetService.js";

// FETCHING ALL TWEETS..................................
export const v1TweetController = async (req, res) => {
  // return res.json({
  //   message: "V1 Tweet route controller..",
  // });

  try {
    const tweets = await getTweetsService();

    if (!tweets || tweets.length == 0) {
      return res.status(404).json({
        success: false,
        message: "Tweet Not Found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tweets Fetched Successfully",
      data: tweets,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
      Error: error.message,
    });
  }
};

export const v1TweetControllerWithId = async (req, res) => {
  // return res.json({
  //   message: "V1 Tweet route controller with Id..",
  //   id: req.params.id,
  // });

  try {
    // const { tweetId } = req.params;
    const tweet = await getTweetByIdService(req.params.id);

    if (!tweet) {
      return res.status(404).json({
        success: false,
        message: "Tweet Not Found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tweet Fetched Successfully",
      data: tweet,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// CREATE A TWEET...........................................
export const v1CreateTweetController = async (req, res) => {
  // console.log(req.body);
  // return res.status(201).json({
  //   message: "Successfully created tweet",
  //   success: true,
  //   data: req.body,
  // });

  try {
    const response = await createTweetService({ tweet: req.body.tweet });

    return res.status(201).json({
      success: true,
      message: "Tweet Created Successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const v2TweetController = (req, res) => {
  return res.json({
    message: "V2 Tweet route controller..",
  });
};

export const v2TweetControllerWithId = (req, res) => {
  return res.json({
    message: "V2 Tweet route controller with Id..",
    id: req.params.id,
  });
};
