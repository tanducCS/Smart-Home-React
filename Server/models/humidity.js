const mongoose = require('mongoose');

const humiditySchema = new mongoose.Schema({
    value:{
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Humidity', humiditySchema);