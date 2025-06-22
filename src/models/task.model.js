import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "please enter your email"],
    },
    status: {
      type: String,
      required: true,
      trim: true,
      default: "pending",
      enum: ["pending", "Done", "Ongoing", "collaborative task"],
    },
    category: {
      type: String,
      required: true,
      trim: true,
      default: "Family",
      enum: [
        "Arts and Craft",
        "Meditation",
        "Friends",
        "Sport",
        "Family",
        "Nature",
      ],
    },
  },

  { timestamps: true }
);

const Task = model("task", taskSchema);

export default Task;
