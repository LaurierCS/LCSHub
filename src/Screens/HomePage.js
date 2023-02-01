import React from 'react';
import {View, StyleSheet, Pressable, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TwitchView from '../Components/TwitchView';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View style={styles.twitchWrapper}>
          <TwitchView channel="LaurierCS" offline={false} />
        </View>
        {/* RESOURCE BUTTON */}
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 25}}>
          <TouchableOpacity 
            style={styles.wrapper} 
            onPress={() => {
                navigation.push('Resources Page');
              }}>
          
            <Text>Resources</Text>
          </TouchableOpacity>
          
            {/* CHATROOM BUTTON */}
            <TouchableOpacity 
            style={styles.wrapper} 
            onPress={() => {
                navigation.push('Chatroom Login');
              }}>
            <Text>Chatroom</Text>
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
    marginTop: 20,
    backgroundColor: '#0A0908',
  },
  wrapper: {
    flexDirection: 'row',
    height: 150,
    width: 170,
    padding: 16,
    marginTop: 20,
    borderColor: 'black',
    backgroundColor: '#90DBF4',
    borderWidth: 1,
    borderRadius: 13,
  },
  twitchWrapper: {
    flex: 1,
    maxWidth: 380,
    height: 250,
    padding: 16,
    marginTop: 20,
    marginLeft: 20,
    borderColor: 'black',
    backgroundColor: '#90DBF4',
    borderWidth: 1,
    borderRadius: 12,
  },
  text:{
    color:'white'
  }
});

export default HomePage;