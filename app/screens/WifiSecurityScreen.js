import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { setWifi } from '../../actions';
import { useNavigation } from '@react-navigation/native';

const WifiSecurityScreen = () => {

  const setUpWifi = () => {
    dispatch(setWifi(true));
    navigation.goBack();
  }

  const {wifiIsScanned} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Wi-fi network check</Text>
      <Text style={styles.question}></Text>
      <Text style={styles.body}>Scan your Wi-fi network to identify any security flaws</Text>
      <Ionicons style={{paddingEnd: 10, marginTop: 50, textAlign: 'center'}} name={'wifi-outline'} size={240} />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Scan Wi-fi network</Text>
      </Pressable>
      <TouchableOpacity onPress={setUpWifi} style={styles.button} disabled={wifiIsScanned}>
        <Text style={styles.buttonText}>{wifiIsScanned? "Wi-fi is safe" : "Scan Wi-fi network"}</Text>
      </TouchableOpacity>
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

export default WifiSecurityScreen