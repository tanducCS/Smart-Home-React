const Temperature = require('../models/temperature');
const nodemailer = require('nodemailer');
const { OAuth2Client } = require('google-auth-library');

const GOOGLE_MAILER_CLIENT_ID = '192145918819-2rr0pbu13q3bo1lb8us1th5vafv1ld44.apps.googleusercontent.com'
const GOOGLE_MAILER_CLIENT_SECRET = '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'
const GOOGLE_MAILER_REFRESH_TOKEN = '1//04zrFlKbvwV4OCgYIARAAGAQSNwF-L9IroeU4xmi1s7QwewY3z-CfuaAsvv5q4edRc5F71Z2SrbMecZwJf2iT0al9FgxcWQ6Bqwo'
const ADMIN_EMAIL_ADDRESS = 'cubi28202@gmail.com'

const myOAuth2Client = new OAuth2Client(
  GOOGLE_MAILER_CLIENT_ID,
  GOOGLE_MAILER_CLIENT_SECRET
)

myOAuth2Client.setCredentials({
  refresh_token: GOOGLE_MAILER_REFRESH_TOKEN
})


// Hàm gửi nhiệt độ khi vượt quá ngưỡng
const sendEmailNotification = (temperature,myAccessToken) => {
  const threshold = 35;
  const emailRecipient = 'hotanduc.cs@gmail.com';
  if(temperature > threshold){
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: ADMIN_EMAIL_ADDRESS,
        clientId: GOOGLE_MAILER_CLIENT_ID,
        clientSecret: GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken
      },
    });

    const mailOptions = {
      to: emailRecipient,
      subject: 'Cảnh báo nhiệt độ vượt ngưỡng',
      text: `Nhiệt độ hiện tại là ${temperature}°C, vượt quá ngưỡng ${threshold}°C.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email notification:', error);
      } else {
        console.log('Email notification sent:', info.response);
      }
    });
  }
};


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

    /**
     * Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
     * Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.
     */
    const myAccessTokenObject = await myOAuth2Client.getAccessToken()
    // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
    const myAccessToken = myAccessTokenObject?.token
    // Tạo một biến Transport từ Nodemailer với đầy đủ cấu hình, dùng để gọi hành động gửi mail
    //Gọi hàm sendEmailNotification với nhiệt độ mới
    sendEmailNotification(value, myAccessToken);

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

//Lấy tất cả nhiệt độ của mỗi ngày của tuần trước
const getAvarageTemperaturePerDayLastWeek = async (req, res) => {
  try {
    const today = new Date(); // Ngày hiện tại
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1); // Ngày bắt đầu của tuần (Chủ nhật)
    const endOfWeek = new Date(today.getFullYear(), today.getMonth(), startOfWeek.getDate() + 7); // Ngày kết thúc của tuần (Thứ 7 )


    const temperatures = await Temperature.aggregate([
      {
        $match: {
          date: { $gte: startOfWeek, $lte: endOfWeek },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } },
          averageTemperature: { $avg: '$value' },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    return temperatures;
  } catch (error) {
    console.error(error);
    throw new Error('Error retrieving average temperature data');
  }
}


module.exports = {
  getAvarageTemperaturePerDayLastWeek,
  getAllTemperatures,
  getTemperatureById,
  createTemperature,
  updateTemperature,
  deleteTemperature,
};
