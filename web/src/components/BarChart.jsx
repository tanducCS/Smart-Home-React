import React from 'react';
import { useEffect,useState } from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import axios from 'axios'


const BarChart = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [data,setData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Temperature',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
  const fetchTemperatures = async () => {
    try {
      const response = await axios.get('https://smart-home-react.onrender.com/temperature/perday');
      const temperatures = response.data;
      setTemperatures(temperatures);
      // Xử lý dữ liệu nhiệt độ tại đây
    } catch (error) {
      console.error(error);
      // Xử lý lỗi tại đây
    }
    };
  useEffect(() => {
    fetchTemperatures();
  }, []);
  
  useEffect(() => {
    if (temperatures.length > 0) {
      // Xử lý dữ liệu nhiệt độ
      const weeklyTemperatures = new Array(7).fill(0);

      temperatures.forEach((temperature) => {
        const date = new Date(temperature._id);
        const dayOfWeek = date.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2-Thứ 7)
        weeklyTemperatures[dayOfWeek] = temperature.averageTemperature;
      });
      
      const newData = {
        labels: ['Sun', 'Mon','Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
        datasets: [
          {
            label: 'Temperature',
            data: weeklyTemperatures,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
          {
            label: 'Temperature',
            data: weeklyTemperatures,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
        ],
      };
      console.log(newData)
      setData(newData);
    }
  }, [temperatures]);
  
  useEffect(() => {

  }, [data]);
  return (
    <div>
      
      {data.datasets[0].data.length > 0 ? <Bar data = {data}></Bar>: <p>Loading</p>}
      
    </div>
    
  )
}
export default BarChart;
