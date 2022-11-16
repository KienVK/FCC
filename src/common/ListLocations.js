import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {locationData} from '../model/data';
import {windowWidth} from '../utils/Dimensions';
export const ListLocations = ({data, horizontal}) => {
  const [list, setList] = useState(locationData);

  // useEffect(() => {
  //   if (searchByValue) {
  //     const newList = list.filter(item => {
  //       return item.type === searchByValue;
  //     });
  //     console.log('newList', newList);
  //     setList(newList);
  //   } else {
  //     setList(locationData);
  //   }
  // }, [searchByValue, findBrandValue]);
  const renderItem = item => (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{width: 50, height: 50, borderWidth: 2, borderRadius: 4}}
        />
        <Text style={[styles.text, {marginLeft: 20}]}>{item.title}</Text>
      </View>
      <View
        style={{
          borderRadius: 4,
          borderWidth: 2,
          padding: 5,
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: windowWidth * 0.6,
        }}>
        <Text style={styles.text}>{item.price}</Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={data}
      renderItem={({item}) => renderItem(item)}
      horizontal={horizontal}
      nestedScrollEnabled={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
});
