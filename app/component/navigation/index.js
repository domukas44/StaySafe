import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'

import SignUpScreen from '../../screens/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen';
import SmartphoneLockScreen from '../../screens/SmartphoneLockScreen';
import SmartphoneBackupScreen from '../../screens/SmartphoneBackupScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import WifiSecurityScreen from '../../screens/WifiSecurityScreen';

const Stack = createNativeStackNavigator();

const SignInName = "SignIn";
const SignUpName = "SignUp";
const BackUpScreen = "BackUp";
const LockScreen = "Lock";
const WifiSecurity = "Wifi";

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
          <Stack.Screen name={SignInName} component={SignInScreen} />
          <Stack.Screen name={SignUpName} component={SignUpScreen} />
          <Stack.Screen name="Root" component={BottomTabNavigator} />
          <Stack.Screen name={BackUpScreen} component={SmartphoneBackupScreen} />
          <Stack.Screen name={LockScreen} component={SmartphoneLockScreen} />
          <Stack.Screen name={WifiSecurity} component={WifiSecurityScreen} />
      </Stack.Navigator>
  )
}

export default Navigation