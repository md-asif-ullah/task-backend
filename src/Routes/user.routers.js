import express from "express";
import {
  getAllUsers,
  getUserById,
  userLoginIn,
  userSingUp,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users/singup", userSingUp);
userRouter.get("/users/:id", getUserById);
userRouter.post("/users/login", userLoginIn);

export default userRouter;
