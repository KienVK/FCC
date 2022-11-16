import React from 'react';
import {windowHeight} from '../../utils/Dimensions';
import BottomSheet from 'reanimated-bottom-sheet';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QuestionScreen from '../QuestionScreen';
const SearchByBottomSheet = ({bs, fall, OnClose}) => {
  const renderHeader = () => (
    <View style={styles.bottom_sheet_header}>
      <Text style={[{fontSize: 16, fontWeight: '400'}, styles.text_header]} />

      <TouchableOpacity
        style={styles.button_close_bottom_sheet}
        onPress={() => {
          bs.current.snapTo(1);
        }}>
        <Image source={require('../../assets/clear2.png')} />
      </TouchableOpacity>
    </View>
  );
  const renderInner = () => (
    <View
      style={{
        height: '100%',
        backgroundColor: '#9fb6cd',
      }}>
      <QuestionScreen bs={bs} />
    </View>
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
      onCloseEnd={OnClose}
    />
  );
};
const styles = StyleSheet.create({
  bottom_sheet_header: {
    backgroundColor: '#9fb6cd',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    position: 'relative',
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
  },
});
export default SearchByBottomSheet;
