export const v1TweetController = (req, res) => {
  return res.json({
    message: "V1 Tweet route controller..",
  });
};

export const v1TweetControllerId = (req, res) => {
  return res.json({
    message: "V1 Tweet route controller with Id..",
    id: req.params.id,
  });
};

export const createTweetController = (req, res) => {
  return res.json({
    message: "Successfully Created Tweet..",
    success: true,
  });
};

export const v2TweetController = (req, res) => {
  return res.json({
    message: "V2 Tweet route controller..",
  });
};

export const v2TweetControllerId = (req, res) => {
  return res.json({
    message: "V2 Tweet route controller..",
    id: req.params.id,
  });
};
