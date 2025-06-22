import express from "express";
import { addTask } from "../controllers/Task.controllers.js";

const taskRouter = express.Router();

taskRouter.post("/task", addTask);

export default taskRouter;
