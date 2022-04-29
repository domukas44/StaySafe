import {React, useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native';
import Logo from '../assets/images/logo.png';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

const {height} = useWindowDimensions();
const [username, setUserName] = useState('');
const [password, setPassword] = useState('');

const navigation = useNavigation();


const onSignInPress = () => {
  
  //validate user
  password === username? navigation.navigate("Home") : Alert.alert(
    "Failed.",
    "Wrong username or password"
  )
}

const onForgotPasswordPress = () => {
  console.warn("onForgotPasswordPress");
}

const onSignInWithGooglePress = () => {
  console.warn("onSignInWithGooglePress");
}

const onSignInWithFacebookPress = () => {
  console.warn("onSignInWithFacebookPress");
}

const onCreateAccountPress = () => {
  navigation.navigate("SignUp");
}

  return (
    <ScrollView showsVerticalScrollIndicator>
      <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.2}]} resizeMode="contain"/>
      <CustomInput placeholder={"Username"} value={username} setValue={setUserName}/>
      <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry/>
      <CustomButton text={"Sign In"} onPress={onSignInPress}/>
      <CustomButton text={"Forgot password?"} onPress={onForgotPasswordPress} type={'tertiary'}/>

      <CustomButton text={"Sign in with Facebook"} onPress={onSignInWithFacebookPress} bgColor="#e7eaf4" fgColor="#4765a9" />
      <CustomButton text={"Sign in with Google"} onPress={onSignInWithGooglePress} bgColor="#fae9ea" fgColor="#dd4d44" />
      

      <CustomButton text={"Don't have an account? Create one"} onPress={onCreateAccountPress} type={'tertiary'}/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
    logo: {
      width: "70%",
      maxWidth: 300,
      maxHeight: 200,
      marginTop: 50,
      marginBottom: 50,
    }
})

export default SignInScreen