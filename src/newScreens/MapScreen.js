import React, {useLayoutEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
const MapScreen = () => {
  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const chibaRegion = {
    latitude: 35.6074,
    longitude: 140.1065,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [position, setPosition] = useState(tokyoRegion);
  const [coordinate, setCoordinate] = useState({
    latitude: 35.6762,
    longitude: 139.6503,
  });

  const currentGet = async () => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
      setCoordinate({
        latitude: crd.latitude,
        longitude: crd.longitude,
      });
    });
  };
  useLayoutEffect(() => {
    currentGet().done();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        // remove if not using Google Maps
        initialRegion={position}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}
        onPress={e => {
          setCoordinate(e.nativeEvent.coordinate);
        }}>
        <Marker coordinate={coordinate} />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
