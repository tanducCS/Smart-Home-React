import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import RoutineScreen from "../../Screens/RoutineScreen/RoutineScreen";
import SettingScreen from "../../Screens/SettingScreen/SettingScreen";
import StaticScreen from "../../Screens/StaticScreen/StaticScreen";

//livingroom
import LightListLivingroom from '../../Screens/HomeScreen/LivingRoom/LightList';
import FanListLivingroom from '../../Screens/HomeScreen/LivingRoom/FanList';


//kitchen
import LightListKitchen from '../../Screens/HomeScreen/Kitchen/LightList';
import FanListKitchen from '../../Screens/HomeScreen/Kitchen/FanList';

//EditProfile
import EditProfileScreen from '../../Screens/SettingScreen/EditProfileScreen';


//Livingroom
const LivingroomStack = createStackNavigator();

export const LivingroomStackScreen = () => (
  <LivingroomStack.Navigator screenOptions={{ headerShown: false }}>
    <LivingroomStack.Screen name="LightListLivingroom" component={LightListLivingroom} />
    <LivingroomStack.Screen name="FanListLivingroom" component={FanListLivingroom} />
  </LivingroomStack.Navigator>
);

//Kitchen
const KitchenStack = createStackNavigator();

export const KitchenStackScreen = () => (
  <KitchenStack.Navigator screenOptions={{ headerShown: false }}>
    <KitchenStack.Screen name="LightListKitchen" component={LightListKitchen} />
    <KitchenStack.Screen name="FanListKitchen" component={FanListKitchen} />
  </KitchenStack.Navigator>
);


//Homescreen
const HomeStack = createStackNavigator();

export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Livingroom" component={LivingroomStackScreen} />
    <HomeStack.Screen name="Kitchen" component={KitchenStackScreen} />
  </HomeStack.Navigator>
);

//Setting
const SettingStack = createStackNavigator();

export const SettingStackScreen = () => (
  <SettingStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingStack.Screen name="Setting" component={SettingScreen} />
    <SettingStack.Screen name="EditProfile" component={EditProfileScreen} />
  </SettingStack.Navigator>
);


//Tab
const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#00D1FF"
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={29} />
          ),
        }}
      />
      <Tab.Screen name="Static" component={StaticScreen}
        options={{
          tabBarLabel: 'Static',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equalizer" color={color} size={29} />
          ),
        }}
      />
      {/* <Tab.Screen name="Routines" component={RoutineScreen}
        options={{
          tabBarLabel: 'Routines',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="timer-settings" color={color} size={29} />
          ),
        }} /> */}
      <Tab.Screen name="SettingTab" component={SettingStackScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={29} />
          ),
        }} />
    </Tab.Navigator>
  );
}
export default BottomBar;