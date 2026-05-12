import { createCommentService } from "../services/commentService.js";

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

export const v1AddCommentController = async (req, res) => {
  // return res.status(201).json({
  //   success: true,
  //   message: "Successfully Added a Comment",
  // });

  try {
    const comment = await createCommentService(req.body);

    return res.status(201).json({
      success: true,
      message: "Successfully Created a Comment",
      data: comment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
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
