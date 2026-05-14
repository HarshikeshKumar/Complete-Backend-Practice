import express from "express";
import {
  createV2CommentController,
  getV2CommentController,
  getV2CommentControllerId,
} from "../../controllers/commentController.js";
import { commentZodValidator } from "../../validators/commentZodValidator.js";
import { commentZodSchema } from "../../validators/commentZodSchema.js";
// import { commentManualValidator } from "../../validators/commentManualValidator.js";

const router = express.Router();

router.get("/", getV2CommentController);

router.get("/:id", getV2CommentControllerId);

// router.post(
//   "/createcomments",
//   commentManualValidator,
//   createV2CommentController,
// );

router.post(
  "/createcomments",
  commentZodValidator(commentZodSchema),
  createV2CommentController,
);

export default router;
