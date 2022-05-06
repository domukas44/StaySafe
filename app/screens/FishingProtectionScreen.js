import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { setFishing } from '../../actions';
import { useNavigation } from '@react-navigation/native';

const FishingProtectionScreen = () => {

  const setUpPhishing = () => {
    dispatch(setFishing(true));
    navigation.navigate("Main");
  }

  const {hasFishingProtection} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Phishing attack protection</Text>
      <Text style={styles.question}>What are Phishing attacks?</Text>
      <Text style={styles.body}>Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message. </Text>
      <Ionicons style={{paddingEnd: 10, marginTop: 50, textAlign: 'center'}} name={'mail-unread-outline'} size={240} />
      <TouchableOpacity onPress={setUpPhishing} style={styles.button} disabled={hasFishingProtection}>
        <Text style={styles.buttonText}>{hasFishingProtection? "Protection enabled" : "Enable phishing protection"}</Text>
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

export default FishingProtectionScreen