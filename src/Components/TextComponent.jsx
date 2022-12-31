import React from 'react';
import {View, Text} from 'react-native';

const TextComponent = props => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};
export default TextComponent;
