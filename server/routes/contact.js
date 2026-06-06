import express from 'express';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import Message from '../models/Message.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

const router = express.Router();

function isAdminPasswordValid(password) {
  const configuredPassword = process.env.MESSAGES_ADMIN_PASSWORD;
  return Boolean(configuredPassword && password && password === configuredPassword);
}

function requireAdmin(req, res, next) {
  const password = req.get('x-admin-password');

  if (!isAdminPasswordValid(password)) {
    return res.status(401).json({ error: 'Unauthorized.' });
  }

  next();
}

router.post('/admin-login', (req, res) => {
  const { password } = req.body;

  if (!isAdminPasswordValid(password)) {
    return res.status(401).json({ error: 'Invalid admin password.' });
  }

  res.json({ success: true });
});

router.get('/', requireAdmin, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).lean();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/:id/marked', requireAdmin, async (req, res) => {
  try {
    const { isMarked } = req.body;
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isMarked: Boolean(isMarked) },
      { new: true, runValidators: true }
    ).lean();

    if (!message) {
      return res.status(404).json({ error: 'Message not found.' });
    }

    res.json(message);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, companyName = '', subject = '', message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    if (message.trim().length < 15) {
      return res.status(400).json({ error: 'Message must be at least 15 characters.' });
    }

    const msg = new Message({
      name,
      email,
      companyName,
      subject,
      message,
    });
    await msg.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
