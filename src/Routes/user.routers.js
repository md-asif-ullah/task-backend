import express from "express";
import {
  getAllUsers,
  getUserById,
  resetPassword,
  userLoginIn,
  userSingUp,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users/singup", userSingUp);
userRouter.get("/users/:id", getUserById);
userRouter.post("/users/login", userLoginIn);
userRouter.post("/users/reset-password", resetPassword);

export default userRouter;
