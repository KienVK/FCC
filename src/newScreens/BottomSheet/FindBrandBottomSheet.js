import React, {useState} from 'react';
import {windowHeight} from '../../utils/Dimensions';
import BottomSheet from 'reanimated-bottom-sheet';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {BrandData} from '../../model/data';
import CheckBox from '@react-native-community/checkbox';
import {storage} from '../../utils/Storage';
const FindBrandBottomSheet = ({bs, fall, OnClose}) => {
  const [data, setData] = useState(BrandData);
  const renderHeader = () => (
    <View style={styles.bottom_sheet_header}>
      <TextInput
        style={{height: 30, width: 120, borderWidth: 1, borderRadius: 4}}
        placeholder="Find Brand"
      />

      <TouchableOpacity
        style={styles.button_close_bottom_sheet}
        onPress={() => {
          bs.current.snapTo(1);
        }}>
        <Image source={require('../../assets/clear2.png')} />
      </TouchableOpacity>
    </View>
  );

  const handleChange = (id, value) => {
    let temp = data.map(product => {
      if (id === product.id) {
        return {...product, state: value};
      }
      return product;
    });
    setData(temp);
  };

  const renderItem = item => (
    <View style={styles.checkboxWrapper}>
      <CheckBox
        value={item.state}
        tintColor="#000"
        animationDuration={0.1}
        onValueChange={value => {
          handleChange(item.id, value);
        }}
      />
      <Text style={{marginLeft: 30}}>{item.title}</Text>
    </View>
  );

  const renderInner = () => (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9fb6cd',
        paddingBottom: 20,
      }}>
      <FlatList data={data} renderItem={({item}) => renderItem(item)} />
      <Button title={'Clear'} onPress={() => setData(BrandData)} />
      <TouchableOpacity
        style={{padding: 10, borderRadius: 4, borderWidth: 2}}
        onPress={() => getValueResult()}>
        <Text style={{fontWeight: '500', fontSize: 16}}>Show Results</Text>
      </TouchableOpacity>
    </View>
  );

  const getValueResult = () => {
    const result = data.filter(res => {
      return res.state === true;
    });
    storage.set('FindBrandKey', JSON.stringify(result));
    bs.current.snapTo(1);
  };
  return (
    <BottomSheet
      ref={bs}
      snapPoints={[windowHeight * 0.45, 0]}
      initialSnap={1}
      callbackNode={fall}
      enabledGestureInteraction={true}
      renderHeader={renderHeader}
      renderContent={renderInner}
      onCloseEnd={OnClose}
    />
  );
};
const styles = StyleSheet.create({
  bottom_sheet_header: {
    paddingTop: 10,
    backgroundColor: '#9fb6cd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },

  text_header: {
    textAlign: 'center',
    color: 'white',
    marginTop: 8,
    marginBottom: 15,
  },
  button_close_bottom_sheet: {
    position: 'absolute',
    end: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginEnd: 20,
    marginTop: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
export default FindBrandBottomSheet;
