import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.post("/hello", (req, res) => {
  return res.json({
    message: "World..",
  });
});

app.all(/.*/, (req, res) => {
  return res.json({
    message: "Please Enter a Valid API",
  });
});

app.listen(3000, () => {
  console.log("Server is running at https://localhost:3000");
});
