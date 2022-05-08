import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import FriendsScreen from "../../screens/FriendsScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import { StyleSheet } from "react-native";
import DrawerNavigation from "./DrawerNavigation";

// Screens
import HomeScreen from "../../screens/HomeScreen";

//Screen names
const homeName = "Home";
const friendsScreen = "Friends";
const settingsScreen = "Settings";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      style={styles.tabBar}
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === friendsScreen) {
            iconName = focused ? "people" : "people-outline";
          } else if (rn === settingsScreen) {
            iconName = focused ? "settings" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 75 },
        headerShown: false,
      })}
    >
      <Tab.Screen name={homeName} component={DrawerNavigation} />
      <Tab.Screen name={friendsScreen} component={FriendsScreen} />
      <Tab.Screen name={settingsScreen} component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    padding: 10,
    height: 100,
  },
});

export default BottomTabNavigator;
