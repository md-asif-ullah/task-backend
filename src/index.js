import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { port } from "../config/config.js";
import cookieParser from "cookie-parser";
import dbConfig from "../config/db.config.js";

const app = express();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.send("server is running");
});

// handle errors

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// handle 404 errors
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, async () => {
  console.log(`server running on http://localhost:${port}`);
  await dbConfig();
});
