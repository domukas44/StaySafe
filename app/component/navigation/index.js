import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";

//screens
import SignUpScreen from "../../screens/SignUpScreen";
import SignInScreen from "../../screens/SignInScreen";
import SmartphoneLockScreen from "../../screens/SmartphoneLockScreen";
import SmartphoneBackupScreen from "../../screens/SmartphoneBackupScreen";
import WifiSecurityScreen from "../../screens/WifiSecurityScreen";
import FishingProtectionScreen from "../../screens/FishingProtectionScreen";
import AppsUpdateScreen from "../../screens/AppsUpdateScreen";
import LocationServicesScreen from "../../screens/LocationServicesScreen";
import PermissionManagerScreen from "../../screens/PermissionManagerScreen";
import PermissionListScreen from "../../screens/PermissionListScreen";
import ModalScreen from "../../screens/ModalScreen";

const Stack = createNativeStackNavigator();

const SignInName = "SignIn";
const SignUpName = "SignUp";
//Guidelines screens
const BackUpScreen = "Smartphone Backup";
const LockScreen = "Smartphone locking";
const WifiSecurity = "Wi-fi network security";
const AppUpdates = "Mobile apps updates";
const PermissionManager = "Apps permission manager";
const Fishing = "Phishing attack protection";
const Location = "Location services";
const PermissionList = "PermissionList";
const Modal = "Modal";

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name={SignInName} component={SignInScreen} />
      <Stack.Screen name={SignUpName} component={SignUpScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name={BackUpScreen} component={SmartphoneBackupScreen} />
      <Stack.Screen name={LockScreen} component={SmartphoneLockScreen} />
      <Stack.Screen name={WifiSecurity} component={WifiSecurityScreen} />
      <Stack.Screen name={AppUpdates} component={AppsUpdateScreen} />
      <Stack.Screen
        name={PermissionManager}
        component={PermissionManagerScreen}
      />
      <Stack.Screen name={Fishing} component={FishingProtectionScreen} />
      <Stack.Screen name={Location} component={LocationServicesScreen} />
      <Stack.Screen name={Modal} component={ModalScreen} />
      <Stack.Screen
        name={PermissionList}
        component={PermissionListScreen}
        options={{ appName: "appName" }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
