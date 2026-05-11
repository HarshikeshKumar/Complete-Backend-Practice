import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V2 Tweet route..",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V2 Tweet route with Id..",
    id: req.params.id,
  });
});

export default router;
