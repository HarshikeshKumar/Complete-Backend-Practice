import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Successfully Connected To MongoDB..");
  } catch (error) {
    console.log("Not Able to Connect to DB..");
    console.log(error);
  }
}

export default connectDB;
