import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, default: "Unknown" },
    date: String,
    price: { type: Number, required: true },
    shortDesc: String,
    fullDesc: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.models.Event ||
  mongoose.model("Event", eventSchema);