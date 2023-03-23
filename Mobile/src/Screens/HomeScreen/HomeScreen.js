import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

const HomeScreen= () => {
  return (
  <View
    gridColumn="span 4"
    gridRow="span 2"
    backgroundColor={"#fff"}
    p="30px"
  >
    <View
    
    justifyContent= {'center'}
    backgroundColor={"#2A2A37"}
    width="100%"
    height="30%"
    >
    <Text style={styles.baseText}>
      Your Home
    </Text>
  </View>
    <View
      display="flex"
      flexDirection="column"
      alignItems="left"
      mt="15px"
    >
      <MaterialCommunityIcons name="weather-sunny" color={"#00d1ff"} size="59%" />
      <Text variant="h1" fontSize="80">
        08:00
      </Text>
      <Text variant="h5" fontSize="20">
        20/11/2002
      </Text>
      <View
        display="flex"
        flexDirection="row"
        mt="30"
      >
        <MaterialCommunityIcons name="weather-sunny" color={"#00d1ff"} size={26} />
      {/* <ThermostatIcon fontSize="large"></ThermostatIcon> */}
      <Text variant="h4">28℃</Text>
      <View
        marginLeft="10%"
        display="flex"
        flexDirection="row"
      >
        {/* <OpacityIcon fontSize="large"></OpacityIcon> */}
        <Text variant="h4">68%</Text>
      </View>
       
      </View>
    </View>
  </View>

  );
}
const styles = StyleSheet.create({
  container: {
    gridColumn:"span 4",
    gridRow:"span 2",
    backgroundColor:"#fff",
    p:"30px",
  },
  wrap:{
    display:"flex",
    flexDirection:"column",
    alignItems:"left",
    mt:"15px"
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '20'
  },
  innerText: {
    color: 'red',
  },
});
export default HomeScreen;