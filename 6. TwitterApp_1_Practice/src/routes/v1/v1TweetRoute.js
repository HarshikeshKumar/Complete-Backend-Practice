import express from "express";
import {
  v1CreateTweetController,
  v1TweetController,
  v1TweetControllerWithId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", v1TweetController);

router.get("/:id", v1TweetControllerWithId);

router.post("/create", v1CreateTweetController);

export default router;
