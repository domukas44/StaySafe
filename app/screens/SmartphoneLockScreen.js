import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { React } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import { setLock } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import lock from "../assets/images/lock.jpg";

const SmartphoneLockScreen = () => {
  const setUpLock = () => {
    dispatch(setLock(true));
    navigation.goBack();
  };

  const { hasLock } = useSelector((state) => state.userReducer);
  const { height } = useWindowDimensions();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.blackout}>
      <Text style={styles.label}>Smartphone Locking</Text>
      {/* <Ionicons
        style={{ paddingEnd: 10, marginTop: 50, textAlign: "center" }}
        name={"lock-closed-outline"}
        size={240}
      /> */}
      <View style={styles.imageContainer}>
        <Image
          source={lock}
          style={[styles.logo, { height: height * 0.35 }]}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.question}>Why should you lock your screen?</Text>
      <Text style={styles.body}>
        When your Smartphone has no lock screen password, your sensitive
        information can be accessed by other people
      </Text>

      <TouchableOpacity
        onPress={setUpLock}
        style={styles.button}
        disabled={hasLock}
      >
        <Text style={styles.buttonText}>
          {hasLock ? "Password set up" : "Set up lock screen password"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    marginLeft: 25,
  },
  logo: {
    // maxWidth: 300,
    // maxHeight: 500,
    marginTop: 30,
    marginLeft: -80,
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

export default SmartphoneLockScreen;
