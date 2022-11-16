import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View style={{}}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
          FCC
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AuthStack')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#fff',
          width: '90%',
          marginBottom: 50,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Main;
