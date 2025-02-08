require('dotenv').config(); // Load environment variables

import express, { json } from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes'; // Import routes

const app = express();

const cors = require('cors');

app.use(cors()); // Enable CORS for frontend-backend communication
app.use(json()); // Enable JSON parsing in requests

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
