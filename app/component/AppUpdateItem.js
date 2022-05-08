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

const AppUpdateItem = ({
  icon = "alert-circle-outline",
  appName = "placeholder",
  size,
  color = "black",
  onpress,
}) => {
  return (
    <SafeAreaView>
      <View style={[styles.inline, styles.margin]}>
        <Ionicons name={icon} size={40} color={color} />
        <View style={styles.view}>
          <Text style={styles.text}>{appName}</Text>
          <Text style={styles.size}>{size}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onpress(appName);
          }}
          style={[styles.border]}
        >
          <Text style={[styles.updateButton]}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inline: {
    flexDirection: "row",
  },
  updateButton: {
    color: "#00875f",
    marginTop: 1,
  },
  margin: {
    marginTop: 20,
    marginLeft: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: "#c7c7c7",
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 3,
    height: 30,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    // width:100
    fontSize: 15,
    color: "black",
  },
  size: {
    // width:100
    fontSize: 15,
    color: "darkgray",
  },
  view: {
    width: 210,
    marginLeft: 10,
  },
  disabledText: {},
});
export default AppUpdateItem;
