const mongoose = require('mongoose');

const SpecialitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Speciality', SpecialitySchema);
