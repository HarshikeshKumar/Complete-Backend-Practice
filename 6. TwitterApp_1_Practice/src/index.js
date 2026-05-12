import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoute.js";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.post("/hello", (req, res) => {
  return res.json({
    message: "World",
  });
});

app.use(/.*/, (req, res) => {
  return res.json({
    error: "Page Not Found, Please Enter a Valid Url..",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`);
});
