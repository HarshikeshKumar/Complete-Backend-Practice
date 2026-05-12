import {
  createCommentRepo,
  getAllCommentsRepo,
} from "../repositories/commentRepository.js";

// CREATE COMMENT SERVICE.................................
export const createCommentService = async (commentDetails) => {
  try {
    const comment = await createCommentRepo(commentDetails);
    return comment;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
};

// GET ALL COMMENTS SERVICE.............................
export const getAllCommentService = async () => {
  try {
    const comments = await getAllCommentsRepo();
    return comments;
  } catch (error) {
    console.log(error);
    throw new Error("Service Error: ", error.message);
  }
};
