import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppPermissionListItem = ({
  icon = "alert-circle-outline",
  permission = "placeholder",
  onpress,
}) => {
  const permissionLabels = [
    { label: "Location", value: "location-outline" },
    { label: "Calls", value: "call-outline" },
    { label: "Storage", value: "cloud-outline" },
    { label: "Camera", value: "camera-outline" },
    { label: "Photos", value: "image-outline" },
    { label: "Microphone", value: "mic-outline" },
    { label: "Calendar", value: "calendar-outline" },
  ];

  const permissionIcon = permissionLabels.filter((element) => {
    return element.label === icon;
  });

  return (
    <SafeAreaView>
      <View style={styles.inline}>
        <Ionicons name={permissionIcon[0].value} size={32} />
        <Text style={styles.text}>{permission}</Text>
        <Pressable
          style={[styles.border]}
          onPress={() => {
            onpress(permission);
          }}
        >
          <Text style={styles.buttonText}>Disable</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inline: {
    paddingLeft: 10,
    marginTop: 30,
    flexDirection: "row",
  },
  border: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    width: 235,
    marginLeft: 15,
    fontSize: 20,
    color: "black",
  },
  disabledText: {},
  buttonText: {
    color: "#00875f",
  },
});

export default AppPermissionListItem;
