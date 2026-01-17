import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST message (already exists)
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send message" });
  }
});

// GET all messages (INBOX)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});

export default router;
