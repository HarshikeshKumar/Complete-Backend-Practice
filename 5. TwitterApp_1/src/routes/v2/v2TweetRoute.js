import express from "express";
import {
  v2TweetController,
  v2TweetControllerId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", v2TweetController);

router.get("/:id", v2TweetControllerId);

export default router;
