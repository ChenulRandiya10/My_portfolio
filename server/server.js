import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoute from './routes/contact.js';
import imagesRoute from './routes/images.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5005;

// Configure CORS with specific origins for production
const corsOptions = {
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(',') : true,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/contact', contactRoute);
app.use('/api/images', imagesRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); // Exit if MongoDB connection fails
  });

app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
