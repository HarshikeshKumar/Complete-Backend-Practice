import {
  createCommentService,
  getAllCommentService,
  getCommentByIdService,
} from "../services/commentService.js";

// GET ALL COMMENTS CONTROLLER........................
export const v1CommentController = async (req, res) => {
  try {
    const comments = await getAllCommentService();

    if (!comments) {
      return res.status(404).json({
        success: false,
        message: "Comment Not Found",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully Fetched Comments",
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const v1CommentControllerId = async (req, res) => {
  // return res.json({
  //   message: "V1 Comment route controller with Id..",
  //   id: req.params.id,
  // });

  try {
    const comment = await getCommentByIdService(req.params.id);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment Not Found",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched the comment",
      data: comment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// CREATE COMMENT CONTROLLER..........................
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
