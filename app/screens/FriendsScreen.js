import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FriendsScreen = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Friends Screen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
})

export default FriendsScreen