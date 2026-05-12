import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 Tweet route..",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 Tweet route with Id..",
    id: req.params.id,
  });
});

router.post("/create", (req, res) => {
  return res.status(201).json({
    message: "Successfully Created tweet",
    success: false,
  });
});

export default router;
