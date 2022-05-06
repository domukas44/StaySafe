import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import {React, useState, useEffect} from 'react'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Suggestion from '../component/Suggestion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import { setLock, setBackup } from '../../actions';

const color = '#ffbf00';

// const mapStateToProps = (state) => {
//   const { redux } = state
//   return { redux }
// };

const HomeScreen = () => {

  const navigation = useNavigation();
  const adminEnum = { HIGH: 'HIGH', LOW: 'LOW', MEDIUM: 'MEDIUM'};
  const user = "Dominic";
  //const [experience, setExperience] = useState("123");

  const BackUpScreen = "Smartphone Backup";
  const LockScreen = "Smartphone locking";
  const WifiSecurity = "Wi-fi network security";
  const AppUpdates = "Mobile apps updates";
  const Fishing = "Phishing attack protection";
  const Location = "Location services";

  //const BackUpOn = get
  
  const suggestions = [
    {name: BackUpScreen, icon: 'cloud-upload-outline', body: "When your Smartphone has no backup, you are risking losing your data when the unplanned happens.", show: !hasBackUp, buttonText: "Set up backup"},
    {name: LockScreen, icon: 'lock-closed-outline', body: "When your Smartphone has no lock screen password, your sensitive information can be accessed by other people", show: !hasLock, buttonText: "Set password"},
    //{name: WifiSecurity, icon: 'wifi', body: "Scan your Wi-fi network to identify any security flaws", show: !wifiIsScanned, buttonText: "Scan Wi-fi"},
    //{name: AppUpdates, icon: 'phone-portrait-outline', body: "Look at apps that you can update", show: !allAppsUpdated, buttonText: "Check apps"},
    {name: Fishing, icon: 'mail-unread-outline', body: "Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when an attacker, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message.", show: !hasFishingProtection, buttonText: "Protect me"},
    {name: Location, icon: 'location-outline', body: "Having location services can let other people know your patterns and current location. So you should turn it off when you are not using it.", show: !LocationIsOff, buttonText: "Set up Location"},
  ]

  const pressed = () => {
    console.log(hasLock)
    dispatch(setLock(false));
  }

  const xp = () => {
    console.log(experience);
  }
   
  const {experience, hasBackUp, hasLock, wifiIsScanned, allAppsUpdated, hasFishingProtection, LocationIsOff} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const GetProtectionLevel = () => {
    let risks = 0;
    if(!hasBackUp)
    risks++
    if(!hasLock)
    risks++
    if(!hasFishingProtection)
    risks++
    if(!LocationIsOff)
    risks++

    return risks > 2 ? adminEnum.LOW : risks > 0 ? adminEnum.MEDIUM : adminEnum.HIGH;
  }

  return (
    <ScrollView showsVerticalScrollIndicator style={styles.main}>
      <View style={styles.blackout}>
        <Text style={[styles.greetingText, {textAlign: 'center'}]}>Hello, {user}</Text>
        <Text style={[styles.protectionLevelLabel, {textAlign: 'center'}]}>Your protection level is</Text>
        <Text style={styles.experience}>You have <Text style={[{color: '#009FDF', fontWeight: 'bold' }]}>{experience} xp</Text></Text>
        <Text style={[styles.protectionLevel, {textAlign: 'center'}, styles[`${GetProtectionLevel()}`]]}>{GetProtectionLevel()}</Text>
        <Text style={styles.suggestiontext}>Suggestions</Text>
        {/* doesnt rerender when some guidelines should not be visible */}
        {/* <View>
          {suggestions.map((item, index) => {
            return item.show? <Suggestion icon={item.icon} label={item.name} body={item.body} buttonText={item.buttonText}  onpress={() => {navigation.navigate(item.name)}} key={index}/> : null;           
          })}
        </View> */}
        <View>
          {
            !hasLock && 
              <Suggestion icon={suggestions[1].icon} label={suggestions[1].name} body={suggestions[1].body} buttonText={suggestions[1].buttonText}  onpress={() => {navigation.navigate(suggestions[1].name)}}/>
          }
          {
            !hasBackUp && 
              <Suggestion icon={suggestions[0].icon} label={suggestions[0].name} body={suggestions[0].body} buttonText={suggestions[0].buttonText}  onpress={() => {navigation.navigate(suggestions[0].name)}}/>
          }
          {
            !hasFishingProtection && 
              <Suggestion icon={suggestions[2].icon} label={suggestions[2].name} body={suggestions[2].body} buttonText={suggestions[2].buttonText}  onpress={() => {navigation.navigate(suggestions[2].name)}}/>
          }
          {
            !LocationIsOff && 
              <Suggestion icon={suggestions[3].icon} label={suggestions[3].name} body={suggestions[3].body} buttonText={suggestions[3].buttonText}  onpress={() => {navigation.navigate(suggestions[3].name)}}/>
          }
          {
            LocationIsOff &&  hasBackUp &&  hasFishingProtection && hasLock && 
              <Suggestion icon={"checkmark-outline"} label={"You are safe!"} body={"There are no suggestions for you to do. Check guidelines list for more information."} buttonText={""}  onpress={() => {}}/>
          }
          
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  HIGH: {
    color: 'green',
  },
  LOW: {
    color: 'red',
  },
  MEDIUM: {},
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

//export default connect(mapStateToProps)(HomeScreen);
export default(HomeScreen);
