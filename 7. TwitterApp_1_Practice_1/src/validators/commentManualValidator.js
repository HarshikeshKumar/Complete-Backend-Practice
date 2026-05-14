export const commentManualValidator = (req, res, next) => {
  if (!req.body.comment) {
    return res.status(400).json({
      success: false,
      Message: "Comment should be required....",
    });
  }

  if (req.body.comment.length > 50) {
    return res.status(400).json({
      success: false,
      Message: "Comment should be less than 50 characters...",
    });
  }

  next();
};
