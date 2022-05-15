import { View, Text, StyleSheet, TextInput } from "react-native";
import { React, useState } from "react";
import CustomButton from "../component/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Checkbox } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import {
  setDoNotSendEndTime,
  setDoNotSendStartTime,
  setEndTime,
  setStartTime,
  resetState,
} from "../../actions";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [startTime, setStartTime] = useState(getNotificationsStartTime);
  const [endTime, setEndTime] = useState(getNotificationsEndTime);
  const [notSendStartTime, setNotSendStartTime] = useState(
    DontGetNotificationsStartTime
  );
  const [notSendEndTime, setNotSendEndTime] = useState(
    DontGetNotificationsEndTime
  );

  const {
    getNotificationsStartTime,
    getNotificationsEndTime,
    DontGetNotificationsStartTime,
    DontGetNotificationsEndTime,
  } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const resetStates = () => {
    dispatch(resetState());
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>Settings</Text>
      <View style={styles.inline}>
        <Checkbox
          status={toggleCheckBox ? "checked" : "unchecked"}
          onPress={() => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        ></Checkbox>
        <Text style={styles.checkbox}>Send notifications</Text>
      </View>
      {toggleCheckBox && (
        <View>
          <Text style={styles.question}>
            What time would you like to get notifications?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="start hour"
            // value={`${startTime} h`}
            // onPressOut={setStartTime(value)}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="end hour"
            // value={`${getNotificationsEndTime} h`}
          ></TextInput>
          <Text style={styles.question}>
            Or just insert when you don't want to get notifications
          </Text>
          <TextInput
            style={styles.input}
            placeholder="start hour"
            // value={`${DontGetNotificationsStartTime} h`}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="end hour"
            // value={`${DontGetNotificationsEndTime} h`}
          ></TextInput>
          <Pressable style={styles.importButton} onPress={() => {}}>
            <Text style={styles.importText}>Import from calendar</Text>
          </Pressable>
        </View>
      )}

      <Pressable style={styles.guideButton} onPress={() => {}}>
        <Text style={styles.guideText}>Save changes</Text>
      </Pressable>
      <Pressable style={styles.reset} onPress={resetStates}>
        <Text>Reset data</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  guideText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  guideButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#2196F3",
    borderRadius: 20,
  },
  importText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 10,
  },
  importButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: "#00875f",
    width: "30%",
    marginLeft: 12,
  },
  reset: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  inline: {
    flexDirection: "row",
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  question: {
    fontSize: 20,
    paddingTop: 20,
    marginLeft: 15,
  },
  checkbox: {
    fontSize: 17,
    textAlignVertical: "center",
  },
  root: {
    padding: 5,
    height: "100%",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingTop: 10,
    textAlign: "center",
  },
});

export default SettingsScreen;
