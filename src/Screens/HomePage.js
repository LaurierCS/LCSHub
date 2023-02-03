import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TwitchView from '../Components/TwitchView';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.twitchWrapper}>
          <TwitchView channel="LaurierCS" offline={false}/>
        </View>
        {/* RESOURCE BUTTON */}
        <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 25}}>
          <TouchableOpacity 
            onPress={() => {
                navigation.push('Resources Page');
              }}>
            <Image source={require('../Assets/resources.png')} style={styles.resource}/>
            {/* <Text>Resources</Text> */}
          </TouchableOpacity>
          
            {/* CHATROOM BUTTON */}
            <TouchableOpacity  
            onPress={() => {
                navigation.push('Chatroom Login');
              }}>
             <Image source={require('../Assets/livechat.png')} style={styles.chatroom}/>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
    
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  twitchWrapper: {
    maxWidth: 380,
    height: 250,
    padding: 6,
    marginLeft: 20,
    borderColor: 'black',
    backgroundColor: '#90DBF4',
    borderWidth: 1,
    borderRadius: 12,
  },
  text:{
    color:'white'
  },
  resource:{
    maxWidth: 375,
    maxHeight: 350,
    borderRadius: 12,

  },
  chatroom:{
    maxWidth: 375,
    maxHeight: 350,
    borderRadius: 12,
    marginTop: 25
  }
});

export default HomePage;
