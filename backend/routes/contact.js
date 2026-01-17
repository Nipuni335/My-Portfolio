import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  console.log("📩 New Contact Message:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.status(200).json({ message: "Message sent successfully" });
});

export default router;
