const express = require('express');
const humidityController = require('../controllers/humidityController');

const router = express.Router();

// Lấy tất cả độ ẩm 
router.get('/perday', async (req, res) => {
    try {
      const humidities = await humidityController.getAvarageHumidityPerDayLastWeek();
      res.json(humidities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving average humidity data' });
    }
  });

// Tạo nhiệt độ mới
router.post('/', humidityController.createHumidity);

module.exports = router;