import Comment from "../schema/commentSchema.js";

export const createCommentRepo = async (commentDetails) => {
  try {
    const comment = await Comment.create(commentDetails);
    return comment;
  } catch (error) {
    throw error;
  }
};
