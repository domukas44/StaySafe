import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HomeModal from "../component/HomeModal";

const ModalScreen = () => {
  return (
    <View style={styles.main}>
      <HomeModal />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "#ffffff",
  },
});
