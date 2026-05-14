import express from "express";
import {
  createV1CommentController,
  getV1CommentController,
  getV1CommentControllerId,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", getV1CommentController);

router.get("/:id", getV1CommentControllerId);

router.post("/createcomments", createV1CommentController);

export default router;
