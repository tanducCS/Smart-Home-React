import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Slider, Button } from '@rneui/themed';




const FanListKitchen = ({ navigation }) => {
    const onHome = () => (
        navigation.navigate("Home")
    );

    const onLightListKitchen = () => (
        navigation.navigate("LightListKitchen")
    );

    const onFanListKitchen = () => (
        navigation.navigate("FanListKitchen")
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
                    <MaterialCommunityIcons name="lightbulb-on-outline" color={"#bcbcbc"} size={50} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onFanListKitchen}>
                    <MaterialCommunityIcons name="fan" color={"#00d1ff"} size={50} />
                </TouchableOpacity>

            </View>
            <View style={styles.list}>
                <View flexDirection="row">
                    <Text style={styles.listText}>Fan 1</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled0 ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={() => setIsEnabled0(previousState => !previousState)}
                        value={isEnabled0}
                        paddingLeft="60%"
                    />
                </View>
                <Slider
                    value={0}
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
                <Button
                    title="Setting"
                    buttonStyle={{
                        backgroundColor: '#00D1FF',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 90,
                        marginVertical: 10,
                    }}
                />
                <View flexDirection="row">
                    <Text style={styles.listText}>Fan 2</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={() => setIsEnabled1(previousState => !previousState)}
                        value={isEnabled1}
                        paddingLeft="60%"
                    />
                </View>
                <Slider
                    value={0}
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
                <Button
                    title="Setting"
                    buttonStyle={{
                        backgroundColor: '#00D1FF',
                        borderRadius: 3,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 90,
                        marginVertical: 10,
                    }}
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
export default FanListKitchen;