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

//Lấy tất cả nhiệt độ của mỗi ngày của tuần trước
const getAvarageHumidityPerDayLastWeek = async (req, res) => {
    try {
      const today = new Date(); // Ngày hiện tại
      const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1); // Ngày bắt đầu của tuần (Chủ nhật)
      const endOfWeek = new Date(today.getFullYear(), today.getMonth(), startOfWeek.getDate() + 7); // Ngày kết thúc của tuần (Thứ 7 )
  
  
      const humidities = await Humidity.aggregate([
        {
          $match: {
            date: { $gte: startOfWeek, $lte: endOfWeek },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
            averageHumidity: { $avg: '$value' },
          },
        },
        {
          $sort: { _id: 1 },
        },
      ]);
  
      return humidities;
    } catch (error) {
      console.error(error);
      throw new Error('Error retrieving average humidity data');
    }
}

module.exports = {
    getAvarageHumidityPerDayLastWeek,
    createHumidity,
};