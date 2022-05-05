import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {

const navigation = useNavigation();

  
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Settings</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
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