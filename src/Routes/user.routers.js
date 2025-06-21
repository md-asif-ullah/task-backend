import express from "express";
import {
  addUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);
userRouter.get("/users/:id", getUserById);

export default userRouter;
