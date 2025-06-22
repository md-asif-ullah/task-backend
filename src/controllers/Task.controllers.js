import Task from "../models/task.model.js";
import { errorResponse, successResponse } from "./response.controllers.js";

const addTask = async (req, res, next) => {
  try {
    const { title, description, userId, category, status } = req.body;

    if ((!title || !description || !userId, category)) {
      return errorResponse(res, {
        statusCode: 400,
        message: "Title, description, and userId are required.",
      });
    }

    // Create new task
    const newTask = await Task.create(req.body);

    return successResponse(res, {
      statusCode: 201,
      message: "Task created successfully",
      data: newTask,
    });
  } catch (error) {
    next(error);
  }
};

export { addTask };
