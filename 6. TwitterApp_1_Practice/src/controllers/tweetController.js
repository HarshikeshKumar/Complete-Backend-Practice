export const v1TweetController = (req, res) => {
  return res.json({
    message: "V1 Tweet route controller..",
  });
};

export const v1TweetControllerWithId = (req, res) => {
  return res.json({
    message: "V1 Tweet route controller with Id..",
    id: req.params.id,
  });
};

export const v1CreateTweetController = (req, res) => {
  // console.log(req.body);
  return res.status(201).json({
    message: "Successfully created tweet",
    success: true,
    data: req.body,
  });
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
