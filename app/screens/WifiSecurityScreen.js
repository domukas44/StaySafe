import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const WifiSecurityScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Wifi Security Screen</Text>
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

export default WifiSecurityScreen