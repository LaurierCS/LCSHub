import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ChatRoomScreen from './Screens/ChatRoomScreen';
import HomePage from './Screens/HomePage';
import Resource from './Screens/ResourcesPage';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
            title: 'Home',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
              }
            }}
          />
          <Stack.Screen name="Resources Page" component={Resource} options={{
            title: 'Chatroom - LCS Hub',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
              }
            }}/>
          <Stack.Screen name="Chatroom Login" component={LoginScreen} options={{
            title: 'Chatroom - LCS Hub',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
              }
            }}/>
          <Stack.Screen name="Chatroom Sign Up" component={SignUpScreen} options={{
            title: 'Chatroom - LCS Hub',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
              }
            }}/>
          <Stack.Screen name="Chatroom - LCS Hub" component={ChatRoomScreen} options={{
            title: 'Chatroom - LCS Hub',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: 'black',
              }
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;

