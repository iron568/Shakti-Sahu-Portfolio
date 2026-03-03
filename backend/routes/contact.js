import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST - Contact form (Page 115)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("📨 New message:", { name, email }); // Page 132
    const contact = await Contact.create({ name, email, message });
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

export default router;
