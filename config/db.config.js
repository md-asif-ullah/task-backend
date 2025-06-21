import mongoose from "mongoose";
import { mongodb_url } from "./config.js";

const dbConfig = async () => {
  try {
    const connected = await mongoose.connect(mongodb_url);
    if (connected) {
      console.log("Connected to DB successfully!");
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default dbConfig;
