export const v1CommentController = (req, res) => {
  return res.json({
    message: "V1 Comment route controller..",
  });
};

export const v1CommentControllerId = (req, res) => {
  return res.json({
    message: "V1 Comment route controller with Id..",
    id: req.params.id,
  });
};

export const v2CommentController = (req, res) => {
  return res.json({
    message: "V2 Comment route controller..",
  });
};

export const v2CommentControllerId = (req, res) => {
  return res.json({
    message: "V2 Comment route controller with Id..",
    id: req.params.id,
  });
};
