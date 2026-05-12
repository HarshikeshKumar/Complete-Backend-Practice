import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 Comment route..",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 Comments route with Id..",
    id: req.params.id,
  });
});

export default router;
