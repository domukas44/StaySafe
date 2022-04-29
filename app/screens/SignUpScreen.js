import {React, useState} from 'react';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

const {height} = useWindowDimensions();
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');
const [passwordRepeat, setPasswordRepeat] = useState('');
const [email, setEmail] = useState('');

const navigation = useNavigation();

const onRegisterPress = () => {
  console.warn("Sign in");
}

const onSignInPress = () => {
  navigation.navigate("SignIn");
}

  return (
    <ScrollView showsVerticalScrollIndicator>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        
        <CustomInput placeholder={"Username"} value={username} setValue={setUserName}/>
        <CustomInput placeholder={"email"} value={email} setValue={setEmail}/>
        <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry/>
        <CustomInput placeholder={"Repeat password"} value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>

        <CustomButton text={"Register"} onPress={onRegisterPress}/>

        <Text style={styles.text}>
          By registering, you confirm that you accept our <Text onPress={() => {}} style={styles.link}>Terms of Use</Text> and <Text onPress={() => {}} style={styles.link}>Privacy Policy</Text></Text>

        <CustomButton text={"Already have an account? Sign in"} onPress={onSignInPress} type={'tertiary'}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#fdb075',
  },

})

export default SignUpScreen