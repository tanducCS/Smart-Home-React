import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import BottomBar from "./src/navigation/BottomBar/BottomBar"

export default App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2A2A37" style="light" />
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

