const Temperature = require('../models/temperature');

// Lấy tất cả các nhiệt độ
const getAllTemperatures = async (req, res) => {
  try {
    const temperatures = await Temperature.find();
    res.json(temperatures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Lấy nhiệt độ theo ID
const getTemperatureById = async (req, res) => {
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
};

// Tạo nhiệt độ mới
const createTemperature = async (req, res) => {
  try {
    const { value } = req.body;
    const temperature = new Temperature({ value });
    const savedTemperature = await temperature.save();
    res.status(201).json(savedTemperature);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Cập nhật nhiệt độ
const updateTemperature = async (req, res) => {
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
};

// Xóa nhiệt độ
const deleteTemperature = async (req, res) => {
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
};

module.exports = {
  getAllTemperatures,
  getTemperatureById,
  createTemperature,
  updateTemperature,
  deleteTemperature,
};
