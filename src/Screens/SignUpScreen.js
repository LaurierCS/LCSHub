import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');
  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Create an LCS Chatroom Account</Text>
      <Text style={styles.labels}>Enter your Email Address</Text>

      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Enter your email"
        placeholderTextColor="#000000"
      />
      <Text style={styles.labels}>Enter your Password</Text>
      <TextInput
        onChangeText={onChangePass}
        value={pass}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Enter your password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />
      <Text style={styles.labels}>Please Confirm your Password</Text>
      <TextInput
        onChangeText={onChangeConfirmPass}
        value={confirmPass}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Confirm your password"
        placeholderTextColor="#000000"
        secureTextEntry={true}
      />

      <Button
        style={styles.button}
        title="Sign Me Up"
        onPress={() => {
          if (pass != confirmPass) {
            Alert.alert('Ensure your passwords match!', 'Please try again', [
              {
                text: 'Okay',
                onPress: () => console.log('passwords do not match'),
              },
            ]);
          } else {
            createUserWithEmailAndPassword(getAuth(), email, pass)
              .then(cred => {
                console.log(cred);
                navigation.push('Chatroom - LCS Hub');
              })
              .catch(err => {
                Alert.alert(
                  'An unexpected error has occured!',
                  'Please try again',
                  [
                    {
                      text: 'Okay',
                      onPress: () => console.log(err),
                    },
                  ],
                );
              });
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 20,
    color: 'white'
  },
  inputField: {
    backgroundColor: '#90DBF4',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  labels: {
    marginTop: 10,
    textDecorationLine: true,
    color: 'white'
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'white'
  },
  wrapper: {
    backgroundColor: 'black',
    height: '100%'
  }
});

export default SignUpScreen;
