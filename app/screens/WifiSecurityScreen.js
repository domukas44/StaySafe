import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ToastAndroid,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { setWifi } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import wifi from "../assets/images/wifi.png";

const WifiSecurityScreen = () => {
  const setUpWifi = () => {
    ToastAndroid.show("Nice! You earned 3 xp", ToastAndroid.SHORT);
    dispatch(setWifi(true));
    navigation.goBack();
  };

  const { wifiIsScanned } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Wi-fi network check</Text>
      <View style={styles.imageContainer}>
        <Image
          source={wifi}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>Make sure it's safe!</Text>
      <Text style={styles.body}>
        Scan your Wi-fi network to identify any security flaws
      </Text>
      {/* <Ionicons
        style={{ paddingEnd: 10, marginTop: 50, textAlign: "center" }}
        name={"wifi-outline"}
        size={240}
      /> */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Scan Wi-fi network</Text>
      </Pressable>
      <TouchableOpacity
        onPress={setUpWifi}
        style={styles.button}
        disabled={wifiIsScanned}
      >
        <Text style={styles.buttonText}>
          {wifiIsScanned ? "Wi-fi is safe" : "Scan Wi-fi network"}
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
    marginTop: 20,
    marginLeft: -530,
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

export default WifiSecurityScreen;
