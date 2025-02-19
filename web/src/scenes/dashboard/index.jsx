import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import AddIcon from '@mui/icons-material/Add';
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import StatBox1 from "../../components/StatBox1";
import ProgressCircle from "../../components/ProgressCircle";
import Navbar from "../../components/Navbar";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Air, Opacity, Thermostat, Tv, WbIncandescent } from "@mui/icons-material";
import { useState,useEffect } from "react";
import io from 'socket.io-client';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);
  useEffect(() => {
    var hours = String(new Date().getHours()); //Current Hours
    var min = String(new Date().getMinutes()); //Current Minutes
    setCurrentTime(
      hours + ':' + min
    );
  }, []);

  const [temp,setTemp]=useState("default");
  const [humi,setHumi]=useState("default");

  const socket = io.connect('https://smart-home-react.onrender.com:443');
  socket.on('temperatureUpdate', (temperature) => {
    console.log(`Temperature updated: ${temperature}`);
    setTemp(`temperature: ${temperature}`);
  });
  socket.on('humidityUpdate', (humidity) => {
    console.log(`Humidity updated: ${humidity}`);
    setHumi(`humidity: ${humidity}`);
  });
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Home" subtitle="Welcome to Kieu Quan Home" />
        <Box>
          
        </Box>
      </Box>
      <Box 
        display="flex"
        flexDirection="row"
      >
        <Navbar ></Navbar>
        <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              mb: "10px",
              ml: "550px",
              borderRadius: "2"
            }}
          >
            
            <AddIcon></AddIcon>
            Add Device
          </Button>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="200px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox1
            title="Fan"
            subtitle="Active for 3 hours"
            progress="50"
            increase="5Kwh"
            icon={
              <Air
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox1
            title="Fan"
            subtitle="Active for 3 hours"
            progress="50"
            increase="5Kwh"
            icon={
              <Air
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Light 1"
            subtitle="Active for 3 hours"
            progress="50"
            increase="5Kwh"
            icon={
              <WbIncandescent
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Light 2"
            subtitle="Active for 3 hours"
            progress="50"
            increase="5Kwh"
            icon={
              <WbIncandescent
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Overview
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="left"
            mt="15px"
          >
            <WbSunnyIcon fontSize="large"></WbSunnyIcon>
            <Typography variant="h1" fontSize="80px">
              {currentTime}
            </Typography>
            <Typography variant="h5" fontSize="20px">
              {currentDate}
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              mt="30px"
            >
            <Thermostat fontSize="large"></Thermostat>
            <Typography variant="h4">{temp}℃</Typography>
            <Box
              marginLeft="90px"
              display="flex"
              flexDirection="row"
            >
              <Opacity fontSize="large"></Opacity>
              <Typography variant="h4">{humi}%</Typography>
            </Box>
            
            </Box>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Spend
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                35,02KWh
              </Typography>
            </Box>
            <Box>
              <IconButton>

              </IconButton>
            </Box>
          </Box>
          <Box  height="250px" 
                m="-20px 0 0 0"
                
          >
            <BarChart/>
          </Box>
        </Box>
        {/* ROW 3 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
