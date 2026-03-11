// import express from "express";
// import nodemailer from "nodemailer";
// import Contact from "../models/Contact.js";
// import Visitor from "../models/Visitor.js";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();

// // 1. Email Transporter Setup
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // Port 587 ke liye false hona chahiye
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// // 2. POST - Contact form logic with Email Notification
// router.post("/", async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body;

//     // Database mein save karein
//     const contact = await Contact.create({ name, email, phone, message });

//     // Email content set karein
//     const mailOptions = {
//       from: "sahushakti928@gmail.com",
//       to: "sahushakti928@gmail.com",
//       subject: `🚀 New Portfolio Message from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
//           <h2 style="color: #06b6d4;">New Contact Request</h2>
//           <hr />
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phone}</p>
//           <p style="background: #f4f4f4; padding: 10px;"><strong>Message:</strong> ${message}</p>
//         </div>
//       `,
//     };

//     // Email bhejyein aur result terminal mein dikhayein
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log("❌ Nodemailer Error:", error);
//       } else {
//         console.log("✅ Email Notification Sent:", info.response);
//       }
//     });

//     res.status(201).json({ success: true, data: contact });
//   } catch (error) {
//     console.error("❌ Route Error:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // 3. GET - Admin dashboard (Contacts list)
// router.get("/", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.json({ success: true, data: contacts });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // 4. GET - Analytics for Admin Dashboard
// router.get("/analytics", async (req, res) => {
//   try {
//     const totalVisitors = await Visitor.countDocuments();
//     const mobileUsers = await Visitor.countDocuments({ device: "Mobile" });
//     const desktopUsers = await Visitor.countDocuments({ device: "Desktop" });

//     res.json({
//       success: true,
//       totalVisitors,
//       deviceStats: { mobileUsers, desktopUsers },
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // 5. DELETE - Admin delete message
// router.delete("/:id", async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.json({ success: true, message: "Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// export default router;

import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";
import Visitor from "../models/Visitor.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// --- RENDER COMPATIBLE TRANSPORTER ---
// backend/routes/contact.js

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Port 587 ke liye ye hamesha false rahega
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // Ye line Render ke security filters ko bypass karne mein help karti hai
    rejectUnauthorized: false,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // 1. Database mein save karein
    const contact = await Contact.create({ name, email, phone, message });

    // 2. Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 Portfolio Message: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 2px solid #06b6d4; border-radius: 15px;">
          <h2 style="color: #06b6d4;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <div style="background: #f0fdfa; padding: 15px; border-radius: 10px; margin-top: 10px;">
            <strong>Message:</strong><br/>${message}
          </div>
        </div>
      `,
    };

    // 3. Email Send logic with better error catching
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Nodemailer Live Error:", error.message);
      } else {
        console.log("✅ Email Sent Successfully!");
      }
    });

    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error("❌ Route Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// ... baaki routes (get, delete, analytics) vese hi rahenge

export default router;
