import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Audio } from 'expo-av';



export default function RoutineScreen() {

  // startRecording = async () => {
  //   const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  //   if (status !== 'granted') return;

  //   this.setState({ isRecording: true });
  //   // some of these are not applicable, but are required
  //   await Audio.setAudioModeAsync({
  //     allowsRecordingIOS: true,
  //     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  //     playsInSilentModeIOS: true,
  //     shouldDuckAndroid: true,
  //     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  //     playThroughEarpieceAndroid: true,

  //   });
  //   const recording = new Audio.Recording();
  //   try {
  //     await recording.prepareToRecordAsync(recordingOptions);
  //     await recording.startAsync();
  //   } catch (error) {
  //     console.log(error);
  //     this.stopRecording();
  //   }
  //   this.recording = recording;
  // }
  // const recordingOptions = {
  //   // android not currently in use, but parameters are required
  //   android: {
  //     extension: '.m4a',
  //     outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
  //     audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
  //     sampleRate: 44100,
  //     numberOfChannels: 2,
  //     bitRate: 128000,
  //   },
  //   ios: {
  //     extension: '.wav',
  //     audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
  //     sampleRate: 44100,
  //     numberOfChannels: 1,
  //     bitRate: 128000,
  //     linearPCMBitDepth: 16,
  //     linearPCMIsBigEndian: false,
  //     linearPCMIsFloat: false,
  //   },
  // };
  // getTranscription = async () => {
  //   this.setState({ isFetching: true });
  //   try {
  //     const info = await FileSystem.getInfoAsync(this.recording.getURI());
  //     console.log(`FILE INFO: ${JSON.stringify(info)}`);
  //     const uri = info.uri;
  //     const formData = new FormData();
  //     formData.append('file', {
  //       uri,
  //       type: 'audio/x-wav',
  //       // could be anything 
  //       name: 'speech2text'
  //     });
  //     const response = await fetch(config.CLOUD_FUNCTION_URL, {
  //       method: 'POST',
  //       body: formData
  //     });
  //     const data = await response.json();
  //     this.setState({ query: data.transcript });
  //   } catch (error) {
  //     console.log('There was an error', error);
  //     this.stopRecording();
  //     this.resetRecording();
  //   }
  //   this.setState({ isFetching: false });
  // }
  // const ENCODING = 'LINEAR16';
  // const SAMPLE_RATE_HERTZ = 41000;
  // const LANGUAGE = 'en-US';

  return (
    <View style={styles.container}>
      {/* {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
      {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined}
      {results.map((result, index) => <Text key={index}>{result}</Text>)}
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
