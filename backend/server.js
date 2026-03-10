import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contact.js";
import Visitor from "./models/Visitor.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Level 0: Ye rasta sirf unique session par hi hit hoga
app.get("/api/track", async (req, res) => {
  const isNewSession = req.headers["x-new-session"] === "true";

  if (isNewSession) {
    try {
      const userAgent = req.headers["user-agent"] || "";
      let device = "Desktop";
      if (/mobile/i.test(userAgent)) device = "Mobile";

      await Visitor.create({
        device: device,
        platform: userAgent.split("(")[1]?.split(";")[0] || "Unknown",
      });
      console.log("✅ Unique Visitor Tracked!");
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ success: false });
    }
  }
  res.json({ success: false, message: "Session already tracked" });
});

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Shakti Sahu Portfolio API is Running",
    status: "Alive",
  });
});

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose"; // Mongoose ko import kar liya
// import connectDB from "./config/db.js";
// import contactRoutes from "./routes/contact.js";
// import Visitor from "./models/Visitor.js";

// dotenv.config();

// // Database connection function call
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 5001;

// // Middlewares
// app.use(
//   cors({
//     origin: [
//       "https://shakti-sahu-portfolio.vercel.app",
//       "http://localhost:3000",
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   }),
// );

// app.use(async (req, res, next) => {
//   // 1. Check karo ki kya ye request frontend ne naye session ke liye bheji hai?
//   const isNewSession = req.headers["x-new-session"] === "true";

//   if (isNewSession) {
//     try {
//       const userAgent = req.headers["user-agent"] || "";
//       let device = "Desktop";
//       if (/mobile/i.test(userAgent)) device = "Mobile";

//       await Visitor.create({
//         device: device,
//         platform: userAgent.split("(")[1]?.split(";")[0] || "Unknown",
//       });
//       console.log("✅ Unique Visitor Tracked!");
//     } catch (err) {
//       console.error("Tracking Error:", err);
//     }
//   }
//   next();
// });

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // API Routes
// app.use("/api/contact", contactRoutes);

// // Root/Health check endpoint
// app.get("/", (req, res) => {
//   // Check if database is connected
//   const dbStatus =
//     mongoose.connection.readyState === 1 ? "Connected ✅" : "Disconnected ❌";
//   res.json({
//     message: "🚀 Shakti Sahu Portfolio API is Running",
//     dbStatus: dbStatus,
//     timestamp: new Date().toISOString(),
//   });
// });

// app.listen(PORT, () => {
//   console.log(`🔥 Server running on http://localhost:${PORT}`);
// });
