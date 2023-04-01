import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LightListLivingroom from './LivingRoom/LightList';


const HomeScreen = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const handlePress = () => {
    setActive(!active);
  };
  const onLightListLivingroom = () => (
    navigation.navigate("Livingroom")
  );
  return (
    <View
      display="flex"
      // justifyContent='center'
      // alignItems= "center"
      flexDirection="column"
      backgroundColor={"#fff"}
    >
      <View
        justifyContent={'center'}
        backgroundColor={"#2A2A37"}
        width="100%"
        height="25%"
      >
        <Text style={styles.baseText}>
          Your Home
        </Text>
        <Text style={styles.address}>
          địa chỉ nhà
        </Text>
      </View>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={onLightListLivingroom} style={[styles.room_container, styles.shadow_outline]}>
          <MaterialCommunityIcons name="sofa-single-outline" color={active ? "white" : "#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Living Room
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress} style={[styles.room_container, styles.shadow_outline]}>

          <MaterialIcons name="kitchen" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Kitchen
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={handlePress} style={[{ backgroundColor: active ? "#00D1FF" : "white" }, styles.room_container, styles.shadow_outline]}>

          <MaterialCommunityIcons name="bathtub-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Bathroom
          </Text>
          <Text style={styles.number_devices}>
            3x Devices
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} style={[styles.room_container, styles.shadow_outline]}>

          <MaterialCommunityIcons name="bed-double-outline" color={"#00d1ff"} size={90} />
          <Text style={styles.room_name}>
            Bedroom
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
    gridColumn: "span 4",
    gridRow: "span 2",
    backgroundColor: "#fff",

  },
  wrap: {
    // flex: 1,
    display: 'flex',
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "25%"
  },
  room_container: {
    backgroundColor: HomeScreen.active ? "#00D1FF" : "white",
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    width: "40%",
    // height: "30%",
    // borderWidth: 1,
    borderRadius: 20
  },
  shadow_outline: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 3
    },
    evelation: 10
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
  room_name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
  },
  number_devices: {
    color: 'grey',
    fontSize: 10,
  }
});
export default HomeScreen;