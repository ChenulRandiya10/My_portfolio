import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String },
  url: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Image', imageSchema);
