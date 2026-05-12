import Comment from "../schema/commentSchema.js";

// CREATE COMMENT REPOSITORY............................
export const createCommentRepo = async (commentDetails) => {
  try {
    const comment = await Comment.create(commentDetails);
    return comment;
  } catch (error) {
    throw error;
  }
};

// GET ALL COMMENTS REPOSITORY....................
export const getAllCommentsRepo = async () => {
  try {
    const comments = await Comment.find();
    return comments;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// GET COMMENT BY ID................................
export const getCommentByIdRepo = async (commentId) => {
  try {
    const comment = await Comment.findById(commentId);
    return comment;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
