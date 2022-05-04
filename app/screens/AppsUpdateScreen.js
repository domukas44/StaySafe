import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppUpdateItem from '../component/AppUpdateItem'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppsUpdateScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator>
      <SafeAreaView style={styles.root}>
        <View style={styles.border}><Text style={styles.text}>App updates</Text></View>
        <AppUpdateItem icon="logo-apple" appName='Apple'/>
        <AppUpdateItem icon="logo-chrome" appName='Chrome' />
        <AppUpdateItem icon="logo-linkedin" appName='LinkedIn' update/>
        <AppUpdateItem icon="logo-playstation" appName='Playstation' />
        <AppUpdateItem icon="logo-reddit" appName='Reddit' />
        <AppUpdateItem icon="logo-google" appName='Google' update/>
        <AppUpdateItem icon="logo-javascript" appName='Javascript' update/>
        <AppUpdateItem icon="logo-snapchat" appName='Snapchat' />
        <AppUpdateItem icon="logo-react" appName='React' update/>
        <AppUpdateItem icon="logo-twitter" appName='Twitter' />
        <AppUpdateItem icon="logo-xbox" appName='Xbox' />
        <AppUpdateItem icon="logo-dropbox" appName='Dropbox' update/>
        <AppUpdateItem icon="logo-youtube" appName='Youtube' update/>
       
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

export default AppsUpdateScreen