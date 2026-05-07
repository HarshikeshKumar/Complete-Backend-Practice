import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Home Page....",
  });
});

app.get("/about", (req, res) => {
  return res.json({
    message: "About Page....",
  });
});

app.get("/name", (req, res) => {
  return res.json({
    message: "Harshikesh Kumar",
  });
});

app.listen(3000, () => {
  console.log("Server Is Running at localhost:3000");
});
