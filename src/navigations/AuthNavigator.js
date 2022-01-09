import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {LOGIN, REGISTER} from '../constants/routeNames';

function Login(params) {
  return (
    <View>
      <Text>Login Now!</Text>
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
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Signup} />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
