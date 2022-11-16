import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight} from '../utils/Dimensions';

const DetailBottomSheet = ({bs, fall, onClick}) => {
  const renderHeader = () => (
    <TouchableOpacity
      activeOpacity={true}
      style={styles.bottom_sheet_header}
      onPress={onClick}>
      <Text style={styles.text_header}>Harry's Bar</Text>
    </TouchableOpacity>
  );

  const renderInner = () => (
    <TouchableOpacity
      onPress={onClick}
      activeOpacity={true}
      style={{
        flexDirection: 'row',
        backgroundColor: '#e5d0b1',
        height: '100%',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <Image
        source={require('../assets/harryBarImage.jpeg')}
        style={{height: 80, width: 80}}
        resizeMode={'contain'}
      />
      <Text
        ellipsizeMode={'tail'}
        numberOfLines={4}
        style={{maxWidth: '60%', marginTop: 10}}>
        Harry's Bar, London: 'the food is stupendous' — restaurant review |
        Financial Times
      </Text>
      <View
        style={{
          marginTop: 30,
          height: 30,
          width: 60,
          borderRadius: 2,
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>5.689</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <BottomSheet
      ref={bs}
      snapPoints={[windowHeight * 0.45, 0]}
      initialSnap={1}
      callbackNode={fall}
      enabledGestureInteraction={true}
      renderHeader={renderHeader}
      renderContent={renderInner}
    />
  );
};
export default DetailBottomSheet;
const styles = StyleSheet.create({
  bottom_sheet_header: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    position: 'relative',
    backgroundColor: '#e5d0b1',
  },

  text_header: {
    textAlign: 'center',
    color: 'black',
    marginTop: 8,
    marginBottom: 15,
    fontSize: 20,
    fontWeight: '700',
  },
});
