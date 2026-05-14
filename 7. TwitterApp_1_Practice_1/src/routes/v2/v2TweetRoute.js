import express from "express";
import {
  createV2TweetController,
  getV2TweetController,
  getV2TweetControllerId,
} from "../../controllers/tweetController.js";

const router = express.Router();

router.get("/", getV2TweetController);

router.get("/:id", getV2TweetControllerId);

router.post("/create", createV2TweetController);

export default router;
