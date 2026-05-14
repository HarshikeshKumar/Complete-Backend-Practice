import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    Message: "V2 Comment Router.......",
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    Message: "V2 Comment Router With Id.......",
    id: req.params.id,
  });
});

router.post("/createcomments", (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "V2 Comment Created Successfully........",
    data: req.body.comment,
  });
});

export default router;
