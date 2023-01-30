import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import Resource from './Components/Resources_Page';

function App() {
  return (
    <View style={LCS_Style.container}>
      <Text>
        <Resource/>
      </Text>
    </View> 
  );
}

const LCS_Style = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : '#0A0908',
    alignItems : 'center',
    justifyContent : 'flex-start',
  }
})

export default App;