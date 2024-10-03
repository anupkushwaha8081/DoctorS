const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  specialization: {
    type: [String],
    required: true,
  },
  profilepicurl: {
    type: String,
    required: true,
  },
  seotitle: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Doctor', DoctorSchema);
