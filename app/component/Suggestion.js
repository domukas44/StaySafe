import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const Suggestion = ({ icon, label, body, buttonText, onpress }) => {
  return (
    <View style={styles.suggestionContainer}>
      <View style={[styles.inline]}>
        <Ionicons
          style={[{ paddingEnd: 20, marginTop: 5 }]}
          name={icon}
          size={40}
        />
        <View style={styles.inline}>
          <View styles={styles.textContainer}>
            <Text style={styles.protectionLevelLabel}>{label}</Text>
            <Text style={[styles.bodyText, {}]}>{body}</Text>
          </View>
          <Pressable onPress={onpress} style={{ alignSelf: "center" }}>
            <Ionicons
              style={[styles.icon, { marginTop: 5 }]}
              name="chevron-forward-outline"
              size={24}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "#E3E3E3",
    padding: 5,
  },
  textContainer: {},
  suggestionContainer: {
    marginTop: 5,
    marginLeft: 15,
  },
  greetingText: {
    color: "#121212",
    fontSize: 15,
  },
  inline: {
    flexDirection: "row",
    marginVertical: 5,
  },
  bodyText: {
    color: "#878787",
    fontSize: 14,
    width: 260,
  },
  protectionLevelLabel: {
    color: "#121212",
    fontSize: 20,
  },
  buttonText: {
    color: "#121212",
    fontSize: 20,
    width: 5,
  },
  protectionLevel: {
    color: "#cf6679",
    fontSize: 50,
    fontWeight: "bold",
  },
});
export default Suggestion;
