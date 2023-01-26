import React from 'react';
import {View} from 'react-native';
import ButtonImg from './Components/ButtonImg'
import YoutubeView from './Components/YoutubeView'
import TwitchView from './Components/TwitchView';

const App = () => {
  return(
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      <ButtonImg />
      <YoutubeView />
      {/* <TwitchView channel="LaurierCS" offline={false}/>  */}
    </View>
  )
  
};
export default App;
