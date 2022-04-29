import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        placeholder={placeholder}
        style={style.input}
        onChangeText={setValue}
        value={value}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: "100%",

        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5,
    },
    input: {},
})

export default CustomInput