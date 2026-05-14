import express from "express";
import {
  createV1CommentController,
  getV1CommentController,
  getV1CommentControllerId,
} from "../../controllers/commentController.js";
import { commentZodValidator } from "../../validators/commentZodValidator.js";
import { commentZodSchema } from "../../validators/commentZodSchema.js";
// import { commentManualValidator } from "../../validators/commentManualValidator.js";

const router = express.Router();

router.get("/", getV1CommentController);

router.get("/:id", getV1CommentControllerId);

// router.post(
//   "/createcomments",
//   commentManualValidator,
//   createV1CommentController,
// );

router.post(
  "/createcomments",
  commentZodValidator(commentZodSchema),
  createV1CommentController,
);

export default router;
