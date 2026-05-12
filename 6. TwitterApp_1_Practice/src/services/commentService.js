import { createCommentRepo } from "../repositories/commentRepository.js";

export const createCommentService = async (commentDetails) => {
  try {
    const comment = await createCommentRepo(commentDetails);
    return comment;
  } catch (error) {
    throw new Error("Service Error: ", error.message);
  }
};
