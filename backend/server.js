import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; // Mongoose ko import kar liya
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.js";
import Visitor from "./models/Visitor.js";

dotenv.config();

// Database connection function call
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(
  cors({
    origin: [
      "https://shakti-sahu-portfolio.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Har request par visitor track karne ka logic
app.use(async (req, res, next) => {
  // Sirf frontend ki main requests ko track karein, images ya files ko nahi
  if (req.method === "GET" && !req.path.includes(".")) {
    try {
      const userAgent = req.headers["user-agent"] || "";
      let device = "Desktop";
      if (/mobile/i.test(userAgent)) device = "Mobile";
      if (/tablet/i.test(userAgent)) device = "Tablet";

      await Visitor.create({
        device: device,
        platform: userAgent.split("(")[1]?.split(";")[0] || "Unknown",
      });
    } catch (err) {
      console.error("Visitor tracking error:", err);
    }
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/contact", contactRoutes);

// Root/Health check endpoint
app.get("/", (req, res) => {
  // Check if database is connected
  const dbStatus =
    mongoose.connection.readyState === 1 ? "Connected ✅" : "Disconnected ❌";
  res.json({
    message: "🚀 Shakti Sahu Portfolio API is Running",
    dbStatus: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
