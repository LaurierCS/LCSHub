import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import TwitchView from '../Components/TwitchView';
import ButtonImg from '../Components/ButtonImg';

const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.twitchWrapper}>
        <TwitchView channel="LaurierCS" offline={false} />
      </View>
      <Pressable
        onPress={() => {
          navigation.push('Resources Page');
        }}>
        <Text>Click to go to the resources page</Text>
      </Pressable>
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 20,
    backgroundColor: '#0A0908',
  },
  youtubeWrapper: {
    flex: 1,
    maxHeight: '30%',
    padding: 16,
    marginTop: 20,
    borderColor: 'black',
    backgroundColor: '#90DBF4',
    borderWidth: 1,
    borderRadius: 13,
  },
  twitchWrapper: {
    flex: 1,
    maxHeight: '30%',
    padding: 16,
    marginTop: 20,
    borderColor: 'black',
    backgroundColor: '#90DBF4',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default HomePage;
