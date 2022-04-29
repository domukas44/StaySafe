import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import SignUpScreen from '../../screens/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const SignInName = "SignIn";
const SignUpName = "SignUp";

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
  )
}

export default Navigation