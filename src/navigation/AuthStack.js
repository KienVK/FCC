



import React, {useState} from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AuthStack = () => {


    return (
        <Stack.Navigator options={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={Login}  />
       
       </Stack.Navigator>
    );
  };

  export default AuthStack;
