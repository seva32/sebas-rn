import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

function AppNavContainer() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator /> */}
      {/* <HomeNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default AppNavContainer;
