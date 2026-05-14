import express from "express";
import {
  createV2CommentController,
  getV2CommentController,
  getV2CommentControllerId,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", getV2CommentController);

router.get("/:id", getV2CommentControllerId);

router.post("/createcomments", createV2CommentController);

export default router;
