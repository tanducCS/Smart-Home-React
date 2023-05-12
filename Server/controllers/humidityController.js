const Humidity = require('../models/humidity');


// Tạo độ ẩm mới
const createHumidity = async (req, res) => {
    try {
        const {value } = req.body;
        const humidity = new Humidity({value});
        const savedHumidity = await humidity.save();


        res.status(201).json(savedHumidity);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal server error'})
    }
};

module.exports = {
    createHumidity,
};