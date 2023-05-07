const mongoose = require('mongoose');

const temperatureSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Temperature', temperatureSchema);