import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import {React, useState} from 'react'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Suggestion from '../component/Suggestion';

const color = '#ffbf00';

const HomeScreen = () => {

  const navigation = useNavigation();
  const adminEnum = { HIGH: 'HIGH', LOW: 'LOW', MEDIUM: 'MEDIUM'};
  const user = "Dominic";
  const experience = 123;
  const [protectionLevel, setProtectionLevel] = useState(adminEnum.LOW);

  const onCLickLockScreen = () => {
    navigation.navigate("Lock");
  }

  return (
    <ScrollView showsVerticalScrollIndicator style={styles.main}>
      <View style={styles.blackout}>
        <Text style={[styles.greetingText, {textAlign: 'center'}]}>Hello, {user}</Text>
        <Text style={[styles.protectionLevelLabel, {textAlign: 'center'}]}>Your protection level is</Text>
        <Text style={styles.experience}>You have <Text style={[{color: '#009FDF', fontWeight: 'bold' }]}>{experience} xp</Text></Text>
        <Text style={[styles.protectionLevel, {textAlign: 'center'}]}>{protectionLevel}</Text>
        <Text style={styles.suggestiontext}>Suggestions</Text>
        <Suggestion icon='lock-closed-outline' label='Smartphone lock' 
          body="When your Smartphone has no lock screen password, your sensitive information can be accessed by other people" buttonText="clear now" onpress={() => {}}/>
          <Suggestion icon='wifi' label='Wifi security' 
          body="Scan your Wi-fi network to identify any security flaws" buttonText="scan now" onpress={() => {}}/>
          <Suggestion icon='cloud-upload-outline' label='Smartphone Backup' 
          body="When your Smartphone has no backup, you are risking losing your data when the unplanned happens." buttonText="back up now" onpress={() => {}}/>
      </View>
    </ScrollView>
    // <View style={styles.root}>
    //   <Text style={styles.experience}>xp points</Text>
    //   <Pressable style={styles.container}>
    //   <Text style={styles.text}>protection level:</Text>
    //   <Text style={styles.text}>{protectionLevel}</Text>
    //   </Pressable>

    //   {/* <CustomButton onPress={onCLickLockScreen} text="Click me"></CustomButton> */}
    //   <View style={styles.suggestionContainer}>
    //     <Text style={styles.text}>Suggestions</Text>
    //   </View>
    //   <Pressable style={styles.suggestionButton}>
    //     <Text style={styles.suggestionButtonText}>Wifi security</Text>
    //   </Pressable>
    // </View>
  )
}
const styles = StyleSheet.create({
  blackout: {
    height: '100%',
    padding: 10,
  },
  main: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
  suggestiontext: {
    marginTop: 20,
    color: '#009FDF',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  greetingText: {
    color: color,
    fontSize: 15,
  },
  inline: {
    flexDirection: 'row',
  },
  bodyText: {
    color: '#121212',
    fontSize: 14,
    width: '65%',
  },
  protectionLevelLabel: {
    color: color,
    fontSize: 20,
  },
  protectionLevel: {
    color: color,
    fontSize: 50,
    fontWeight: 'bold',
  },
  experience:{
    position: 'absolute',
    top:5,
    right:5,
    color: color,
    fontSize: 15,
    width: 70,
    textAlign: 'center'
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container:
  {
    width: '50%',
    padding: 15,
    marginVertical: 50,

    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'gray',

  },
  suggestionContainer: {
    width: '90%',
    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  suggestionButtonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'palevioletred',
  },
  suggestionButton: {
    // font-size: 1em;
    // margin: 1em;
    // padding: 0.25em 1em;
    // border: 2px solid palevioletred;
    // border-radius: 3px;
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'palevioletred',
  },
})

export default HomeScreen