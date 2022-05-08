import { View, Text, StyleSheet, ScrollView, useState } from "react-native";
import React from "react";
import AppPermissionItem from "../component/AppPermissionItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const PermissionManagerScreen = () => {
  const onClick = () => {
    console.warn("Sign in");
  };

  const { appPermissions } = useSelector((state) => state.userReducer);

  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={styles.root}>
        <View style={styles.border}>
          <Text style={styles.text}>App Permissions</Text>
        </View>
        <View>
          {appPermissions.map((app, index) => {
            return (
              <AppPermissionItem
                icon={app.icon}
                appName={app.appName}
                permissions={app.permissions}
                onpress={onClick}
                color={app.color}
                key={index}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    height: "100%",
    backgroundColor: "#ffffff",
  },
  border: {},
  text: {
    fontSize: 26,
    marginLeft: 20,
    marginTop: 15,
  },
});

export default PermissionManagerScreen;
