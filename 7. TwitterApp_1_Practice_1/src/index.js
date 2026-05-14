import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get("/ping", (req, res) => {
  return res.json({
    Message: "Pong..",
  });
});

app.get("/ping/:id", (req, res) => {
  console.log(req.params);
  return res.json({
    Message: "Ping With Id",
    id: req.params.id,
  });
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  return res.json({
    Message: "Hello..",
  });
});

app.all(/.*/, (req, res) => {
  return res.status(404).json({
    Error: "Page Not Found, Please Enter Valid Url..",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`);
});
