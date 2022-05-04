import { View, Text,StyleSheet, SafeAreaView, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppPermissionItem = ({icon= "alert-circle-outline", appName="placeholder"}) => {
  return (
    <SafeAreaView>
      <View style={styles.inline}>
        <Ionicons name={icon} size={24} />
        <TouchableOpacity style={styles.border}>
        <Text style={styles.text}>{appName}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  inline: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  border: {
    borderWidth: 2,
    borderColor: "#20232a",
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    width:200,
    textAlign: 'center',
  },
  disabledText: {
  },
})
export default AppPermissionItem