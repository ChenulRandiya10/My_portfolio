import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  companyName: { type: String, trim: true, default: '' },
  subject: { type: String, trim: true, default: 'Portfolio inquiry' },
  message: { type: String, required: true, trim: true, minlength: 15 },
  isMarked: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Message', messageSchema);
