import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList, Pressable, 
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const FriendsScreen = () => {

    const [icon, setIcon] = useState('person-add-outline');

    const  data =  [
         {id:1, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"Tom", experience: 123},
         {id:2, image: "https://bootdey.com/img/Content/avatar/avatar2.png", username:"John", experience: 124},
         {id:3, image: "https://bootdey.com/img/Content/avatar/avatar3.png", username:"Tim", experience: 134},
         {id:4, image: "https://bootdey.com/img/Content/avatar/avatar4.png", username:"Demarcus", experience: 142},
         {id:5, image: "https://bootdey.com/img/Content/avatar/avatar1.png", username:"Jerome", experience: 154},
         {id:6, image: "https://bootdey.com/img/Content/avatar/avatar6.png", username:"User", experience: 122},
      ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            {/* TODO: Add this functionality later on */}
        <Pressable onPress={() => { setIcon(icon === 'person-add-outline'? 'person-add' : 'person-add-outline')}} style={styles.addFriends}>
            <Ionicons name={icon} size={32} />
        </Pressable>
            <View style={styles.headerContent}>
                <Text style={styles.name}>Friends Leaderboard</Text>
            </View>
          </View>

          <View style={styles.body}>
            <FlatList 
              style={styles.container} 
              enableEmptySections={true}
              data={data.sort(function(a,b) {
                  return ((a.experience > b.experience) ? -1 : (b.experience > a.experience) ? 1 : 0)
              })}
              keyExtractor= {(item) => {
                return item.id;
              }}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.box}>
                      <Text style={styles.id}>{index + 1}</Text>
                      <Image style={styles.image} source={{uri: item.image}}/>
                       <Text style={[styles.username, item.username === 'User' ? {color: 'red'} : {}]}>{item.username === 'User' ? 'You' : item.username}</Text>
                       <Text style={styles.experience}>{item.experience} xp</Text>
                    </View>
                  </TouchableOpacity>
                )
            }}/>
          </View>
      </View>
    )}

const styles = StyleSheet.create({
  header:{
  },
  addFriends: {
    color: "#87CEEB",
    fontSize:15,
    alignSelf:'center',
    position: 'absolute',
    right: 15,
    top: 30
  },
  headerContent:{
    padding:10,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FFFFFF",
    marginBottom:10,
  },
  image:{
    width: 30,
    height: 30,
  },
  id: {
    width: 30,
    height: 30,
    fontSize:22,
    alignSelf:'center',
  },
  name:{
    fontSize:22,
    fontWeight:'bold',
    position: 'absolute',
    left: 30,
    top: 40,
  },
  body: {
    padding:30,
    top: 25
  },
  box: {
    borderRadius: 5,
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    fontSize:22,
    alignSelf:'center',
    marginLeft:10
  },
  experience: {
    color: "#87CEEB",
    fontSize:15,
    alignSelf:'center',
    position: 'absolute',
    right: 10
  },
})

export default FriendsScreen