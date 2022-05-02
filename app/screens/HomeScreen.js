import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  const onCLickLockScreen = () => {
    navigation.navigate("Lock");
  }

  return (
    <View style={styles.root}>
      <CustomButton onPress={onCLickLockScreen} text="Click me"></CustomButton>
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

export default HomeScreen