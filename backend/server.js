require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/route');
const path = require('path');

const app = express();

app.use(cors({
    origin: true, // Allow all origins
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());
// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Use routes
app.use('/api/form', routes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/formdbtrialwebsite';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
