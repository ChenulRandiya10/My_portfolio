import express from 'express';
import Image from '../models/Image.js';

const router = express.Router();

// Create image metadata record
router.post('/', async (req, res) => {
  try {
    const { filename, path, url } = req.body;
    if (!filename) return res.status(400).json({ error: 'filename required' });
    const img = new Image({ filename, path, url });
    await img.save();
    res.status(201).json({ success: true, image: img });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get latest image
router.get('/latest', async (req, res) => {
  try {
    const img = await Image.findOne().sort({ createdAt: -1 }).lean();
    if (!img) return res.status(404).json({ error: 'No image found' });
    // If url provided, return it. Otherwise construct static asset path.
    const url = img.url || (/src\/assets\//.test(img.path || '') ? img.path : `/src/assets/${img.filename}`);
    res.json({ image: { ...img, url } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
