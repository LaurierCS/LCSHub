import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, Alert} from 'react-native';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [pass, onChangePass] = useState('');
  const [confirmPass, onChangeConfirmPass] = useState('');
  return (
    <View style={styles.wrapper}>
      <Text style={{color:'white', fontWeight: 'bold', fontSize: 20, marginTop: 10, textAlign:'center'}}>Register</Text>
      <Text style={{color:'white', fontSize: 16, marginTop: 10, textAlign:'center'}}>Create your account</Text>
      <Text style={styles.labels}>Email</Text>

      <TextInput
        onChangeText={onChangeEmail}
        value={email}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Enter your email"
        placeholderTextColor="#C4C4C4"
      />
      <Text style={styles.labels}>Password</Text>
      <TextInput
        onChangeText={onChangePass}
        value={pass}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Enter your password"
        placeholderTextColor="#C4C4C4"
        secureTextEntry={true}
      />
      <Text style={styles.labels}>Confirm Password</Text>
      <TextInput
        onChangeText={onChangeConfirmPass}
        value={confirmPass}
        style={styles.inputField}
        autoCapitalize="none"
        placeholder="Confirm your password"
        placeholderTextColor="#C4C4C4"
        secureTextEntry={true}
      />

<Pressable 
  style={styles.button} 
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
>
  <Text style={{fontWeight: 'bold', fontSize: 20,textAlign: 'center', marginTop: 15}}>Create Account</Text>
</Pressable>

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
    backgroundColor: '#FEFCFC',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginLeft: 50,
    maxWidth: 300,
    borderRadius: 10
  },
  labels: {
    marginTop: 10, 
    marginLeft: 50,
    fontSize: 18,
    color: '#A1D9F4'
  },
  button: {
    marginLeft: 50,
    backgroundColor: '#A1D9F4',
    maxWidth: 300,
    height: 50,
    marginTop: 50,
    borderRadius: 20
  },
  wrapper: {
    backgroundColor: 'black',
    height: '100%'
  }
});

export default SignUpScreen;
