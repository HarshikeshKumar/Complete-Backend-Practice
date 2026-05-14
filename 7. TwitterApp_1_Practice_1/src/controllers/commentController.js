// V1 COMMENT CONTROLLER....................................

export const getV1CommentController = async (req, res) => {
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V1 Comment Controller....",
  });
};

export const getV1CommentControllerId = async (req, res) => {
  console.log(req.params);
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V1 Comment By Id Controller..",
    id: req.params.id,
  });
};

export const createV1CommentController = async (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "Successfully Created V1 Comment....",
    data: req.body.comment,
  });
};

// V2 COMMENT CONTROLLER......................................

export const getV2CommentController = async (req, res) => {
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V2 Comment Controller...",
  });
};

export const getV2CommentControllerId = async (req, res) => {
  console.log("V2 Comment Id: ", req.params);
  return res.status(200).json({
    success: true,
    Message: "Successfully Fetched V2 Comment By Id Controller..",
    id: req.params.id,
  });
};

export const createV2CommentController = async (req, res) => {
  console.log(req.body);
  return res.status(201).json({
    success: true,
    Message: "Successfully Created V2 Comment.....",
    data: req.body.comment,
  });
};
