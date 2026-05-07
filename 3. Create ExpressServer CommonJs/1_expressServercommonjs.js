const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  return res.json({
    message: "This Is Home Page...",
  });
});

app.listen(3000, () => {
  console.log("Server is Running at localhost:3000");
});
