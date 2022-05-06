import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux'

export function DrawerContent(props) {

    const {friends, experience} = useSelector(state => state.userReducer);

    //Guidelines screens
    const BackUpScreen = "Smartphone Backup";
    const LockScreen = "Smartphone locking";
    const WifiSecurity = "Wi-fi network security";
    const AppUpdates = "Mobile apps updates";
    const PermissionManager = "Apps permission manager";
    const Fishing = "Phishing attack protection";
    const Location = "Location services";
    const size = 16;

    return(
        <View style={{flex:1, backgroundColor: '#ffbf00'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Dominykas</Title>
                                <Caption style={styles.caption}>@jovaisa</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{friends.length}</Paragraph>
                                <Caption style={styles.caption}>Friends</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>{experience}</Paragraph>
                                <Caption style={styles.caption}>Experience Points</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'lock-closed-outline'} size={size} />
                            )}
                            label={LockScreen}
                            onPress={() => {props.navigation.navigate(LockScreen)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'cloud-upload-outline'} size={size} />
                            )}
                            label={BackUpScreen}
                            onPress={() => {props.navigation.navigate(BackUpScreen)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'wifi'} size={size} />
                            )}
                            label={WifiSecurity}
                            onPress={() => {props.navigation.navigate(WifiSecurity)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'phone-portrait-outline'} size={size} />
                            )}
                            label={AppUpdates}
                            onPress={() => {props.navigation.navigate(AppUpdates)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'newspaper-outline'} size={size} />
                            )}
                            label={PermissionManager}
                            onPress={() => {props.navigation.navigate(PermissionManager)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'mail-unread-outline'} size={size} />
                            )}
                            label={Fishing}
                            onPress={() => {props.navigation.navigate(Fishing)}}
                        />
                        <DrawerItem 
                            icon={() => (
                                <Ionicons style={styles.icon} name={'location-outline'} size={size} />
                            )}
                            label={Location}
                            onPress={() => {props.navigation.navigate(Location)}}
                        />
                    </Drawer.Section>
                    {/* <Drawer.Section title="Preferences">
                        
                    </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    // icon={({color, size}) => (
                    //     <Icon 
                    //     name="exit-to-app" 
                    //     color={color}
                    //     size={size}
                    //     />
                    // )}
                    label="Sign Out"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        padding:0,
        marginRight: -20,
    },
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });