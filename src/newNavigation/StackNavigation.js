import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../newScreens/MainScreen';
import AuthStack from './AuthStack';
import GooglePlaceInput from '../newScreens/GooglePlaceInput';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AuthStack">{() => <AuthStack />}</Stack.Screen>
        <Stack.Screen name="GoogleAutoComplete" component={GooglePlaceInput} />

        {/* <AuthStack /> */}
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
