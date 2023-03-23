import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

const HomeScreen= () => {
  return (
  <View
    // gridColumn="span 4"
    // gridRow="span 2"
    backgroundColor={"#fff"}
  >
    <View
      justifyContent= {'center'}
      backgroundColor={"#2A2A37"}
      width="100%"
      height="20%"
    >
      <Text style={styles.baseText}>
        Your Home
      </Text>
      <Text style={styles.address}>
        địa chỉ nhà
      </Text>
    </View>
    <View style={styles.wrap}>
      <TouchableOpacity style={[styles.room_container,styles.shadow_outline]}>
        
          <MaterialCommunityIcons name="sofa-single-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.room_container,styles.shadow_outline]}>
        
          <MaterialCommunityIcons name="sofa-single-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.room_container,styles.shadow_outline]}>
        
          <MaterialCommunityIcons name="sofa-single-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.room_container,styles.shadow_outline]}>
        
          <MaterialCommunityIcons name="sofa-single-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
      </TouchableOpacity>
    </View>
  </View>

  );
}
const styles = StyleSheet.create({
  container: {
    gridColumn:"span 4",
    gridRow:"span 2",
    backgroundColor:"#fff",

  },
  wrap:{
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    alignItems:"left",
    width:"100%",
    height:"70%"
  },
  room_container:{
    backgroundColor:"white",
    display:"flex", 
    justifyContent:'center',
    alignItems: "center",
    flexDirection:"column",
    width: "40%",
    // height: "30%",
    // borderWidth: 1,
    borderRadius: 20
  },
  shadow_outline:{
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
  },

  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize:30,
    paddingLeft: "5%"
  },
  innerText: {
    color: 'red',
  },
  address:{
    color: 'grey',
    fontSize:10,
    paddingLeft: "5%"
  },
  room_name:{
    fontWeight: 'bold',
    color: 'black',
    fontSize:20,
  },
  number_devices: {
    color: 'grey',
    fontSize:10,
  }
});
export default HomeScreen;