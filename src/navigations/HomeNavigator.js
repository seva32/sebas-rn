import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {
  CONTACT_LIST,
  CONTACT_CRAETE,
  CONTACT_DETAILS,
  SETTINGS,
} from '../constants/routeNames';

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
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contact} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CONTACT_CRAETE} component={ContactCreate} />
      <HomeStack.Screen name={SETTINGS} component={ContactSettings} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
