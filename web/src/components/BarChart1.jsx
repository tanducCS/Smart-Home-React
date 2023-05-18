import React from 'react';
import { useEffect,useState } from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import axios from 'axios'


const BarChart1 = () => {
  const [humidities, setHumidities] = useState([]);
  const [data,setData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Humidity',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1,
          },
        ],
      });
  const fetchHumidities = async () => {
    try {
      const response = await axios.get('http://localhost:3000/humidity/perday');
      const humidities = response.data;
      setHumidities(humidities);
      // Xử lý dữ liệu nhiệt độ tại đây
    } catch (error) {
      console.error(error);
      // Xử lý lỗi tại đây
    }
    };
  useEffect(() => {
    fetchHumidities();
  }, []);
  
  useEffect(() => {
    if (humidities.length > 0) {
      // Xử lý dữ liệu nhiệt độ
      const weeklyHumidities = new Array(7).fill(0);

      humidities.forEach((humidity) => {
        const date = new Date(humidity._id);
        const dayOfWeek = date.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2-Thứ 7)
        weeklyHumidities[dayOfWeek] = humidity.averageHumidity;
      });
      
      const newData = {
        labels: ['Sun', 'Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
        datasets: [
          {
            label: 'Humidity',
            data: weeklyHumidities,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1,
          },
        ],
      };
      console.log(newData)
      setData(newData);
    }
  }, [humidities]);
  
  useEffect(() => {

  }, [data]);
  return (
    <div>
      
      {data.datasets[0].data.length > 0 ? <Bar data = {data}></Bar>: <p>Loading</p>}
      
    </div>
    
  )
}
export default BarChart1;
