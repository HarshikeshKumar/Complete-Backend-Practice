import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoute.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

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

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
