import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ChatRoomScreen from './Screens/ChatRoomScreen';
import HomePage from './Screens/HomePage';
import MainResourcesPage from './Screens/MainResourcesPage';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Resources Page" component={MainResourcesPage} />
        <Stack.Screen name="Chatroom Login" component={LoginScreen} />
        <Stack.Screen name="Chatroom Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Chatroom - LCS Hub" component={ChatRoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
