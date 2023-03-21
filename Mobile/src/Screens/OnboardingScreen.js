import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  imageArray=[require ('/Users/kieukhanhquan/Documents/SmartHome/assets/page1.png'),require ('/Users/kieukhanhquan/Documents/SmartHome/assets/page2.png'),require ('/Users/kieukhanhquan/Documents/SmartHome/assets/page1.png')];
  titleArray=["1","2","3"];
  descriptionArray=["1","2","3"];
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageArray[currentPage]} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{titleArray[currentPage]}</Text>
        <Text style={styles.description}>{descriptionArray[currentPage]}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OnboardingScreen;
