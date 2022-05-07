import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AppUpdateItem from "../component/AppUpdateItem";
import { SafeAreaView } from "react-native-safe-area-context";

const AppsUpdateScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={styles.root}>
        <View style={styles.border}>
          <Text style={styles.text}>App updates</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Update all</Text>
          </TouchableOpacity>
        </View>
        <AppUpdateItem icon="logo-apple" appName="Apple" size={"25 MB"} />
        <AppUpdateItem icon="logo-chrome" appName="Chrome" size={"40 MB"} />
        <AppUpdateItem
          icon="logo-linkedin"
          appName="LinkedIn"
          size={"30 MB"}
          color="blue"
        />
        <AppUpdateItem
          icon="logo-playstation"
          appName="Playstation"
          size={"25 MB"}
          color="blue"
        />
        <AppUpdateItem
          icon="logo-reddit"
          appName="Reddit"
          size={"40 MB"}
          color="red"
        />
        <AppUpdateItem
          icon="logo-google"
          appName="Google"
          size={"10 MB"}
          color="green"
        />
        <AppUpdateItem
          icon="logo-javascript"
          appName="Javascript"
          size={"12 MB"}
          color="#FDDA0D"
        />
        <AppUpdateItem
          icon="logo-snapchat"
          appName="Snapchat"
          size={"11 MB"}
          color="#FDDA0D"
        />
        <AppUpdateItem
          icon="logo-react"
          appName="React"
          size={"12 MB"}
          color="cyan"
        />
        <AppUpdateItem
          icon="logo-twitter"
          appName="Twitter"
          size={"31 MB"}
          color="cyan"
        />
        <AppUpdateItem
          icon="logo-xbox"
          appName="Xbox"
          size={"123 MB"}
          color="green"
        />
        <AppUpdateItem
          icon="logo-dropbox"
          appName="Dropbox"
          size={"25 MB"}
          color="blue"
        />
        <AppUpdateItem
          icon="logo-youtube"
          appName="Youtube"
          size={"231 MB"}
          color="red"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    padding: 10,
    width: "100%",
    backgroundColor: "#ffffff",
  },
  border: {
    flexDirection: "row",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#00875f",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginLeft: 140,
    marginTop: 3,
  },
});

export default AppsUpdateScreen;
