import React from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
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
            <Image source={require('../Assets/icon_folder.png')} style={styles.image_folder}/>
            {/* <Text>Resources</Text> */}
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

HomePage.navigationOptions = {
  headerStyle: {
    backgroundColor: 'pink'
  }
};

// styling
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
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
  },
  image_folder:{
    height: 120,
    width: 120,
    marginLeft: 15,
    marginTop: 10
  }
});

export default HomePage;
