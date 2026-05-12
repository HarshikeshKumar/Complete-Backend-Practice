import express from "express";
import {
  v1AddCommentController,
  v1CommentController,
  v1CommentControllerId,
} from "../../controllers/commentController.js";
import { commentZodValidator } from "../../validators/commentZodValidator.js";
import { commentZodSchema } from "../../validators/commentZodSchema.js";

const router = express.Router();

router.get("/", v1CommentController);

router.get("/:id", v1CommentControllerId);

router.post(
  "/addcomments",
  commentZodValidator(commentZodSchema),
  v1AddCommentController,
);

export default router;
