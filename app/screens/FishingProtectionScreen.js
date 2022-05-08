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
import { setFishing } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import phishing from "../assets/images/phishing.png";

const FishingProtectionScreen = () => {
  const setUpPhishing = () => {
    ToastAndroid.show("Nice! You earned 3 xp", ToastAndroid.SHORT);
    dispatch(setFishing(true));
    navigation.goBack();
  };

  const { hasFishingProtection } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Phishing attack protection</Text>
      <View style={styles.imageContainer}>
        <Image
          source={phishing}
          style={[styles.logo, { height: height * 0.25 }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>What are Phishing attacks?</Text>
      <Text style={styles.body}>
        Phishing is a type of social engineering attack often used to steal user
        data, including login credentials and credit card numbers. It occurs
        when an attacker, masquerading as a trusted entity, dupes a victim into
        opening an email, instant message, or text message.{" "}
      </Text>
      {/* <Ionicons
        style={{ paddingEnd: 10, marginTop: 50, textAlign: "center" }}
        name={"mail-unread-outline"}
        size={240}
      /> */}
      <TouchableOpacity
        onPress={setUpPhishing}
        style={styles.button}
        disabled={hasFishingProtection}
      >
        <Text style={styles.buttonText}>
          {hasFishingProtection
            ? "Protection enabled"
            : "Enable phishing protection"}
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
    marginLeft: -330,
    marginBottom: 30,
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

export default FishingProtectionScreen;
