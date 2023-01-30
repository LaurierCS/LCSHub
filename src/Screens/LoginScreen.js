import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  TextInput,
} from 'react-native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  async function loginUser() {
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        navigation.push('Chatroom - LCS Hub');
      })
      .catch(err => {
        Alert.alert('Login failed', 'Please try again', [
          {
            text: 'Okay',
            onPress: () => console.log(err),
          },
        ]);
      });
  }

  return (
    <View>
      <Text style={styles.header}>LCS Chatroom</Text>
      <View style={styles.loginInfo}>
        <Text style={styles.labels}>Enter your email address</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeEmail}
          value={email}
          autoCapitalize="none"
          placeholder="Enter your email"
          placeholderTextColor="#000000"
        />
        <Text style={styles.labels}>Enter your email address</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangePassword}
          value={password}
          autoCapitalize="none"
          placeholder="Enter your password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
        />
        <Pressable onPress={loginUser} style={styles.btnLogin}>
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.btnCreateAccount}
        onPress={() => {
          navigation.push('Chatroom Sign Up');
        }}>
        <Text styles={styles.btnText}>Click to Create an Account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
  },
  loginInfo: {
    marginRight: 15,
    marginLeft: 15,
  },
  inputField: {
    backgroundColor: '#a8aaad',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  labels: {
    marginTop: 10,
    textDecorationLine: true,
  },
  btnLogin: {
    backgroundColor: '#a8aaad',
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    maxWidth: 100,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnCreateAccount: {
    backgroundColor: '#a8aaad',
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    maxWidth: 500,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default LoginScreen;
