import express from "express";
import {
  v1CreateTweetController,
  v1TweetController,
  v1TweetControllerWithId,
} from "../../controllers/tweetController.js";
import { manualTweetValidator } from "../../validators/tweetManualValidator.js";
import { zodValidator } from "../../validators/tweetZodValidator.js";
import { zodSchema } from "../../validators/zodSchema.js";

const router = express.Router();

router.get("/", v1TweetController);

router.get("/:id", v1TweetControllerWithId);

// router.post("/create", manualTweetValidator, v1CreateTweetController);
router.post("/create", zodValidator(zodSchema), v1CreateTweetController);

export default router;
