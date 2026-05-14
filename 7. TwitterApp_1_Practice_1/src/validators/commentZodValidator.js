export const commentZodValidator = (schema) => {
  return async (req, res, next) => {
    try {
      console.log("Comment Zod Validator Req Body: ", req.body);
      schema.parse(req.body);

      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        Error: error.issues,
        Message: "Validation Failed..",
      });
    }
  };
};
