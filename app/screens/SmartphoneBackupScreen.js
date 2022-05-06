import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { setBackup } from '../../actions';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

const SmartphoneBackupScreen = () => {

  const setUpBackup = () => {
    dispatch(setBackup(true));
    navigation.goBack();
  }

  const {hasBackUp} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Smartphone Backup</Text>
      <Text style={styles.question}>Why should you backup yor smartphone?</Text>
      <Text style={styles.body}>When your Smartphone has no backup, you are risking losing your data when the unplanned happens.</Text>
      <Ionicons style={{paddingEnd: 10, marginTop: 50, textAlign: 'center'}} name={'cloud-upload-outline'} size={240} />
      <TouchableOpacity onPress={setUpBackup} style={styles.button} disabled={hasBackUp}>
        <Text style={styles.buttonText}>{hasBackUp? "Backup is set up" : "Set up Smartphone Backup"}</Text>
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

export default SmartphoneBackupScreen