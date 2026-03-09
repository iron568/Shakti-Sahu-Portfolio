import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  device: { type: String, default: "Unknown" }, // Mobile ya Desktop
  browser: { type: String, default: "Unknown" }, // Chrome, Safari, etc.
  platform: { type: String, default: "Unknown" }, // Windows, iOS, Android
});

const Visitor = mongoose.model("Visitor", visitorSchema);
export default Visitor;
