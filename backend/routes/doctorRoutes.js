const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Get doctors by speciality
router.get('/:speciality', async (req, res) => {
  try {
    const doctors = await Doctor.find({ specialization: req.params.speciality });
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get doctor by ID
router.get('/doctor/:id', async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
