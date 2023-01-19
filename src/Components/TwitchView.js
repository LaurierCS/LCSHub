import React from 'react';
import { WebView } from 'react-native-webview';

function TwitchView(props) {
    const src = props.offline ?
    `https://player.twitch.tv/?channel=${props.channel}&offline=true&parent=localhost` :
    `https://player.twitch.tv/?channel=${props.channel}&parent=localhost`
  
  return (
    <WebView
      source={{ uri: src }} 
    />
  );
}

export default TwitchView;
