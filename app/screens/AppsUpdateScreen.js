import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import AppUpdateItem from "../component/AppUpdateItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { updateApp, updateAllApps } from "../../actions";

const AppsUpdateScreen = () => {
  const { appUpdates } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onAppUpdate = (appName) => {
    ToastAndroid.show("Nice! You earned 1 xp", ToastAndroid.SHORT);
    dispatch(updateApp(appName));
  };

  const updateAll = () => {
    ToastAndroid.show(
      `Nice! You earned ${appUpdates.length} xp`,
      ToastAndroid.SHORT
    );
    dispatch(updateAllApps());
  };
  //TODO: add update all functionality and back buttons

  return (
    <ScrollView showsVerticalScrollIndicator style={styles.root}>
      <SafeAreaView>
        <View style={styles.border}>
          <Text style={styles.text}>App updates</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              updateAll();
            }}
          >
            <Text style={styles.buttonText}>Update all</Text>
          </TouchableOpacity>
        </View>
        <View>
          {appUpdates.map((app, index) => {
            return (
              <AppUpdateItem
                icon={app.icon}
                appName={app.appName}
                size={app.size}
                color={app.color}
                key={index}
                onpress={onAppUpdate}
              />
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    padding: 10,
    paddingTop: 15,
    width: "100%",
    backgroundColor: "#ffffff",
  },
  border: {
    flexDirection: "row",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#00875f",
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 2,
    marginLeft: 140,
    marginTop: 3,
  },
});

export default AppsUpdateScreen;
