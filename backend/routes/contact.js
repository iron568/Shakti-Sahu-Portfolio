import express from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";
import Visitor from "../models/Visitor.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
});

// 1. POST - Contact Form (Ye sahi tha)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({ name, email, phone, message });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🚀 Portfolio Message: ${name}`,
      html: `<div style="padding: 20px; border: 2px solid #06b6d4;"><h2>New Inquiry</h2><p>${message}</p></div>`,
    };

    transporter.sendMail(mailOptions);
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. GET - Admin Analytics (PATH FIX)
router.get("/analytics", async (req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();
    const mobileUsers = await Visitor.countDocuments({ device: "Mobile" });
    const desktopUsers = await Visitor.countDocuments({ device: "Desktop" });

    res.json({
      success: true,
      totalVisitors,
      deviceStats: { mobileUsers, desktopUsers },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. GET - All Messages
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 4. DELETE - Delete message
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 5. PATCH - Update status (Trash/Restore)
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body; // Status "read" ya "replied" ke bajaye hum "trash" use kar sakte hain
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    res.json({ success: true, data: updatedContact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
