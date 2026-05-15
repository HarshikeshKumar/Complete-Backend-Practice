// V1 TWEET CONTROLLER......................................

import { createTweetService } from "../services/tweetService.js";

export const getV1TweetController = async (req, res) => {
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V1 Tweet Controller..",
  });
};

export const getV1TweetControllerId = async (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V1 Tweet By Id Controller....",
    id: req.params.id,
  });
};

export const createV1TweetController = async (req, res) => {
  try {
    const response = await createTweetService(req.body);

    if (!response) {
      return res.status(404).json({
        success: false,
        Message: "Tweet Not Found",
      });
    }

    return res.status(201).json({
      success: true,
      Message: "Tweet Created Successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      Message: "Internal Server Error",
    });
  }
};

// V2 TWEET CONTROLLER........................................

export const getV2TweetController = async (req, res) => {
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V2 Tweet Controller..",
  });
};

export const getV2TweetControllerId = async (req, res) => {
  console.log("V2 Tweet Id: ", req.params);
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V2 Tweet By Id Controller..",
    id: req.params.id,
  });
};

export const createV2TweetController = async (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "Successfully Created V2 Tweet.......",
    data: req.body.tweet,
  });
};
