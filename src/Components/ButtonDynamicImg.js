import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CustomButton from './CustomButton';

const ButtonDynamicImg = props => {
  return (
    <View style={LCS_Style.container}>
      <TouchableOpacity style={LCS_Style.box}>
        <Text style={LCS_Style.text}>{props.Title}</Text>
        <Image style={LCS_Style.img} source={{uri: props.IMG}} />
        <CustomButton
          style={LCS_Style.buttonText}
          Text="Open Link"
          URL={props.URL}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonDynamicImg;

const LCS_Style = StyleSheet.create({
  container: {},

  text: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black',
  },

  box: {
    backgroundColor: '#90DBF4',
    height: 270,
    width: 260,
    borderRadius: 20,
    marginTop : 20,
    alignItems : 'center',
  },

  img: {
    borderRadius: 10,
    width: 160,
    height: 160,
  },

  buttonText: {
    color: '#90DBF4',
  },

  CustomButton :{

  }
});
