import { View, Text, StyleSheet, ScrollView, useState } from "react-native";
import React from "react";
import AppPermissionItem from "../component/AppPermissionItem";
import { SafeAreaView } from "react-native-safe-area-context";

const permissions = [
  "location-outline",
  "call-outline",
  "cloud-outline",
  "camera-outline",
  "image-outline",
  "mic-outline",
  "calendar-outline",
];

const PermissionManagerScreen = () => {
  const onClick = () => {
    console.warn("Sign in");
  };

  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={styles.root}>
        <View style={styles.border}>
          <Text style={styles.text}>App Permissions</Text>
        </View>
        <AppPermissionItem
          icon="logo-apple"
          appName="Apple"
          permissions={permissions}
          onpress={onClick}
        />
        <AppPermissionItem
          icon="logo-chrome"
          appName="Chrome"
          permissions={permissions}
          onpress={onClick}
        />
        <AppPermissionItem
          icon="logo-linkedin"
          appName="LinkedIn"
          update
          permissions={permissions}
          onpress={onClick}
        />
        <AppPermissionItem
          icon="logo-playstation"
          appName="Playstation"
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-reddit"
          appName="Reddit"
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-google"
          appName="Google"
          update
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-javascript"
          appName="Javascript"
          update
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-snapchat"
          appName="Snapchat"
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-react"
          appName="React"
          update
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-twitter"
          appName="Twitter"
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-xbox"
          appName="Xbox"
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-dropbox"
          appName="Dropbox"
          update
          permissions={permissions}
        />
        <AppPermissionItem
          icon="logo-youtube"
          appName="Youtube"
          update
          permissions={permissions}
        />
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
