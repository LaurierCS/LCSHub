import {View, StyleSheet, Text, Pressable, Linking} from 'react-native';
import CustomButton from '../Components/CustomButton';
import FetchData from './DisplayResources';

const Resource = () => {
  return (
    <View style={LCS_Style.container}>
      <View style={LCS_Style.resources}>
        <FetchData />
      </View>
    </View>
  );
};

const LCS_Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0908',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  resources: {
    paddingVertical: 240,
    paddingRight: 180,
  },
});

export default Resource;
