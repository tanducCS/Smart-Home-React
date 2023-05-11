const express = require('express');
const Temperature = require('../models/temperature');

const temperatureController = require('../controllers/temperatureController');

const router = express.Router();







// Lấy tất cả các nhiệt độ
router.get('/', async (req, res) => {
  try {
    const temperatures = await Temperature.find();
    res.json(temperatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Lấy nhiệt độ theo ID
router.get('/:id', async (req, res) => {
  try {
    const temperature = await Temperature.findById(req.params.id);
    if (!temperature) {
      return res.status(404).json({ message: 'Temperature not found' });
    }
    res.json(temperature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Tạo nhiệt độ mới
router.post('/', temperatureController.createTemperature);

// Cập nhật nhiệt độ
router.put('/:id', async (req, res) => {
  try {
    const { value } = req.body;
    const updatedTemperature = await Temperature.findByIdAndUpdate(
      req.params.id,
      { value },
      { new: true }
    );
    if (!updatedTemperature) {
      return res.status(404).json({ message: 'Temperature not found' });
    }
    res.json(updatedTemperature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Xóa nhiệt độ
router.delete('/:id', async (req, res) => {
  try {
    const deletedTemperature = await Temperature.findByIdAndDelete(req.params.id);
    if (!deletedTemperature) {
      return res.status(404).json({ message: 'Temperature not found' });
    }
    res.json(deletedTemperature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
