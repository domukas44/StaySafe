import { View, Text,StyleSheet, SafeAreaView, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppPermissionListItem = ({icon= "alert-circle-outline", permission="placeholder"}) => {
  return (
    <SafeAreaView>
      <View style={styles.inline}>
        <Ionicons name={icon} size={24} />
        <Text style={styles.text}>{permission}</Text>
        <Pressable style={[styles.border]}>
          <Text>Disable</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  inline: {
    marginTop: 30,
    flexDirection: 'row',
  },
  border: {
    borderWidth: 2,
    borderColor: "#20232a",
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 100,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    width:235,
    marginLeft: 15
  },
  disabledText: {
  },
})

export default AppPermissionListItem