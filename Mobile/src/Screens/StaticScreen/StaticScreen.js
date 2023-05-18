import React, { useState, useEffect } from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight,Dimensions } from 'react-native';
import axios from 'axios';
const StaticScreen= () => {
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
        labels: ['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon'],
        datasets: [
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
  const [humiditys, setHumiditys] = useState([]);
  const [data1,setData1] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'humidity',
            data: [1,2,3,4,5,6,7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      });
  const fetchhumiditys = async () => {
    try {
      const response = await axios.get('https://smart-home-react.onrender.com/humidity/perday');
      const humiditys = response.data;
      setHumiditys(humiditys);
      // Xử lý dữ liệu nhiệt độ tại đây
    } catch (error) {
      console.error(error);
      // Xử lý lỗi tại đây
    }
    };
  useEffect(() => {
    fetchhumiditys();
  }, []);
  
  useEffect(() => {
    if (humiditys.length > 0) {
      // Xử lý dữ liệu nhiệt độ
      const weeklyhumiditys = new Array(7).fill(0);

      humiditys.forEach((humidity) => {
        const date = new Date(humidity._id);
        const dayOfWeek = date.getDay(); // Lấy ngày trong tuần (0: Chủ nhật, 1-6: Thứ 2-Thứ 7)
        weeklyhumiditys[dayOfWeek] = humidity.averagehumidity;
      });
      
      const newData = {
        labels: ['Sun', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon'],
        datasets: [
          {
            label: 'humidity',
            data: weeklyhumiditys,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
        ],
      };
      console.log(newData)
      setData(newData);
    }
  }, [humiditys]);
  return (
    <View paddingTop="40%">
      <Text>Weekly Chart Temperature</Text>
      {data.datasets[0].data.length > 0 ?<LineChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#00D1FF",
          backgroundGradientFrom: "#00D1FF",
          backgroundGradientTo: "#00D1FF",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor:"blue"
        }}
      />: <p>Loading</p>}
      <Text>Weekly Chart Humidity</Text>
      {data.datasets[0].data.length > 0 ?<LineChart
        data={data1}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#00D1FF",
          backgroundGradientFrom: "#00D1FF",
          backgroundGradientTo: "#00D1FF",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          backgroundColor:"blue"
        }}
      />: <p>Loading</p>}
    </View>
  );
}
export default StaticScreen;