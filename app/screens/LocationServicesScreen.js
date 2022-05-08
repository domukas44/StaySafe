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
import { setLocation } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import location from "../assets/images/location.png";

const LocationServicesScreen = () => {
  const setUpLocation = () => {
    ToastAndroid.show("Nice! You earned 3 xp", ToastAndroid.SHORT);
    dispatch(setLocation(true));
    navigation.goBack();
  };

  const { LocationIsOff } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Location services</Text>
      <View style={styles.imageContainer}>
        <Image
          source={location}
          style={[styles.logo, { height: height * 0.25 }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>Turn off location sharing</Text>
      <Text style={styles.body}>
        Having location services can let other people know your patterns and
        current location. So you should turn it off when you are not using it.{" "}
      </Text>
      {/* <Ionicons
        style={{ paddingEnd: 10, marginTop: 50, textAlign: "center" }}
        name={"location-outline"}
        size={240}
      /> */}
      <TouchableOpacity
        onPress={setUpLocation}
        style={styles.button}
        disabled={LocationIsOff}
      >
        <Text style={styles.buttonText}>
          {LocationIsOff ? "Your location is off" : "Turn off location"}
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
    marginTop: 70,
    marginLeft: -65,
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

export default LocationServicesScreen;
