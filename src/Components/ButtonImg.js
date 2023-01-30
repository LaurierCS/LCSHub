import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import REACT_LOGO from '../Assets/reactlogo.png';
import MENU_ICON from '../Assets/menuIcon.png';

const ButtonImg = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonWrapper}>
        {/* the below fires twice upon load */}
        <View onPress={console.log('click action')}>
          <Image source={REACT_LOGO} />
          <Text style={styles.buttonSubtext}>React Workshop</Text>
          <View style={styles.readWrapper}>
            <Image source={MENU_ICON} style={styles.menuIcon} />
            <Text style={styles.buttonSubtext}>Read</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 16,
    marginTop: 20,
    borderColor: '#bbb',
    backgroundColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 10,
    maxWidth: '50%',
  },
  buttonSubtext: {
    fontFamily: 'Arial',
    paddingTop: 10,
    paddingLeft: 1,
  },
  menuIcon: {
    marginTop: 10,
  },
  readWrapper: {
    flexDirection: 'row',
  },
});
export default ButtonImg;
