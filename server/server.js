import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import contactRoute from './routes/contact.js';
import imagesRoute from './routes/images.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '.env') });

// Fail fast instead of buffering database commands for ~10s when MongoDB is
// not connected, so API responses are immediate and easy to diagnose.
mongoose.set('bufferCommands', false);

const app = express();
const port = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api/contact', contactRoute);
app.use('/api/images', imagesRoute);

const server = app.listen(port, () => console.log(`Server running on port ${port}`));

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `Port ${port} is already in use. Stop the process using it or set a different PORT in server/.env.`
    );
  } else {
    console.error('Server failed to start:', err.message);
  }
  process.exit(1);
});

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection failed:', err.message));
} else {
  console.warn(
    'MONGO_URI not set — running without a database. The site works, but the contact form and image endpoints are disabled. Copy server/.env.example to server/.env and set MONGO_URI to enable them.'
  );
}
