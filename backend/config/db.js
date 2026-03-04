// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb://127.0.0.1:27017/portfolio"); // localhost → 127.0.0.1 [web:23]
//     console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//     console.log(`📁 Database: portfolio`);
//   } catch (error) {
//     console.error(`❌ MongoDB Error: ${error.message}`);
//     console.error("💡 Make sure MongoDB is running: mongod");
//     process.exit(1);
//   }
// };

// // Connection events
// mongoose.connection.on("connected", () => {
//   console.log("🔗 Mongoose Connected Successfully");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("❌ Mongoose Error:", err.message);
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("🔌 Mongoose Disconnected");
// });

// export default connectDB;

// backend/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Ye line Render ke MONGODB_URI variable se link uthayegi
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌:", error.message);
    process.exit(1);
  }
};

export default connectDB;
