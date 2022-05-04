import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppPermissionItem from '../component/AppPermissionItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const PermissionManagerScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={styles.root}>
        <View style={styles.border}><Text style={styles.text}>App Permissions</Text></View>
        <AppPermissionItem icon="logo-apple" appName='Apple'/>
        <AppPermissionItem icon="logo-chrome" appName='Chrome' />
        <AppPermissionItem icon="logo-linkedin" appName='LinkedIn' update/>
        <AppPermissionItem icon="logo-playstation" appName='Playstation' />
        <AppPermissionItem icon="logo-reddit" appName='Reddit' />
        <AppPermissionItem icon="logo-google" appName='Google' update/>
        <AppPermissionItem icon="logo-javascript" appName='Javascript' update/>
        <AppPermissionItem icon="logo-snapchat" appName='Snapchat' />
        <AppPermissionItem icon="logo-react" appName='React' update/>
        <AppPermissionItem icon="logo-twitter" appName='Twitter' />
        <AppPermissionItem icon="logo-xbox" appName='Xbox' />
        <AppPermissionItem icon="logo-dropbox" appName='Dropbox' update/>
        <AppPermissionItem icon="logo-youtube" appName='Youtube' update/>
       
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    padding: 10,
  },
  border: {
  },
  text: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
  }
})

export default PermissionManagerScreen