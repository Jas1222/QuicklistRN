import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import Home from './modules/home/Home.js';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Home);
