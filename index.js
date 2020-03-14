import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Browse } from './modules/browse/Browse.js';
import { Create } from './modules/create/Create.js';
import { Register } from './modules/registration/Register.js';
import { Colors } from './Constants/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

if (__DEV__) {
  activateKeepAwake();
}

const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer
        tabBarOptions={{
          activeTintColor: Colors.ACCENT
        }}
      >
        <Tab.Navigator>
          <Tab.Screen name="Browse" component={Browse} />
          <Tab.Screen name="Create" component={Create} />
          <Tab.Screen name="Register" component={Register} />

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

registerRootComponent(App);
