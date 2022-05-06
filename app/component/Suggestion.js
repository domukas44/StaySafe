import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Suggestion = ({icon, label, body, buttonText, onpress}) => {
  return (
    <View style={styles.suggestionContainer}>
        <View style={[styles.inline]}>
          <Ionicons style={[styles.icon, {paddingEnd: 10, marginTop: 5}]} name={icon} size={16} />
          <Text style={styles.protectionLevelLabel}>{label}</Text>
        </View>
        <View style={styles.inline}>
        <Text style={[styles.bodyText, {paddingEnd: 10, marginLeft: 25}]}>{body}</Text>
        <Pressable onPress={onpress} style={{alignSelf: 'center', width: 100}}>
          <Text style={[styles.protectionLevelLabel]}>{buttonText}</Text>
        </Pressable>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    suggestionContainer: {
        backgroundColor: '#ffbf00',
        marginTop: 5,
    },
    greetingText: {
      color: '#121212',
      fontSize: 15,
    },
    inline: {
      flexDirection: 'row',
      marginLeft: 10,
      marginVertical: 5,
    },
    bodyText: {
      color: '#121212',
      fontSize: 14,
      width: '65%',
    },
    protectionLevelLabel: {
      color: '#121212',
      fontSize: 20,
      textAlign: 'center',
    },
   buttonText: {
        color: '#121212',
        fontSize: 20,
        width: 5,
      },
    protectionLevel: {
      color: '#cf6679',
      fontSize: 50,
      fontWeight: 'bold',
    },
})
export default Suggestion