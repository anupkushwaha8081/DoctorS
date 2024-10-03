const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
const connectDb = async (req, res) => {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection.STATES.connected) return console.log("Database Connected");
    if (connection.STATES.disconnected)
      return console.log("Database Disconnected");
  };

  connectDb();
const specialityRoutes = require('./routes/specialityRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

app.use('/api/specialities', specialityRoutes);
app.use('/api/doctors', doctorRoutes);

module.exports = app;
