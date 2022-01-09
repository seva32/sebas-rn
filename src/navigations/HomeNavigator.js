import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

function Contact(params) {
  return (
    <View>
      <Text>Contact main sebs</Text>
    </View>
  );
}

function ContactDetails(params) {
  return (
    <View>
      <Text>Contact details</Text>
    </View>
  );
}

function ContactCreate(params) {
  return (
    <View>
      <Text>Contact create</Text>
    </View>
  );
}

function ContactSettings(params) {
  return (
    <View>
      <Text>Contact settings</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name="Contact" component={Contact}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Details"
        component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Create"
        component={ContactCreate}></HomeStack.Screen>
      <HomeStack.Screen
        name="Settings"
        component={ContactSettings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
