import express from "express";
import {
  createTweetController,
  v1TweetController,
  v1TweetControllerId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", v1TweetController);

router.get("/:id", v1TweetControllerId);

router.post("/create", createTweetController);

export default router;
