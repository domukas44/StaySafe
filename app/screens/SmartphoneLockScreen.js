import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';

const SmartphoneBackupScreen = () => {
  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Smartphone Locking</Text>
      <Text style={styles.question}>Why should you lock your screen?</Text>
      <Text style={styles.body}>When your Smartphone has no lock screen password, your sensitive information can be accessed by other people</Text>
      <Ionicons style={{paddingEnd: 10, marginTop: 50, textAlign: 'center'}} name={'lock-closed-outline'} size={240} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Set up lock screen password</Text>
      </Pressable>
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  label: {
    color: '#121212',
    fontSize: 30,
  },
  button: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    paddingVertical: 20,
    width: '100%',
    bottom: 30,
    
  },
  buttonText: {
    textAlign: 'center'
  },
  question: {
    color: '#121212',
    fontSize: 20,
    marginTop: 40,
    textAlign: 'center',
  },
  body: {
    color: '#121212',
    fontSize: 15,
    width: '80%',
    marginTop: 15,
    textAlign: 'center',
    marginLeft: 30
  },
  blackout: {
    height: '100%',
    padding: 10,
    marginTop: 5,
  },
})

export default SmartphoneBackupScreen