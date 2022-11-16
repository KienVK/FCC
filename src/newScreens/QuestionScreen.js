import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {storage} from '../utils/Storage';
const initialState = {
  StoreID: false,
  CustomerID: false,
  CurrentLocation: false,
  Places: false,
};

const QuestionScreen = ({bs}) => {
  // const [state, setState] = React.useState(
  //   storage.getString('SearchByStateInit')
  //     ? JSON.parse(storage.getString('SearchByStateInit'))
  //     : initialState,
  // );
  const [state, setState] = React.useState(
    initialState
  );
  const [toggleButton, setToggleButton] = React.useState(false);
  const getResult = () => {
    storage.set('SearchByStateInit', JSON.stringify(state));
    Object.entries(state).map(([key, value]) => {
      if (value) {
        storage.set('SearchByKey', String(key));
        console.log(storage.getString('SearchByKey'));
      }
    });

    if (JSON.stringify(state) === JSON.stringify(initialState)) {
      storage.set('SearchByKey', '');
    }
    bs.current.snapTo(1);
  };
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          alignItems: 'center',
          flex: 1,
        }}>
        <View style={styles.container}>
          <View>
            <View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={state.StoreID}
                  animationDuration={0.1}
                  tintColor="#000"
                  onValueChange={value =>
                    setState({
                      StoreID: value,
                      CustomerID: false,
                      CurrentLocation: false,
                      Places: false,
                    })
                  }
                />
                <Text style={{marginLeft: 30}}>Store ID</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={state.CustomerID}
                  animationDuration={0.1}
                  tintColor="#000"
                  onValueChange={value =>
                    setState({
                      StoreID: false,
                      CustomerID: value,
                      CurrentLocation: false,
                      Places: false,
                    })
                  }
                />
                <Text style={{marginLeft: 30}}>Customer ID</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={state.CurrentLocation}
                  tintColor="#000"
                  animationDuration={0.1}
                  onValueChange={value =>
                    setState({
                      StoreID: false,
                      CustomerID: false,
                      CurrentLocation: value,
                      Places: false,
                    })
                  }
                />
                <Text style={{marginLeft: 30}}>Current Location</Text>
              </View>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={state.Places}
                  tintColor="#000"
                  animationDuration={0.1}
                  onValueChange={value => {
                    setState({
                      StoreID: false,
                      CustomerID: false,
                      CurrentLocation: false,
                      Places: value,
                    });
                  }}
                />
                <Text style={{marginLeft: 30}}>Places</Text>
              </View>
            </View>
            <Button
              onPress={() => {
                setState({
                  StoreID: false,
                  CustomerID: false,
                  CurrentLocation: false,
                  Places: false,
                });
              }}
              title="Clear"
            />
            <TouchableOpacity
              onPress={() => {
                setToggleButton(toggleButton => !toggleButton);
                getResult();
              }}
              style={{
                borderWidth: 2,
                borderRadius: 4,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Show Result</Text>
            </TouchableOpacity>
          </View>
          {toggleButton && (
            <View style={styles.resultContainer}>
              {Object.entries(state).map(([key, value]) => {
                return (
                  value && (
                    <View key={key} style={{paddingHorizontal: 5}}>
                      <Text style={{color: 'black'}}>{key}</Text>
                    </View>
                  )
                );
              })}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 10,
  },
});
export default QuestionScreen;
