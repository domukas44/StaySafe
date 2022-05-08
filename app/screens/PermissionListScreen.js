import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import AppPermissionListItem from "../component/AppPermissionListItem";
import { useRoute } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { removePermission } from "../../actions";

const PermissionListScreen = () => {
  const route = useRoute();
  const { appName } = route.params;
  const { appPermissions } = useSelector((state) => state.userReducer);

  const currentAppPermissions = appPermissions.find((app) => {
    return app.appName == appName;
  });

  const dispatch = useDispatch();

  const onAppPermissioDisable = (permission) => {
    dispatch(removePermission({ appName: appName, permission: permission }));
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.text}>{appName}</Text>
      <Text style={styles.label}>Permissions</Text>
      <View>
        {
          //TODO: show only the permissons that come from params
          currentAppPermissions.permissions.map((element, index) => {
            return (
              <AppPermissionListItem
                icon={element}
                permission={element}
                key={index}
                onpress={onAppPermissioDisable}
              />
            );
          })
        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    paddingTop: 30,
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 23,
    marginTop: 20,
    marginLeft: 15,
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
});
export default PermissionListScreen;
