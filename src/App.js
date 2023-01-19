import React from 'react';
import {View} from 'react-native';
import ButtonImg from './Components/ButtonImg'
import DiscordView from './Components/DiscordView'
import TwitchView from './Components/TwitchView';

const App = () => {
  return(
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      {/* <ButtonImg /> */}
      <DiscordView />
      {/* <TwitchView channel="LaurierCS" offline={false}/> */}
    </View>
  )
  
};
export default App;
