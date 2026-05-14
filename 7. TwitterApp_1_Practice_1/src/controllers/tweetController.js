// V1 TWEET CONTROLLER......................................

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
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "Successfully Created V1 Tweet............",
    data: req.body.tweet,
  });
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
