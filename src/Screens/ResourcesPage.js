import {View, StyleSheet, Text, Pressable, Linking, ScrollView} from 'react-native';
import CustomButton from '../Components/CustomButton';
import FetchData from './DisplayResources';

const Resource = () => {
  return (
    <View style={LCS_Style.container}>
      <ScrollView>
      <View style={LCS_Style.container}>
        <View style={LCS_Style.resources}>
          <FetchData />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const LCS_Style = StyleSheet.create({
  container: {
    width : 400,
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection : 'col',
  },

  resources: {
    marginVertical : 10,
    marginHorizontal : 'auto',
  },
});

export default Resource;
