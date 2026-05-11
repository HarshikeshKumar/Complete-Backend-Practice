import express from "express";
import {
  createTweetController,
  v1TweetController,
  v1TweetControllerId,
} from "../../controllers/tweetController.js";
import { validateTweet } from "../../validators/tweetManualValidator.js";
import { tweetZodValidator } from "../../validators/zodValidator.js";
import { tweetZodSchema } from "../../validators/zodSchema.js";

const router = express.Router();

router.get("/", v1TweetController);

router.get("/:id", v1TweetControllerId);

// router.post("/create", validateTweet, createTweetController);
router.post(
  "/create",
  tweetZodValidator(tweetZodSchema),
  createTweetController,
);

export default router;
