import React from "react"
import {View, Text, StyleSheet} from "react-native"

export default class TextComponent extends React.Component { 
    render() { 
      return (
        <View> 
        <Text style={styles.textColour}>Custom component i made</Text>
        </View> 
      );
    }
  }

const styles = StyleSheet.create({
    textColour:  {
        color: 'blue',
        fontWeight: 'bold',
        paddingTop: 100
    }
})