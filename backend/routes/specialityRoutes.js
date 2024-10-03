const express = require('express');
const Speciality = require('../models/Speciality');
const router = express.Router();

// Get all specialities
router.get('/', async (req, res) => {
  try {
    const specialities = await Speciality.find();
    res.status(200).json(specialities);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
