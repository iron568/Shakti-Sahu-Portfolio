import express from "express";
import Contact from "../models/Contact.js";
import Visitor from "../models/Visitor.js";

const router = express.Router();

// POST - Contact form (Page 115)
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    console.log("📨 New message:", { name, email, phone }); // Page 132
    const contact = await Contact.create({ name, email, phone, message });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Admin dashboard (Page 118)
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, data: contacts, total: contacts.length });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// DELETE - Admin delete (Page 118 - MISSING THA)
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    console.log("🗑️ Message deleted:", req.params.id);
    res.json({ success: true, message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Analytics for Admin Dashboard
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

export default router;
