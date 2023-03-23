import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

const HomeScreen = () => {
  return (
    <View
      // gridColumn="span 4"
      // gridRow="span 2"
      backgroundColor={"#fff"}
    >
      <View
        justifyContent={'center'}
        backgroundColor={"#2A2A37"}
        width="100%"
        height="29%"
      >
        <Text style={styles.baseText}>
          Your Home
        </Text>
        <Text style={styles.address}>
          địa chỉ nhà
        </Text>
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="sofa-single" color={"#00d1ff"} size={90} />
        <Text variant="h1" fontSize={80}>
          08:00
        </Text>
        <Text variant="h5" fontSize={80}>
          20/11/2002
        </Text>

      </View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: "#fff",
    p: "30px",
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    paddingLeft: "5%"
  },
  innerText: {
    color: 'red',
  },
  address: {
    color: 'grey',
    fontSize: 10,
    paddingLeft: "5%"
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    mt: "15px",
    width: "40%",
    height: "30%",
  },
});
export default HomeScreen;