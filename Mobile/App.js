import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
// import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from "./src/components/UI/BottomBar"
import { StatusBar } from 'expo-status-bar';
export default App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text>AAAAAAAAAAAAAAAAAAAAA</Text>
      <BottomBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
  },
});

