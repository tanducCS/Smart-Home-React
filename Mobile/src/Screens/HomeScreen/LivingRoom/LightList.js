import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../HomeScreen";
import axios from 'axios';


const LightListLivingroom = ({ navigation }) => {
    const onHome = () => (
        navigation.navigate("Home")
    );

    const onLightListLivingroom = () => (
        navigation.navigate("LightListLivingroom")
    );

    const onFanListLivingroom = () => (
        navigation.navigate("FanListLivingroom")
    );

    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        // setChecked(event.target.checked);
        if (checked) {
            setChecked(false);
            const data = { active: "0" };
            axios.post('https://smart-home-react.onrender.com:443/api/turnLightOn', data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            setChecked(true);
            const data = { active: "1" };
            axios.post('https://smart-home-react.onrender.com:443/api/turnLightOff', data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <View flexDirection="column">
            <View style={styles.room}>
                <TouchableOpacity onPress={onHome}>
                    <Entypo name="chevron-left" color={"white"} size={28} />
                </TouchableOpacity>
                <Text style={styles.baseText}>Living Room</Text>
            </View>
            <View style={[styles.status, styles.icon]}>
                <TouchableOpacity onPress={onLightListLivingroom}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" color={"#00d1ff"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFanListLivingroom}>
                    <MaterialCommunityIcons name="fan" color={"#bcbcbc"} size={50} />
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <View flexDirection="row">
                    <Text style={styles.listText}>Light</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={checked ? '#f5dd4b' : '#f4f3f4'}
                        onChange={handleChange}
                        value={checked}
                        paddingLeft="60%"
                    />
                </View>
                {/* <View flexDirection="row">
                    <Text style={styles.listText}>Light</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={checked ? '#f5dd4b' : '#f4f3f4'}
                        onChange={handleChange}
                        value={checked}
                        paddingLeft="60%"
                    />
                </View> */}

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    baseText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "35%",

    },
    status: {
        backgroundColor: "white",
        width: "100%",
        height: 70,
        elevation: 10,
    },
    room: {
        backgroundColor: "#2A2A37",
        width: "100%",
        height: 70,
        flexDirection: "row",
        paddingTop: "5%",
    },
    icon: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    list: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: "5%",
        paddingTop: "5%",
    },
    listText: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
    }

});
export default LightListLivingroom;