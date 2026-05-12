export const commentZodValidator = (commentZodSchema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      commentZodSchema.parse(req.body);

      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.issues,
        message: "Comment Validation Failed..",
      });
    }
  };
};
