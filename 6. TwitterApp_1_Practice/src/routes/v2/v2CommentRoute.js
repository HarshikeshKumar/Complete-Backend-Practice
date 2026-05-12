import express from "express";
import {
  v2CommentController,
  v2CommentControllerId,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", v2CommentController);

router.get("/:id", v2CommentControllerId);

export default router;
