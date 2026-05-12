import express from "express";
import v2TweetRouter from "./v2TweetRoute.js";
import v2CommentRouter from "./v2CommentRoute.js";

const router = express.Router();

router.use("/tweets", v2TweetRouter);
router.use("/comments", v2CommentRouter);

export default router;
