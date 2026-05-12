export const manualTweetValidator = (req, res, next) => {
  if (!req.body.tweet) {
    return res.status(400).json({
      success: false,
      message: "Tweet should be required",
    });
  }

  if (req.body.tweet.length > 50) {
    return res.status(400).json({
      success: false,
      message: "Tweet should be less than 50 characters",
    });
  }

  next();
};
