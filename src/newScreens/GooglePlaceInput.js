import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {storage} from '../utils/Storage';
import {useNavigation} from '@react-navigation/native';
import {ICONS} from 'constants';

const GooglePlaceInput = () => {
  const navigation = useNavigation();
  const api_key = 'AIzaSyAPTEl8xdg0S-de_andYSUHWEIuQU1pdA4';
  const convertDataToLocation = async description => {
    Geocoder.init(api_key);
    const json = await Geocoder.from(String(description));
    const location = json.results[0].geometry.location;
    console.log('location', location);
    return {
      latitude: parseFloat(location.lat),
      longitude: parseFloat(location.lng),
    };

    // storage.set('coordinateSearch', JSON.stringify(coordinateSearch));
  };
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          padding: 10,
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/CaretLeft.png')}
            resizeMode="cover"
            style={{height: 40, width: 40, marginRight: 10}}
          />
        </TouchableOpacity>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            convertDataToLocation(details.description).then(result => {
              console.log(details.description);
              navigation.navigate('Home Screen', {coordinateSearch: result});
            });
          }}
          onFail={error => console.log(error)}
          styles={{
            height: 70,
            backgroundColor: '#eee',
            marginVertical: 5,
          }}
          onNotFound={() => console.log('no results')}
          query={{
            key: 'AIzaSyAPTEl8xdg0S-de_andYSUHWEIuQU1pdA4',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default GooglePlaceInput;
