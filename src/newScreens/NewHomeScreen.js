import React, {createRef, useEffect, useLayoutEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import MapView from 'react-native-map-clustering';
import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Animated from 'react-native-reanimated';
import {ListLocations} from '../common/ListLocations';
import SearchByBottomSheet from './BottomSheet/SearchByBottomSheet';
import FindBrandBottomSheet from './BottomSheet/FindBrandBottomSheet';
import {storage} from '../utils/Storage';
import {locationData} from '../model/data';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import GooglePlaceInput from './GooglePlaceInput';

const NewHomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const searchPosition = route.params
    ? {
        latitude: route.params.coordinateSearch.latitude,
        longitude: route.params.coordinateSearch.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : null;
  console.log(searchPosition);
  const bs = createRef();
  const fall = new Animated.Value(1);
  const bs1 = createRef();
  const fall1 = new Animated.Value(1);

  const [list, setList] = useState(locationData);

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
  const [coordinate, setCoordinate] = useState(null);
  const [isShowMap, setShowMap] = useState(false);
  const [brandText, setBrandText] = useState('Brand');

  const [product, setProduct] = useState([
    {label: 'Product 1', value: 'Product 1'},
    {label: 'Product 2', value: 'Product 2'},
  ]);
  const [productOpen, setProductOpen] = useState(false);
  const [productValue, setProductValue] = useState(null);

  const [miles, setMiles] = useState([
    {label: 'Miles 1', value: 'Miles 1'},
    {label: 'Miles 2', value: 'Miles 2'},
  ]);
  const [milesOpen, setMilesOpen] = useState(false);
  const [milesValue, setMilesValue] = useState(null);

  const [price, setPrice] = useState([
    {label: 'Price 1', value: 'Price 1'},
    {label: 'Price 2', value: 'Price 2'},
  ]);
  const [priceOpen, setPriceOpen] = useState(false);
  const [priceValue, setPriceValue] = useState(null);

  const [carWash, setCarWash] = useState([
    {label: 'Car Wash 1', value: 'Car Wash 1'},
    {label: 'Car Wash 2', value: 'Car Wash 2'},
  ]);
  const [carWashOpen, setCarWashOpen] = useState(false);
  const [carWashValue, setCarWashValue] = useState(null);

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
    const searchBy = storage.getString('SearchByKey');
    const findBrand = storage.getString('FindBrandKey');
    if (!searchBy) {
      storage.set('SearchByKey', '');
    }
    if (!findBrand) {
      storage.set('FindBrandKey', JSON.stringify(['']));
    }

    currentGet().done();
  }, []);

  const onCloseSearchBy = () => {
    const searchByValue = storage.getString('SearchByKey');
    if (searchByValue) {
      const newList = list.filter(item => {
        return item.type === searchByValue;
      });
      setList(newList);
    } else {
      if (list.length !== 0) {
        return;
      } else {
        setList(locationData);
      }
    }
  };

  const OnCloseFindBrand = () => {
    const findBrandValue = JSON.parse(storage.getString('FindBrandKey'));
    if (list.length !== 0 && findBrandValue.length !== 0) {
      setBrandText('Brand+1');
      const result = list.filter(value => {
        const check = findBrandValue.every(v => value.brand.includes(v.title));
        return check;
      });
      if (result) {
        setList(result);
      }
    } else {
      setBrandText('Brand');
      const result = locationData.filter(value => {
        const check = findBrandValue.every(v => value.brand.includes(v.title));
        return check;
      });
      if (result) {
        setList(result);
      }
    }
  };

  return (
    // <View
    //   onPress={() => Keyboard.dismiss}
    //   accessible={false}>
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          height: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          style={{borderRadius: 4, borderWidth: 2, padding: 5}}
          onPress={() => bs.current.snapTo(0)}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>Search By ID</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            borderWidth: 1,
            padding: 5,
            paddingHorizontal: 30,
          }}
          onPress={() => navigation.navigate('GoogleAutoComplete')}>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 2,
            padding: 5,
            backgroundColor: 'black',
            paddingHorizontal: 10,
          }}
          onPress={() => setShowMap(isShowMap => !isShowMap)}>
          <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
            MAP
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 150,
          zIndex: 200,
          elevation: 1000,
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}
          keyboardShouldPersistTaps={'handled'}>
          <View
            style={{
              margin: 10,
              flex: 1,
              zIndex: 90,
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => {}}>
              <Text>filters</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              margin: 10,
              flex: 1,
              zIndex: 90,
              borderWidth: 2,
              borderRadius: 4,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => bs1.current.snapTo(0)}>
            <Text>{brandText}</Text>
          </TouchableOpacity>

          <View
            style={{
              margin: 10,
              flex: 1,
            }}>
            <DropDownPicker
              placeholder={'Product'}
              open={productOpen}
              value={productValue}
              items={product}
              setOpen={setProductOpen}
              setValue={setProductValue}
              setItems={setProduct}
            />
          </View>

          <View
            style={{
              margin: 10,
              flex: 1,
            }}>
            <DropDownPicker
              placeholder={'Miles'}
              open={milesOpen}
              value={milesValue}
              items={miles}
              setOpen={setMilesOpen}
              setValue={setMilesValue}
              setItems={setMiles}
            />
          </View>

          <View
            style={{
              margin: 10,
              flex: 1,
            }}>
            <DropDownPicker
              placeholder={'Price'}
              open={priceOpen}
              value={priceValue}
              items={price}
              setOpen={setPriceOpen}
              setValue={setPriceValue}
              setItems={setPrice}
            />
          </View>

          <View
            style={{
              margin: 10,
              flex: 1,
            }}>
            <DropDownPicker
              placeholder={'Car Wash'}
              open={carWashOpen}
              value={carWashValue}
              items={carWash}
              setOpen={setCarWashOpen}
              setValue={setCarWashValue}
              setItems={setCarWash}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{flex: 1, zIndex: 10, flexGrow: 1}}>
        {isShowMap ? (
          <View style={{flex: 1}}>
            <MapView
              provider={PROVIDER_GOOGLE}
              // remove if not using Google Maps
              initialRegion={position}
              initialCamera={{
                center: {
                  latitude: position.latitude,
                  longitude: position.longitude,
                },
              }}
              camera={{
                center: {
                  latitude: searchPosition
                    ? searchPosition.latitude
                    : position.latitude,
                  longitude: searchPosition
                    ? searchPosition.longitude
                    : position.longitude,
                },
                zoom: 15,
              }}
              style={styles.map}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={true}
              showsCompass={true}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
              // onPress={e => {
              //   // setCoordinate(e.nativeEvent.coordinate);
              // }}
            >
              {list.map(marker => (
                <Marker coordinate={coordinate || marker.coordinate} />
              ))}
            </MapView>
            <Animated.ScrollView
              style={{
                marginTop: windowHeight * 0.42,
                marginBottom: 20,
                position: 'absolute',
              }}
              horizontal
              scrollEeventThrottle={1}
              showsHorizontalScrollIndicator={false}>
              {list.map(item => (
                <View
                  style={{
                    width: 200,
                    height: 120,
                    borderWidth: 2,
                    borderRadius: 6,
                    padding: 10,
                    marginLeft: 10,
                    backgroundColor: '#c9c0bb',
                    zIndex: 20,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: 50,
                        height: 50,
                        borderWidth: 2,
                        borderRadius: 4,
                      }}
                    />
                    <Text
                      style={[styles.text, {marginLeft: 10, maxWidth: '70%'}]}
                      ellipsizeMode={'tail'}
                      numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      borderRadius: 4,
                      borderWidth: 2,
                      padding: 5,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: windowWidth * 0.2,
                      marginTop: 60,
                      zIndex: 30,
                      position: 'absolute',
                    }}>
                    <Text style={styles.text}>{item.price}</Text>
                  </View>
                </View>
              ))}
            </Animated.ScrollView>
          </View>
        ) : (
          <ListLocations data={list} horizontal={false} />
        )}
      </View>
      <SearchByBottomSheet
        bs={bs}
        fall={fall}
        OnClose={() => onCloseSearchBy()}
      />
      <FindBrandBottomSheet
        bs={bs1}
        fall={fall1}
        OnClose={() => OnCloseFindBrand()}
      />
    </View>
    // </View>
  );
};
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default NewHomeScreen;
