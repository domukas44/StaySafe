import { View, Text, StyleSheet, TextInput  } from 'react-native'
import React from 'react';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {

const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.checkbox}>V Send notifications</Text>
      <Text style={styles.question}>What time would you like to get notifications?</Text>
      <TextInput style={styles.input} placeholder='start hour' ></TextInput>
      <TextInput style={styles.input} placeholder='end hour' ></TextInput>
      <Text style={styles.question}>Or just insert when you don't want to get notifications</Text>
      <TextInput style={styles.input} placeholder='start hour' ></TextInput>
      <TextInput style={styles.input} placeholder='end hour' ></TextInput>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  question: {
    fontSize: 20,
    paddingTop: 20,
  },
  checkbox: {

  },
  root: {
      padding: 5,
      height: '100%',
      backgroundColor: '#ffffff',
  },
  text: {
      fontSize: 26,
      fontWeight: 'bold',
      paddingLeft: 10,
      paddingTop: 10,
      textAlign: 'center',
  }
})

export default SettingsScreen