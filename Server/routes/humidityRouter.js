const express = require('express');
const humidityController = require('../controllers/humidityController');

const router = express.Router();

// Lấy tất cả độ ẩm 


// Tạo nhiệt độ mới
router.post('/', humidityController.createHumidity);

module.exports = router;