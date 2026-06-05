import express from 'express';
import mongoose from 'mongoose';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res
        .status(503)
        .json({ error: 'Database not connected. Set MONGO_URI in server/.env to enable the contact form.' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const msg = new Message(req.body);
    await msg.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;