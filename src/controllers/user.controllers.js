import { jwt_access_secret, jwt_refresh_secret } from "../../config/config.js";
import User from "../models/user.model.js";
import createJwt from "../utils/createJwt.js";
import { errorResponse, successResponse } from "./response.controllers.js";

const addUser = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return errorResponse(res, {
        statusCode: 400,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });

    if (!newUser) {
      return errorResponse(res, {
        statusCode: 400,
        message: "User creation failed",
      });
    }

    const token = createJwt({ email: newUser.email }, jwt_access_secret, "1h");

    res.cookie("token", token, {
      maxAge: 3600000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    const refreshToken = createJwt(
      { email: newUser.email },
      jwt_refresh_secret,
      "7d"
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 604800000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return successResponse(res, {
      statusCode: 201,
      message: "User created successfully",
      data: {
        user: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-__v -password");
    if (!users || users.length === 0) {
      return errorResponse(res, {
        statusCode: 404,
        message: "No users found",
      });
    }
    return successResponse(res, {
      statusCode: 200,
      message: "Users retrieved successfully",
      data: { users },
    });
  } catch (error) {
    return next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-__v -password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

export { addUser, getAllUsers, getUserById };
