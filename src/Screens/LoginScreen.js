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
    <View style={styles.wrapper}>
      <Text style={styles.header}>Welcome to the LaurierCS Chatroom!</Text>
      <Text style={{fontSize: 16, color:'white', textAlign:'center'}}>Login to your account</Text>
      <View style={styles.loginInfo}>
        <Text style={styles.labels}>Email</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangeEmail}
          value={email}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor="#000000"
        />
        <Text style={styles.labels}>Password</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={onChangePassword}
          value={password}
          autoCapitalize="none"
          placeholder="Password"
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
        <Text style={{color:'#616161'}}>Don't have an account?<Text style={{color:'#D9D9D9'}}> Create Now</Text></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: 'white'
  },
  loginInfo: {
    marginRight: 15,
    marginLeft: 15,
  },
  inputField: {
    backgroundColor: '#FEFCFC',
    maxWidth: 310,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginLeft: 35,
    marginTop: 10,
    borderRadius: 10,
  },
  labels: {
    marginTop: 10,
    color: '#A1D9F4',
    fontSize: 17,
    marginLeft: 40
  },
  btnLogin: {
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    width: 310,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#90DBF4'
  },
  btnCreateAccount: {
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    maxWidth: 500,
    alignSelf: 'center',
    borderRadius: 10,
    color: 'white'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    
  },
  wrapper:{
    backgroundColor: 'black',
    height: '100%'
  }
});

export default LoginScreen;
