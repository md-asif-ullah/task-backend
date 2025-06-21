import express from "express";
import {
  getAllUsers,
  getUserById,
  userSingUp,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", userSingUp);
userRouter.get("/users/:id", getUserById);

export default userRouter;
