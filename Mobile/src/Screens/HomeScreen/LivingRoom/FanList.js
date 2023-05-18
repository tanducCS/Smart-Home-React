
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Slider, Button } from '@rneui/themed';
import axios from 'axios';
import { ScreenWidth } from '@rneui/base';

const FanListLivingroom = ({ navigation }) => {
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
            axios.post('https://smart-home-react.onrender.com:443/api/turnFanOn', data)
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
            axios.post('https://smart-home-react.onrender.com:443/api/turnFanOff', data)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const [value, setValue] = useState(0);
    const handleValueChange = (event) => {
        setValue(value);
        const data = { speed: value };
        console.log(data);
        axios.post('https://smart-home-react.onrender.com:443/api/setFanSpeed', data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
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
                    <MaterialCommunityIcons name="lightbulb-on-outline" color={"#bcbcbc"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFanListLivingroom}>
                    <MaterialCommunityIcons name="fan" color={"#00d1ff"} size={50} />
                </TouchableOpacity>
            </View>
            <View style={styles.list}>
                <View flexDirection="row">
                    <Text style={styles.listText}>Fan 1</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={checked ? '#f5dd4b' : '#f4f3f4'}
                        onChange={handleChange}
                        value={checked}
                        paddingLeft="60%"
                    />
                </View>
                <Slider
                    disabled={!checked}
                    value={value}
                    onValueChange={setValue}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#00d1ff"
                    maximumTrackTintColor="#bcbcbc"
                    thumbTintColor="#00d1ff"
                    thumbStyle={{ width: 20, height: 20, borderRadius: 20 }}
                    trackStyle={{ height: 10, borderRadius: 10 }}
                    style={{ width: "90%", height: 50 }}
                />
                <Text style={styles.listText}>Speed: {value}</Text>
                <Button
                    title="Set speed"
                    buttonStyle={{
                        backgroundColor: '#00D1FF',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 90,
                        marginVertical: 10,
                    }}
                    onPress={handleValueChange}
                />
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
export default FanListLivingroom;