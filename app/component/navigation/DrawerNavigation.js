import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SmartphoneBackupScreen from "../../screens/SmartphoneBackupScreen";
import SmartphoneLockScreen from "../../screens/SmartphoneLockScreen";
import HomeScreen from "../../screens/HomeScreen";
import { DrawerContent } from "./DrawerContent";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  //Screen names
  const home = "StaySafe";

  return (
    <Drawer.Navigator
      initialRouteName={home}
      useLegacyImplementation={true}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name={home} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
