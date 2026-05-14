import express from "express";
import {
  createV1TweetController,
  getV1TweetController,
  getV1TweetControllerId,
} from "../../controllers/tweetController.js";
import { tweetZodValidator } from "../../validators/tweetZodValidator.js";
import { tweetZodSchema } from "../../validators/tweetZodSchema.js";
// import { tweetManualValidator } from "../../validators/tweetManualValidator.js";

const router = express.Router();

router.get("/", getV1TweetController);

router.get("/:id", getV1TweetControllerId);

// router.post("/create", tweetManualValidator, createV1TweetController);
router.post(
  "/create",
  tweetZodValidator(tweetZodSchema),
  createV1TweetController,
);

export default router;
