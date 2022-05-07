import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import AppPermissionListItem from "../component/AppPermissionListItem";
import { useRoute } from "@react-navigation/native";

const PermissionListScreen = () => {
  const route = useRoute();
  const { appName, permissions = [] } = route.params;

  const permissionLabels = [
    { label: "location", value: "location-outline" },
    { label: "calls", value: "call-outline" },
    { label: "storage", value: "cloud-outline" },
    { label: "camera", value: "camera-outline" },
    { label: "photos", value: "image-outline" },
    { label: "mic", value: "mic-outline" },
    { label: "calendar", value: "calendar-outline" },
  ];

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>{appName}</Text>
      <Text style={styles.label}>Permissions</Text>
      <View>
        {
          //TODO: show only the permissons that come from params
          permissionLabels.map((element, index) => {
            return (
              <AppPermissionListItem
                icon={element.value}
                permission={element.label}
                key={index}
              />
            );
          })
        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 23,
    marginTop: 20,
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
});
export default PermissionListScreen;
