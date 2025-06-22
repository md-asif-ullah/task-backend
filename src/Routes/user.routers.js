import express from "express";
import {
  getAllUsers,
  getUserById,
  logout,
  profile,
  resetPassword,
  userLoginIn,
  userSingUp,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/users/logout", logout);
userRouter.get("/users", getAllUsers);
userRouter.post("/users/singup", userSingUp);
userRouter.get("/users/:id", getUserById);
userRouter.post("/users/login", userLoginIn);
userRouter.post("/users/reset-password", resetPassword);
userRouter.get("/users/profile", profile);

export default userRouter;
