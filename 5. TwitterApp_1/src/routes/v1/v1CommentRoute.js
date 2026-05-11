import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 Comment route..",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 Comment route with id..",
    id: req.params.id,
  });
});

export default router;
