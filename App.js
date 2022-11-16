// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import 'react-native-gesture-handler';
// import React, {useRef, useState} from 'react';
// //import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
// import {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import MapView from 'react-native-map-clustering';
// // import Autocomplete from 'react-native-autocomplete-input';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
//
// //import {Button} from 'react-native';
// import {
//   Image,
//   LogBox,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from 'react-native';
//
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Button, Menu, Provider} from 'react-native-paper';
// import DropDownPicker from 'react-native-dropdown-picker';
// //import { Input } from 'react-native-elements';
// //import Geolocation from 'react-native-geolocation-service';
// import Animated from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet';
//
// LogBox.ignoreAllLogs();
// const Drawer = createDrawerNavigator();
//
// const Stack = createNativeStackNavigator();
//
// const data = ['dropdown1', 'drop down 2', 'a drop down'];
//
// const AuthStack = () => {
//   return (
//     <Drawer.Navigator>
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
//       <Stack.Screen name="HomeScreen7" component={HomeScreen7} />
//       <Stack.Screen name="HomeScreen8" component={HomeScreen8} />
//     </Drawer.Navigator>
//   );
// };
//
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen
//           name="Main"
//           component={Main}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="AuthStack">{() => <AuthStack />}</Stack.Screen>
//
//         {/* <AuthStack /> */}
//         {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//
// const Main = ({navigation}) => {
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <View style={{}}>
//         <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
//           GAMEON
//         </Text>
//       </View>
//
//       <TouchableOpacity
//         onPress={() => navigation.navigate('AuthStack')}
//         style={{
//           backgroundColor: '#AD40AF',
//           padding: 20,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           color: '#fff',
//           width: '90%',
//           marginBottom: 50,
//         }}>
//         <Text
//           style={{
//             color: '#fff',
//             fontWeight: 'bold',
//           }}>
//           Let's Begin
//         </Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };
//
// const Home = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
//         Home
//       </Text>
//     </View>
//   );
// };
//
// const HomeScreen2 = () => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         // provider={PROVIDER_GOOGLE}
//         // remove if not using Google Maps
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}
//       />
//
//       {/* <View style={styles.searchBox}>
//         <TextInput
//           placeholder="Search here"
//           placeholderTextColor="#000"
//           autoCapitalize="none"
//           style={{flex: 1, padding: 0}}
//         />
//       </View> */}
//
//       <View style={styles.searchBox}>
//         <Autocomplete
//
//         //onChangeText={}
//         />
//       </View>
//       {/*
//       <View style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignSelf: 'center',
//           }}
// >
//         <GooglePlacesAutocomplete
//           placeholder="Search"
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//             console.log(data, details);
//           }}
//           query={{
//             key: 'YOUR API KEY',
//             language: 'en',
//           }}
//         />
//       </View> */}
//     </View>
//   );
// };
//
// const HomeScreen = ({navigation}) => {
//   // bs = React.createRef();
//   // fall = new Animated.Value(1);
//
//   const [storeID, setStoreID] = useState([
//     {label: 'Store 1 search', value: 'Store 1'},
//     {label: 'Store 2', value: 'Store 2'},
//     {label: 'Store 3', value: 'Store 3'},
//     {label: 'Store 4', value: 'Store 4'},
//   ]);
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//
//   const [brand, setBrand] = useState([
//     {label: 'Brand 1', value: 'Brand 1'},
//     {label: 'Brand 2', value: 'Brand 2'},
//   ]);
//   const [brandOpen, setBrandOpen] = useState(false);
//   const [brandValue, setBrandValue] = useState(null);
//
//   const [product, setProduct] = useState([
//     {label: 'Product 1', value: 'Product 1'},
//     {label: 'Product 2', value: 'Product 2'},
//   ]);
//   const [productOpen, setProductOpen] = useState(false);
//   const [productValue, setProductValue] = useState(null);
//
//   const [miles, setMiles] = useState([
//     {label: 'Miles 1', value: 'Miles 1'},
//     {label: 'Miles 2', value: 'Miles 2'},
//   ]);
//   const [milesOpen, setMilesOpen] = useState(false);
//   const [milesValue, setMilesValue] = useState(null);
//
//   const [price, setPrice] = useState([
//     {label: 'Price 1', value: 'Price 1'},
//     {label: 'Price 2', value: 'Price 2'},
//   ]);
//   const [priceOpen, setPriceOpen] = useState(false);
//   const [priceValue, setPriceValue] = useState(null);
//
//   const [carWash, setCarWash] = useState([
//     {label: 'Car Wash 1', value: 'Car Wash 1'},
//     {label: 'Car Wash 2', value: 'Car Wash 2'},
//   ]);
//   const [carWashOpen, setCarWashOpen] = useState(false);
//   const [carWashValue, setCarWashValue] = useState(null);
//
//   // renderInner = () => (
//   //     <View style={styles.panel}>
//   //       <View style={{alignItems: 'center'}}>
//   //         <Text style={styles.panelTitle}>Upload Photo</Text>
//   //         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
//   //       </View>
//   //       <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
//   //         <Text style={styles.panelButtonTitle}>Take Photo</Text>
//   //       </TouchableOpacity>
//   //       <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
//   //         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
//   //       </TouchableOpacity>
//   //       <TouchableOpacity
//   //         style={styles.panelButton}
//   //         onPress={() => this.bs.current.snapTo(1)}>
//   //         <Text style={styles.panelButtonTitle}>Cancel</Text>
//   //       </TouchableOpacity>
//   //     </View>
//   //   );
//
//   //   renderHeader = () => (
//   //     <View style={styles.header}>
//   //       <View style={styles.panelHeader}>
//   //         <View style={styles.panelHandle} />
//   //       </View>
//   //     </View>
//   //   );
//
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#fff',
//       }}>
//       {/* <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyCjpUr3d_4ClE36wF_2nXmb6T7ERYT8dQE',
//         language: 'en',
//       }}
//     /> */}
//       {/* <ScrollView>
// <GooglePlacesAutocomplete
//       placeholder='Search'
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}
//       query={{
//         key: 'AIzaSyCjpUr3d_4ClE36wF_2nXmb6T7ERYT8dQE',
//         language: 'en',
//       }}
//       currentLocation={true}
//       currentLocationLabel='Current location'
//     />
// </ScrollView> */}
//
//       {/* <GooglePlacesAutocomplete
//       query={{
//         key: 'AIzaSyCjpUr3d_4ClE36wF_2nXmb6T7ERYT8dQE',
//         language: 'en', // language of the results
//       }}
//       onPress={(data, details) => console.log(data, details)}
//       textInputProps={{
//        // InputComp: Input,
//         leftIcon: { type: 'font-awesome', name: 'chevron-left' },
//         errorStyle: { color: 'red' },
//       }}
//     /> */}
//
//       <View
//         style={{
//           flex: 0.1,
//           height: 40,
//           alignItems: 'center',
//           flexWrap: 'wrap',
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//         }}>
//         <View
//           style={{
//             margin: 10,
//             flex: 1.5,
//           }}>
//           <DropDownPicker
//             placeholder={'Store ID'}
//             open={open}
//             value={value}
//             items={storeID}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setStoreID}
//           />
//         </View>
//
//         <View
//           style={{
//             margin: 10,
//             flex: 2,
//           }}>
//           <TextInput
//             placeholder="Current location"
//             style={{
//               height: 40,
//               borderWidth: 2,
//               borderColor: 'black',
//             }}
//           />
//         </View>
//         <View
//           style={{
//             height: 40,
//             margin: 10,
//             flex: 1,
//           }}>
//           <Button
//             onPress={() => navigation.navigate('HomeScreen2')}
//             style={{
//               backgroundColor: 'black',
//               textColor: 'white',
//               borderRadius: 20,
//               borderColor: 'white',
//             }}>
//             <Text style={{color: 'white'}}>Map</Text>
//           </Button>
//         </View>
//       </View>
//
//       <View
//         style={{
//           flex: 0.4,
//           zIndex: 100,
//           elevation: 1000,
//         }}>
//         <ScrollView
//           showsHorizontalScrollIndicator={false}
//           horizontal={true}
//           contentContainerStyle={{
//             alignItems: 'center',
//             flexDirection: 'row',
//           }}>
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//               zIndex: 100,
//             }}>
//             <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
//               <Text>filters</Text>
//             </TouchableOpacity>
//
//             {/* <BottomSheet
//                                 ref={this.bs}
//                                 snapPoints={[330, 0]}
//                                 renderContent={this.renderInner}
//                                 renderHeader={this.renderHeader}
//                                 initialSnap={1}
//                                 callbackNode={this.fall}
//                                 enabledGestureInteraction={true}
//                             /> */}
//           </View>
//
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//               zIndex: 100,
//             }}>
//             <DropDownPicker
//               placeholder={'Brand'}
//               open={brandOpen}
//               value={brandValue}
//               items={brand}
//               setOpen={setBrandOpen}
//               setValue={setBrandValue}
//               setItems={setBrand}
//             />
//           </View>
//
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//             }}>
//             <DropDownPicker
//               placeholder={'Product'}
//               open={productOpen}
//               value={productValue}
//               items={product}
//               setOpen={setProductOpen}
//               setValue={setProductValue}
//               setItems={setProduct}
//             />
//           </View>
//
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//             }}>
//             <DropDownPicker
//               placeholder={'Miles'}
//               open={milesOpen}
//               value={milesValue}
//               items={miles}
//               setOpen={setMilesOpen}
//               setValue={setMilesValue}
//               setItems={setMiles}
//             />
//           </View>
//
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//             }}>
//             <DropDownPicker
//               placeholder={'Price'}
//               open={priceOpen}
//               value={priceValue}
//               items={price}
//               setOpen={setPriceOpen}
//               setValue={setPriceValue}
//               setItems={setPrice}
//             />
//           </View>
//
//           <View
//             style={{
//               margin: 10,
//               flex: 1,
//             }}>
//             <DropDownPicker
//               placeholder={'Car Wash'}
//               open={carWashOpen}
//               value={carWashValue}
//               items={carWash}
//               setOpen={setCarWashOpen}
//               setValue={setCarWashValue}
//               setItems={setCarWash}
//             />
//           </View>
//         </ScrollView>
//       </View>
//
//       <View
//         style={{
//           margin: 20,
//           flex: 0.5,
//         }}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View
//             style={{
//               marginBottom: 60,
//               height: 200,
//               borderWidth: 2,
//               borderColor: 'black',
//               borderRadius: 20,
//             }}>
//             <View
//               style={{
//                 marginTop: 20,
//                 marginStart: 20,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   height: 60,
//                   width: 60,
//                   borderWidth: 2,
//                   borderColor: 'black',
//                   borderRadius: 20,
//                 }}
//               />
//               <Text
//                 style={{
//                   marginStart: 10,
//                 }}>
//                 Gas Station 1
//               </Text>
//
//               <Button
//                 style={{
//                   marginStart: 70,
//                   backgroundColor: 'black',
//                   textColor: 'white',
//                   borderRadius: 20,
//                   borderColor: 'white',
//                 }}>
//                 <Text style={{color: 'white'}}>5.67$</Text>
//               </Button>
//             </View>
//             <View
//               style={{
//                 marginTop: 40,
//                 alignItems: 'center',
//                 flexDirection: 'row-reverse',
//                 justifyContent: 'center',
//               }}>
//               {/* <Image source = {require('./ic_dollar.png')} />
//                             <Image source = {require('./ic_wifi.png')} /> */}
//             </View>
//           </View>
//
//           <View
//             style={{
//               marginBottom: 60,
//               height: 200,
//               borderWidth: 2,
//               borderColor: 'black',
//               borderRadius: 20,
//             }}>
//             <View
//               style={{
//                 marginTop: 20,
//                 marginStart: 20,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   height: 60,
//                   width: 60,
//                   borderWidth: 2,
//                   borderColor: 'black',
//                   borderRadius: 20,
//                 }}
//               />
//               <Text
//                 style={{
//                   marginStart: 10,
//                 }}>
//                 Gas Station 2
//               </Text>
//               <Button
//                 style={{
//                   marginStart: 70,
//                   backgroundColor: 'black',
//                   textColor: 'white',
//                   borderRadius: 20,
//                   borderColor: 'white',
//                 }}>
//                 <Text style={{color: 'white'}}>9.67$</Text>
//               </Button>
//             </View>
//             <View
//               style={{
//                 marginTop: 40,
//                 alignItems: 'center',
//                 flexDirection: 'row-reverse',
//                 justifyContent: 'center',
//               }}>
//               {/* <Image source = {require('./ic_dollar.png')} />
//                             <Image source = {require('./ic_wifi.png')} /> */}
//             </View>
//           </View>
//
//           <View
//             style={{
//               marginBottom: 60,
//               height: 200,
//               borderWidth: 2,
//               borderColor: 'black',
//               borderRadius: 20,
//             }}>
//             <View
//               style={{
//                 marginTop: 20,
//                 marginStart: 20,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <View
//                 style={{
//                   height: 60,
//                   width: 60,
//                   borderWidth: 2,
//                   borderColor: 'black',
//                   borderRadius: 20,
//                 }}
//               />
//               <Text
//                 style={{
//                   marginStart: 10,
//                 }}>
//                 Gas Station 3
//               </Text>
//               <Button
//                 style={{
//                   marginStart: 70,
//                   backgroundColor: 'black',
//                   textColor: 'white',
//                   borderRadius: 20,
//                   borderColor: 'white',
//                 }}>
//                 <Text style={{color: 'white'}}>4.67$</Text>
//               </Button>
//             </View>
//             <View
//               style={{
//                 marginTop: 40,
//                 alignItems: 'center',
//                 flexDirection: 'row-reverse',
//                 justifyContent: 'center',
//               }}>
//               {/* <Image source = {require('./ic_dollar.png')} />
//                             <Image source = {require('./ic_wifi.png')} /> */}
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// const INITIAL_REGION = {
//   latitude: 52.5,
//   longitude: 19.2,
//   latitudeDelta: 8.5,
//   longitudeDelta: 8.5,
// };
//
// const HomeScreen8 = () => {
//   const [visible, setVisible] = React.useState(false);
//
//   const openMenu = () => setVisible(true);
//
//   const closeMenu = () => setVisible(false);
//
//   return (
//     <View style={styles.container}>
//       {/* <MapView
//         // provider={PROVIDER_GOOGLE}
//         // remove if not using Google Maps
//         style={styles.map}
//         region={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}></MapView> */}
//
//       <MapView
//         initialRegion={INITIAL_REGION}
//         style={styles.map}
//         provider={PROVIDER_GOOGLE}>
//         <Marker coordinate={{latitude: 52.4, longitude: 18.7}} />
//         <Marker coordinate={{latitude: 52.1, longitude: 18.4}} />
//         <Marker coordinate={{latitude: 52.6, longitude: 18.3}} />
//         <Marker coordinate={{latitude: 51.6, longitude: 18.0}} />
//         <Marker coordinate={{latitude: 53.1, longitude: 18.8}} />
//         <Marker coordinate={{latitude: 52.9, longitude: 19.4}} />
//         <Marker coordinate={{latitude: 52.2, longitude: 21}} />
//         <Marker coordinate={{latitude: 52.4, longitude: 21}} />
//         <Marker coordinate={{latitude: 51.8, longitude: 20}} />
//       </MapView>
//
//       <View style={styles.searchBox}>
//         <Autocomplete
//
//         //onChangeText={}
//         />
//
//         {/* <ModalDropdown options={['option 1', 'option 2']}/> */}
//       </View>
//       <Provider>
//         <View
//           style={{
//             //paddingTop: 40,
//             flexDirection: 'row',
//             // backgroundColor:'red'
//
//             //justifyContent: 'center',
//           }}>
//           <Menu
//             style={{
//               flexDirection: 'row',
//               backgroundColor: 'black',
//               position: 'absolute',
//               top: 20,
//               //justifyContent: 'center',
//             }}
//             visible={visible}
//             onDismiss={closeMenu}
//             anchor={
//               <Button
//                 style={{
//                   flexDirection: 'row',
//                   backgroundColor: 'green',
//                   top: 12,
//                   //justifyContent: 'center',
//                 }}
//                 onPress={openMenu}>
//                 Show menu
//               </Button>
//             }>
//             <Menu.Item onPress={() => {}} title="Item 1" />
//             <Menu.Item onPress={() => {}} title="Item 2" />
//           </Menu>
//         </View>
//       </Provider>
//     </View>
//   );
// };
//
// const HomeScreen7 = () => {
//   const mapRef = useRef();
//
//   const animateToRegion = () => {
//     let region = {
//       latitude: 42.5,
//       longitude: 15.2,
//       latitudeDelta: 7.5,
//       longitudeDelta: 7.5,
//     };
//
//     mapRef.current.animateToRegion(region, 2000);
//   };
//
//   return (
//     <>
//       <MapView ref={mapRef} initialRegion={INITIAL_REGION} style={{flex: 1}} />
//       <Button onPress={animateToRegion} title="Animate" />
//     </>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     //  ...StyleSheet.absoluteFillObject,
//
//     //  justifyContent: 'flex-end',
//     //  alignItems: 'center',
//     flex: 1,
//   },
//
//   searchBox: {
//     position: 'absolute',
//     left: 150,
//     marginTop: Platform.OS === 'ios' ? 8 : 4,
//     // flexDirection: 'row',
//     backgroundColor: '#fff',
//     width: '60%',
//     alignSelf: 'center',
//     borderRadius: 5,
//     //padding: 5,
//     //shadowColor: '#ccc',
//     height: '4%',
//     // marginLeft: 249,
//     shadowOffset: {width: 0, height: 3},
//     //shadowOpacity: 0.5,
//     // shadowRadius: 5,
//     //elevation: 10,
//   },
//
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });
//
// export default App;
