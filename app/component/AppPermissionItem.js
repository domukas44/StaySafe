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
import { useNavigation } from "@react-navigation/native";

const AppPermissionItem = ({
  icon = "alert-circle-outline",
  appName = "placeholder",
  permissions = [],
  color = "black",
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Allowed permissions", {
            appName: appName,
          });
        }}
        style={styles.border}
      >
        <View style={[styles.inline, styles.margin]}>
          <Ionicons name={icon} size={40} color={color} />
          <View style={styles.info}>
            <Text style={styles.text}>{appName}</Text>
            <Text style={styles.about}>
              Using {permissions.length} permissions
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  permissions: {},
  margin: {
    marginTop: 30,
  },
  inline: {
    flexDirection: "row",
    marginLeft: 10,
  },
  border: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    marginTop: 2,
    marginLeft: 10,
  },
  about: {
    marginTop: 2,
    marginLeft: 10,
    fontSize: 12,
    color: "gray",
  },
  info: {
    marginLeft: 10,
  },
});
export default AppPermissionItem;
