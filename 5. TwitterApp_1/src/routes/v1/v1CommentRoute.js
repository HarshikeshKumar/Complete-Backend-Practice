import express from "express";
import {
  v1CommentController,
  v1CommentControllerId,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", v1CommentController);

router.get("/:id", v1CommentControllerId);

export default router;
