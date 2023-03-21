import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SettingsIcon from '@mui/icons-material/Settings';

import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import RoutineScreen from "../../Screens/RoutineScreen/RoutineScreen";
import SettingScreen from "../../Screens/SettingScreen/SettingScreen";
import StaticScreen from "../../Screens/StaticScreen/StaticScreen";
const Tab = createMaterialBottomTabNavigator();

const BottomBar= () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#00D1FF"
      barStyle={{ backgroundColor: 'white' }}
    >
        <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }} 
        />
        <Tab.Screen name="Static" component={StaticScreen}
        options={{
            tabBarLabel: 'Static',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equalizer" color={color} size={26} />
            ),
        }} 
        />
        <Tab.Screen name="Routines" component={RoutineScreen} 
        options={{
            tabBarLabel: 'Routines',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timer-settings" color={color} size={26} />
            ),
        }} />
        <Tab.Screen name="Setting"  component={SettingScreen} 
        options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
            ),
        }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default BottomBar;