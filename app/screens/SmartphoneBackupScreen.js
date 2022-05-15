import {
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { setBackup } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import cloud from "../assets/images/cloud.png";

const SmartphoneBackupScreen = () => {
  const setUpBackup = () => {
    ToastAndroid.show("Nice! You earned 3 xp", ToastAndroid.LONG);
    dispatch(setBackup(true));
    navigation.goBack();
  };

  const { hasBackUp } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Smartphone Backup</Text>
      <View style={styles.imageContainer}>
        <Image
          source={cloud}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>Why should you backup yor smartphone?</Text>
      <Text style={styles.body}>
        When your Smartphone has no backup, you are risking losing your data
        when the unplanned happens.
      </Text>
      {/* <Ionicons
        style={{ paddingEnd: 10, marginTop: 50, textAlign: "center" }}
        name={"cloud-upload-outline"}
        size={240}
      /> */}

      <TouchableOpacity
        onPress={setUpBackup}
        style={styles.button}
        disabled={hasBackUp}
      >
        <Text style={styles.buttonText}>
          {hasBackUp ? "Backup is set up" : "Set up Smartphone Backup"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginLeft: 0,
  },
  logo: {
    // maxWidth: 300,
    // maxHeight: 500,
    marginLeft: -780,
    marginTop: 20,
  },
  label: {
    marginTop: 20,
    color: "#121212",
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#000000",
    alignSelf: "center",
    paddingVertical: 15,
    width: "80%",
    bottom: 30,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#f6f6f6",
    fontWeight: "bold",
  },
  question: {
    color: "#121212",
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  body: {
    color: "#121212",
    fontSize: 15,
    width: "80%",
    marginTop: 15,
    textAlign: "center",
    marginLeft: 30,
    color: "#AEADAE",
  },
  blackout: {
    height: "100%",
    padding: 10,
    marginTop: 5,
    backgroundColor: "#ffffff",
  },
});

export default SmartphoneBackupScreen;
