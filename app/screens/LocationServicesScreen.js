import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { setLocation } from '../../actions';
import { useNavigation } from '@react-navigation/native';

const LocationServicesScreen = () => {

  const setUpLocation = () => {
    dispatch(setLocation(true));
    navigation.goBack();
  }

  const {LocationIsOff} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Location services</Text>
      <Text style={styles.question}>Turn off location sharing</Text>
      <Text style={styles.body}>Having location services can let other people know your patterns and current location. So you should turn it off when you are not using it. </Text>
      <Ionicons style={{paddingEnd: 10, marginTop: 50, textAlign: 'center'}} name={'location-outline'} size={240} />
      <TouchableOpacity onPress={setUpLocation} style={styles.button} disabled={LocationIsOff}>
        <Text style={styles.buttonText}>{LocationIsOff? "Your location is off" : "Turn of location"}</Text>
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

export default LocationServicesScreen