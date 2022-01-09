import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
