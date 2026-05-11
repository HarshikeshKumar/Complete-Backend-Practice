import express from "express";
import {
  v2CommentContrillerId,
  v2CommentController,
} from "../../controllers/commentController.js";

const router = express.Router();

router.get("/", v2CommentController);

router.get("/:id", v2CommentContrillerId);

export default router;
