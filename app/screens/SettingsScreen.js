import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {

const navigation = useNavigation();

const onLogOut = () => {
    navigation.navigate("Drawer", {
      screen: "Backup",
    });
  }
  
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Settings Screen</Text>
      <CustomButton text={"Log out"} onPress={onLogOut}/>
    </View>
  )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
})

export default SettingsScreen