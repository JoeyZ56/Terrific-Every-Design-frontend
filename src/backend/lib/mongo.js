import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDb = async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(import.meta.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
};

export default ConnectDb;
