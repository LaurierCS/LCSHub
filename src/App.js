import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonImg from './Components/ButtonImg'
import YoutubeView from './Components/YoutubeView'
import TwitchView from './Components/TwitchView';

const App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.twitchWrapper}>
        <TwitchView channel="LaurierCS" offline={false}/> 
      </View>
      <View style={styles.youtubeWrapper}>
        <YoutubeView />
      </View>
      <ButtonImg />
    </View>
  )
  
};

// styling
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%', 
    height: '100%',
    backgroundColor: '#101c25'
  },
  youtubeWrapper:{
    flex: 1,
    maxHeight: '30%',
    padding: 16,
    marginTop: 20,
    borderColor: 'black',
    backgroundColor: '#608b97',
    borderWidth: 1,
    borderRadius: 10,
  },
  twitchWrapper:{
    flex: 1,
    maxHeight: '30%',
    padding: 16,
    marginTop: 20,
    borderColor: 'black',
    backgroundColor: '#608b97',
    borderWidth: 1,
    borderRadius: 10,
  }
})

export default App;
