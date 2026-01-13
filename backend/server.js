import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) throw new Error("Missing MONGODB_URI in .env");

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
