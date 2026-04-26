import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://pronobroy3601_db_user:vexh5xdjkqkoYZPr@cluster0.mpex8wj.mongodb.net/?appName=Cluster0"

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI not found in .env");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(MONGODB_URI);

  console.log("MongoDB Connected ✅");
};