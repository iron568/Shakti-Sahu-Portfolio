import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; // Database connection
import contactRoutes from "./routes/contact.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);

// Health check endpoint
app.get("/", async (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "Connected ✅" : "Disconnected ❌";
  res.json({
    message: "🚀 Portfolio API Running",
    dbStatus,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/`);
});
