import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "../HomeScreen";


const LightListKitchen = ({ navigation }) => {
    const onHome = () => (
        navigation.navigate("Home")
    );

    const onLightListKitchen = () => (
        navigation.navigate("LightListKitchen")
    );

    const onFanListKitchen = () => (
        navigation.navigate("FanListKitchen")
    );

    const onACListKitchen = () => (
        navigation.navigate("ACListKitchen")
    );

    const [isEnabled0, setIsEnabled0] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    return (
        <View flexDirection="column">
            <View style={styles.room}>
                <TouchableOpacity onPress={onHome}>
                    <Entypo name="chevron-left" color={"white"} size={28} />
                </TouchableOpacity>
                <Text style={styles.baseText}>Kitchen</Text>
            </View>
            <View style={[styles.status, styles.icon]}>
                <TouchableOpacity onPress={onLightListKitchen}>
                    <MaterialCommunityIcons name="lightbulb-on-outline" color={"#00d1ff"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFanListKitchen}>
                    <MaterialCommunityIcons name="fan" color={"#bcbcbc"} size={50} />
                </TouchableOpacity>

            </View>
            <View style={styles.list}>
                <View flexDirection="row">
                    <Text style={styles.listText}>Light</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled0 ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={() => setIsEnabled0(previousState => !previousState)}
                        value={isEnabled0}
                        paddingLeft="60%"
                    />
                </View>
                <View flexDirection="row">
                    <Text style={styles.listText}>Light</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={() => setIsEnabled1(previousState => !previousState)}
                        value={isEnabled1}
                        paddingLeft="60%"
                    />
                </View>

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
export default LightListKitchen;