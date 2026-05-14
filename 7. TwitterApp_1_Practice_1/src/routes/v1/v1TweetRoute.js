import express from "express";
import {
  createV1TweetController,
  getV1TweetController,
  getV1TweetControllerId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getV1TweetController);

router.get("/:id", getV1TweetControllerId);

router.post("/create", createV1TweetController);

export default router;
