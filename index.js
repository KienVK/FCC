/**
 * @format
 */
//import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import StackNavigation from './src/newNavigation/StackNavigation';

AppRegistry.registerComponent(appName, () => StackNavigation);
