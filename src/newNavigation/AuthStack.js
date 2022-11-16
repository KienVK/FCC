import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewHomeScreen from '../newScreens/NewHomeScreen';
import MapScreen from '../newScreens/MapScreen';
const AuthStack = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Home Screen" component={NewHomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  );
};
export default AuthStack;
