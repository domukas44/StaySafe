import { View, Text,StyleSheet, SafeAreaView, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppUpdateItem = ({icon= "alert-circle-outline", appName="placeholder", update=false}) => {
  return (
    <SafeAreaView>
      <View style={styles.inline}>
        <Ionicons name={icon} size={24} />
        <Text style={styles.text}>{appName}</Text>
        <TouchableOpacity style={[styles.border, !update? styles.disabled : {}]} disabled={!update}>
          <Text style={[!update? styles.disabledText : {}]}>Update</Text>
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
    width:100
  },
  disabledText: {
  },
})
export default AppUpdateItem