import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Home from './modules/home/Home.js';

AppRegistry.registerComponent(appName, () => Home);
