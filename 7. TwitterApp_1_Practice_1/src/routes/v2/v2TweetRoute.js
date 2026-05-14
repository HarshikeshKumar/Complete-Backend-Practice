import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    Message: "V2 Tweet Router............",
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    Message: "V2 Tweet Router With Id.......",
    id: req.params.id,
  });
});

router.post("/create", (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "V2 Tweet Created Successfully........",
    data: req.body.tweet,
  });
});

export default router;
