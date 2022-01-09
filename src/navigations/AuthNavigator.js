import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

function Login(params) {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

function Signup(params) {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
}

const AuthStack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Signup" component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
