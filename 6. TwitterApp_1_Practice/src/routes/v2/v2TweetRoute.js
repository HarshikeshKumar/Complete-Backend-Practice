import express from "express";
import {
  v2TweetController,
  v2TweetControllerWithId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", v2TweetController);

router.get("/:id", v2TweetControllerWithId);

export default router;
