import { View, Text,StyleSheet, SafeAreaView, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const AppPermissionItem = ({icon= "alert-circle-outline", appName="placeholder", permissions=[]}) => {
  
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => {
        navigation.navigate('PermissionList', {
          permissions: permissions,
          appName: appName,
        });}} 
        style={styles.border}>
        <View style={[styles.inline, styles.margin]}>
          <Ionicons name={icon} size={24} />
          <Text style={styles.text}>{appName}</Text>
          <View style={[styles.inline, styles.permissions]}>
          {permissions.map((iconName, index) => {
            if (index < 6)
            return <Ionicons name={iconName} size={24} key={index} />
          })}
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  permissions: {
    width: 50,
  },
  margin: {
    marginTop: 30,
    justifyContent: 'center'
  },
  inline: {
    flexDirection: 'row',
  },
  border: {
    borderBottomWidth: 2,
    borderColor: "#20232a",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  disabled: {
    borderColor: "gray",
  },
  text: {
    marginTop: 2,
    marginRight: 20,
    width: 100,
    marginLeft: 10,
  },
  disabledText: {
  },
})
export default AppPermissionItem