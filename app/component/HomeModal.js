import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Suggestion from "./Suggestion";

const HomeModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const { hasBackUp, hasLock, hasFishingProtection, LocationIsOff } =
    useSelector((state) => state.userReducer);
  console.log(modalVisible);
  const BackUpScreen = "Smartphone Backup";
  const LockScreen = "Smartphone locking";
  const AppUpdates = "Mobile apps updates";
  const PermissionManager = "Apps permission manager";
  const Fishing = "Phishing attack protection";

  const pressed = () => {
    setModalVisible(true);
  };

  const lock = () => {
    console.log("lock");
    navigation.navigate(LockScreen);
  };
  const backup = () => {
    navigation.navigate(BackUpScreen);
  };
  const updates = () => {
    navigation.navigate(AppUpdates);
  };
  const permissions = () => {
    navigation.navigate(PermissionManager);
  };
  const phishing = () => {
    navigation.navigate(Fishing);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.header}>Things you should try doing:</Text>
          <View style={styles.guideContainer}>
            {!hasLock && (
              <Pressable style={styles.guideButton} onPress={lock}>
                <Text style={styles.guideText}>Set up lock screen</Text>
              </Pressable>
            )}
            {!hasBackUp && (
              <Pressable style={styles.guideButton} onPress={backup}>
                <Text style={styles.guideText}>Set up smartphone backup</Text>
              </Pressable>
            )}
            {!hasFishingProtection && (
              <Pressable style={styles.guideButton} onPress={phishing}>
                <Text style={styles.guideText}>Set up Phishing protection</Text>
              </Pressable>
            )}
            <Pressable style={styles.guideButton} onPress={permissions}>
              <Text style={styles.guideText}>Manage apps permissions</Text>
            </Pressable>
            <Pressable style={styles.guideButton} onPress={updates}>
              <Text style={styles.guideText}>Manage app updates</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonHideModal, styles.buttonClose]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.textStyleShow}>Hide Guide</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => pressed()}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

export default HomeModal;

const styles = StyleSheet.create({
  guideContainer: {
    marginVertical: 20,
  },
  guideButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#2196F3",
    borderRadius: 20,
  },
  guideText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 50,
  },
  centeredView: {
    backgroundColor: "#ffffff",
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "100%",
    width: "100%",
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonHideModal: {
    marginTop: 220,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyleShow: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
  },
});
