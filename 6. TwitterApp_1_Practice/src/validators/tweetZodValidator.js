export const zodValidator = (schema) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      schema.parse(req.body);

      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.issues,
        message: "Validation Failed..",
      });
    }
  };
};
