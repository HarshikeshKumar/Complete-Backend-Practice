import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "V1 Tweet route..",
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "V1 Tweet route with id..",
    id: req.params.id,
  });
});

router.post("/create", (req, res) => {
  return res.json({
    success: true,
    message: "Successfully Tweet Created..",
  });
});

export default router;
