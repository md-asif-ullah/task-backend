import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "please enter your email"],
    },
    password: {
      type: String,
      required: [true, "please enter your password"],
      set: (val) => bcrypt.hashSync(val, 10),
    },
  },

  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
